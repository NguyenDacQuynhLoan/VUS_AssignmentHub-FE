import { DataTable } from "../components/table";
import TableBreadcrumb from "../components/table/components/table-breadcrumb";
import TableFilterComponent from "../components/table/components/table-filter";

export default function Dashboard() {
  return (
    <>
      <TableBreadcrumb/>
      <TableFilterComponent/>
      <DataTable isOverviewPage={false}/> 
    </>
  );
}