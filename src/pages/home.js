import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import PieChart from "../components/pie-chart";
import { TotalContainerComponent } from "../components/overview-totals";
import { TableViewComponent } from "../components/table/homepage-table";
import { HTTP_METHOD } from "../shared/enums/http-methods";
import { HTTP_ENTITY } from "../shared/enums/http-entity";
import APIServices from "../api";

// sample chart data
export const MajorDefault = [
  {
    id: "Software",
    label: "Software Engineering",
    value: 1311,
    color: "#E9C0A0"
  },
  {
    id: "Finance",
    label: "Finance",
    value: 3224,
    color: "#F47560"
  },
  {
    id: "Computer",
    label: "Computer Science",
    value: 1721,
    color: "#F1E25B"
  },
  {
    id: "Accounting",
    label: "Accounting",
    value: 4218,
    color: "#E7A937"
  },
  {
    id: "Economics",
    label: "Economics",
    value: 2930,
    color: "#60CEBA"
  }
];

export default function HomePage() {
   const [assignmentList , setAssignmentList] = useState();

  useEffect(()=>{
    getAssignmentAsync();
  },[])

  useEffect(() => {},[assignmentList])

  const getAssignmentAsync = async() =>{
    var assignmentList = await APIServices({
      HttpMethod:HTTP_METHOD.HTTP_GET,
      Endpoint:HTTP_ENTITY.ASSIGNMENT,
      Data:null
    })
    setAssignmentList(assignmentList.result);
  }

  const onReloadAssignment = () => { 
    getAssignmentAsync();
  }

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1 ,alignItems:"stretch",padding:"0"}}>
        <Box sx={{paddingBottom:2}}>
           <TotalContainerComponent/>
        </Box>
        <Grid container columns={{ xs: 4, sm: 12, md: 12 }} >
          <Grid item xs={2} sm={9} md={8.5}>
            <TableViewComponent 
              assignmentList={assignmentList}
              onReloadAssignment={onReloadAssignment}/>
          </Grid>
          <Grid item xs={2} sm={3} md={3.5}>
            <PieChart data={MajorDefault} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}