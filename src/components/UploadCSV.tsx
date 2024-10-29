import { useState } from "react";
import { Dropzone, FileWithPath } from "@mantine/dropzone";
import { Text, Group, Button, Alert, Stack } from "@mantine/core";
import { IconUpload, IconFile } from "@tabler/icons-react";
import Papa from "papaparse";
import { observer } from "mobx-react-lite";
import claimsStore from "../store/claimsStore";
import ClaimsTable from "./ClaimsTable";
import { parseCSVToClaims } from "../utils/parseUtils";

const UploadCSV = observer(() => {
  const [file, setFile] = useState<FileWithPath | null>(null);
  const [showTable, setShowTable] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileDrop = (files: FileWithPath[]) => {
    const selectedFile = files[0];
    if (
      selectedFile?.type === "text/csv" ||
      selectedFile?.name.endsWith(".csv")
    ) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError("Please upload a valid CSV file.");
    }
  };

  const handleUpload = () => {
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const claimsData = parseCSVToClaims(results.data);
          if (claimsData.length > 0) {
            claimsStore.setClaimsData(claimsData);
            setShowTable(true);
            setError(null);
          } else {
            setError("No valid claims data found in the CSV file.");
          }
        },
        error: (error) => {
          setError(`Error parsing CSV: ${error.message}`);
        },
      });
    }
  };

  return (
    <>
      <div className="mb-8">
        <Dropzone
          onDrop={handleFileDrop}
          accept="text/csv"
          styles={(theme) => ({
            root: {
              padding: theme.spacing.xl,
              border: `2px dashed ${theme.colors.gray[4]}`,
              backgroundColor: theme.colors.gray[0],
              borderRadius: theme.radius.md,
              cursor: "pointer",
              "&:hover": { backgroundColor: theme.colors.gray[1] },
            },
          })}
        >
          <Stack align="center" gap="sm">
            <IconUpload size={48} color="gray" />
            <Text size="lg" c="dimmed">
              Drag a CSV file here or click to select a file
            </Text>
          </Stack>
        </Dropzone>

        {file && (
          <div className="mt-4">
            <Group>
              <IconFile size={24} />
              <Text>File ready to upload: {file.name}</Text>
            </Group>
            <div className="flex items-center mt-4 gap-1">
              <Button onClick={handleUpload}>Upload</Button>
              <span>(view data in table)</span>
            </div>
          </div>
        )}

        {error && (
          <Alert color="red" mt="md">
            {error}
          </Alert>
        )}
      </div>
      {showTable && (
        <>
          <ClaimsTable />
          <div className="flex justify-end">
            <Button onClick={() => console.log("Approve")} mt="md">
              Approve
            </Button>
          </div>
        </>
      )}
    </>
  );
});

export default UploadCSV;
