import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PieChart from "../components/pie-chart";
import { TotalContainerComponent } from "../components/overview-totals";
import { DataTable } from "../components/table/overview-page";

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
  // assignment api -> table ,total container

  // user -> pie chart

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1 ,alignItems:"stretch",padding:"0"}}>
        <Box sx={{paddingBottom:2}}>
          <TotalContainerComponent />
        </Box>
        <Grid container columns={{ xs: 4, sm: 12, md: 12 }} >
          <Grid item xs={2} sm={9} md={8.5}>
            <DataTable />
          </Grid>
          <Grid item xs={2} sm={3} md={3.5}>
            <PieChart data={MajorDefault} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}