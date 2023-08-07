import GradeBoardTable from "../components/table/gradeboard-page/dashboard-table";
import EnhancedTable from "../components/table/gradeboard-page/update-dashboard-table";
import TableBreadcrumb from "../components/table/overview-page/components/table-breadcrumb";
import TableFilterComponent from "../components/table/table-filter";

export default function Dashboard() {
  return (
    <>
      {/* <TableBreadcrumb/> */}
      <TableFilterComponent/>
      <EnhancedTable/>
      {/* <GradeBoardTable/> */}
    </>
  );
}