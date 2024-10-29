import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import claimsStore from "../store/claimsStore";
import { observer } from "mobx-react-lite";
import { ColDef } from "ag-grid-community";
import { Claim } from "../types/claims";

const ClaimsTable = observer(() => {
  const columnDefs: ColDef<Claim>[] = [
    { headerName: "Claim ID", field: "claimId" },
    { headerName: "Subscriber ID", field: "subscriberId" },
    { headerName: "Member Sequence", field: "memberSequence" },
    { headerName: "Claim Status", field: "claimStatus" },
    { headerName: "Billed", field: "billed" },
    { headerName: "Allowed", field: "allowed" },
    { headerName: "Paid", field: "paid" },
    { headerName: "Payment Status Date", field: "paymentStatusDate" },
  ];

  if (!claimsStore.claimsData) return <h1>HHH</h1>;

  return (
    <div className="ag-theme-alpine w-full h-96">
      <AgGridReact<Claim>
        rowData={claimsStore.claimsData}
        columnDefs={columnDefs}
        rowSelection="multiple"
      />
    </div>
  );
});

export default ClaimsTable;
