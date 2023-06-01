import { Paper } from "@mui/material";
import { Box, display } from "@mui/system";
import React, { useEffect } from "react";
import PieChart from "../components/admin/pie-chart";
import axios from 'axios';
// sample chart data
const Data = [
  {
    id: "css",
    label: "css",
    value: 23,
    color: "hsl(352, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 375,
    color: "hsl(119, 70%, 50%)",
  },
  {
    id: "java",
    label: "java",
    value: 151,
    color: "hsl(165, 70%, 50%)",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 66,
    color: "hsl(153, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 31,
    color: "hsl(353, 70%, 50%)",
  },
];

export default function Home() {
  const [token, setToken] = React.useState();
  
    // get token
    React.useEffect = () =>{
      var url = "http://localhost:8080/EduSystem/api/auth/login";
      axios.get(url).then((res)=>{
        setToken(res.data);
      });
    }
  // const [temp, settemp] = React.useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:8080/AssigmentSubmissionApp/users').then((res)=>{
  //     console.log(res.data);
  //     res.data.forEach(element => {
  //       settemp(element.assignedDate)
  //     });
  //   })
  // }, []);

  return (
    <>
      <h1>This is home page</h1>
      <Box sx={{display:'flex'}}>
        <Paper elevation={2}>111</Paper>
        <Paper elevation={2}>111</Paper>
        <Paper elevation={2}>111</Paper>
        <p>{token}</p>
      </Box>
      <PieChart data={Data} />
    </>
  );
}
