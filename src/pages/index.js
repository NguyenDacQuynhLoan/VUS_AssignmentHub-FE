import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PieChart from "../components/pie-chart";
import { TotalContainerComponent } from "../components/overview-totals";
import { DataTable } from "../components/table";

// sample chart data
const Data = [
  {
    id: "css1",
    label: "6666",
    value: 273,
    color: "hsl(352, 70%, 50%)",
  },
  {
    id: "css3",
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

export default function Overview() {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box sx={{paddingBottom:2}}>
        <TotalContainerComponent />
        </Box>
        <Grid container columns={{ xs: 4, sm: 12, md: 12 }}>
          <Grid item xs={2} sm={7} md={8}>
            <DataTable isOverviewPage={true} />
          </Grid>
          <Grid item xs={2} sm={5} md={4}>
            <PieChart data={Data} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}