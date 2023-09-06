import { useState } from "react";
import EnhancedTable from "../components/table/gradeboard-page/table-body";
import TableBreadcrumb from "../components/table/overview-page/components/table-breadcrumb";
import TableToolBarComponent from "../components/table/gradeboard-page/components/table-toolbar-buttons";


export default function Dashboard() {
  const [isReload,setReload] = useState(false);

  const handleReloadChange = (reloadFlag) =>{
    setReload(reloadFlag)
  }

  return (
    <>
      {/* <TableBreadcrumb/> */}
      <TableToolBarComponent sendReloadChange={handleReloadChange}/>
      <EnhancedTable isReload={isReload}/>
    </>
  );
}