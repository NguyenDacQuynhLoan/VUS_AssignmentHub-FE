import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import PieChart from "../components/pie-chart";
import { TotalContainerComponent } from "../components/overview-totals";
import { TableViewComponent } from "../components/table/homepage-table";
import { HTTP_METHOD } from "../shared/enums/http-methods";
import { HTTP_ENTITY } from "../shared/enums/http-entity";
import APIServices from "../api";



export default function HomePage() {
    const [assignmentList , setAssignmentList] = useState();
    const [checkedTotal,setCheckedTotal] = useState(0);
    const [unCheckedTotal,setUnCheckedTotal] = useState(0);
    const [gradedTotal,setGradeTotal] = useState(0);
    const [chartData,setChartData] = useState([]);

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
    
    var checkedCount = assignmentList.result.filter(e => e.status == "Unchecked").length;
    var unCheckedCount = assignmentList.result.filter(e => e.status == "Checked").length;
    var gradeCount = assignmentList.result.filter(e => e.grade != "None").length;
    setAssignmentList(assignmentList.result);
    setUnCheckedTotal(unCheckedCount);
    setCheckedTotal(checkedCount);
    setGradeTotal(gradeCount);
    
    
    let MajorDefault = [
      {
        id: "Software",
        label: "Software Engineering",
        value: assignmentList.result.filter(e => e.major == "Software").length,
        color: "#E9C0A0"
      },
      {
        id: "Finance",
        label: "Finance",
        value: assignmentList.result.filter(e => e.major == "Finance").length,
        color: "#F47560"
      },
      {
        id: "Computer",
        label: "Computer Science",
        value: assignmentList.result.filter(e => e.major == "Computer").length,
        color: "#F1E25B"
      },
      {
        id: "Accounting",
        label: "Accounting",
        value: assignmentList.result.filter(e => e.major == "Accounting").length,
        color: "#E7A937"
      },
      {
        id: "Economics",
        label: "Economics",
        value: assignmentList.result.filter(e => e.major == "Economics").length, 
        color: "#60CEBA"
      }
    ];

    setChartData(MajorDefault.sort((a,b) => b.value - a.value));
  }

  const onReloadAssignment = () => { 
    getAssignmentAsync();
  }

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1 ,alignItems:"stretch",padding:"0"}}>
        <Box sx={{paddingBottom:2}}>
           <TotalContainerComponent
            checkedTotal={checkedTotal}
            unCheckedTotal={unCheckedTotal}
            assignmentTotal={assignmentList?.length ?? 0}
            gradedTotal={gradedTotal}
           />
        </Box>
        <Grid container columns={{ xs: 4, sm: 12, md: 12 }} >
          <Grid item xs={2} sm={9} md={8.5}>
            <TableViewComponent 
              assignmentList={assignmentList}
              onReloadAssignment={onReloadAssignment}/>
          </Grid>
          <Grid item xs={2} sm={3} md={3.5}>
            <PieChart data={chartData} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}