import { useState } from "react";
import TablePageBody from "../components/table/gradeboard-page/table-body";
import TableBreadcrumb from "../components/table/overview-page/components/table-breadcrumb";
import TablePageToolBar from "../components/table/gradeboard-page/table-toolbar";

export default function Dashboard() {
  const [isReload,setReload] = useState(false);

  const handleReloadChange = (reloadFlag) =>{
    setReload(reloadFlag)
  }

  return (
    <>
      {/* <TableBreadcrumb/> */}
      <TablePageToolBar sendReloadChange={handleReloadChange}/>
      <TablePageBody isReload={isReload}/>
    </>
  );
}