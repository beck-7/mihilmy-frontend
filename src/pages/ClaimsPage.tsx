import UploadCSV from "../components/UploadCSV";

const ClaimsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl text-center font-bold mb-6">Claims Management</h1>
      <UploadCSV />
    </div>
  );
};

export default ClaimsPage;
