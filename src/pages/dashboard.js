import { useState } from "react";
import TablePageBody from "../components/table/dashboard-table/table-body";
import TableBreadcrumb from "../components/table/homepage-table/components/table-breadcrumb";
import TablePageToolBar from "../components/table/dashboard-table/table-toolbar";

export default function Dashboard() {
  const [isReload,setReload] = useState(false);

  const [filterValue,setFilterValue] = useState("");
  const [searchValue,setSearchValue] = useState("");

  const handleReloadChange = (reloadFlag) =>{
    setReload(reloadFlag)
  }
  const handleFilterValue = (e) => {
    setFilterValue(e);
  }
  const handleSearchValue = (e) => {
    setSearchValue(e);
  }
  return (
    <>
      <TablePageToolBar 
       sendReloadChange={handleReloadChange}
       sendFilterValue={handleFilterValue}
       sendSearchValue={handleSearchValue}/>
      <TablePageBody 
        isReload={isReload} 
        searchValue={searchValue} 
        filterValue={filterValue}/>
    </>
  );
}