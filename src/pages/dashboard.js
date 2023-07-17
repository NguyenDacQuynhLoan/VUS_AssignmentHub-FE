import GradeBoardTable from "../components/table/gradeboard-page/dashboard-table";
import TableBreadcrumb from "../components/table/overview-page/components/table-breadcrumb";
import TableFilterComponent from "../components/table/overview-page/components/table-filter";

export default function Dashboard() {
  return (
    <>
      {/* <TableBreadcrumb/> */}
      <TableFilterComponent/>
      <GradeBoardTable/>
      {/* <DataTable isOverviewPage={false}/>  */}
    </>
  );
}