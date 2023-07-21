import {
  Avatar,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

export default function PieChart({ ...props }) {
    // console.log(`${JSON.stringify(props.data)}`);
  return (
    <>
      <Box sx={{ width: "auto", height: "32.2vh" ,marginLeft:3}}>
        <ResponsivePie
          data={props.data}
          sortByValue={props.data.value}
          margin={{ top: 20, right: 70, bottom: 0, left: 70 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "ruby",
              },
              id: "dots",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
            {
              match: {
                id: "go",
              },
              id: "dots",
            },
            {
              match: {
                id: "python",
              },
              id: "dots",
            },
            {
              match: {
                id: "scala",
              },
              id: "lines",
            },
            {
              match: {
                id: "lisp",
              },
              id: "lines",
            },
            {
              match: {
                id: "elixir",
              },
              id: "lines",
            },
            {
              match: {
                id: "javascript",
              },
              id: "lines",
            },
          ]}
          //   legends={[
          //     {
          //       anchor: "bottom",
          //       direction: "row",
          //       justify: false,
          //       translateX: 0,
          //       translateY: 56,
          //       itemsSpacing: 0,
          //       itemWidth: 65,
          //       itemHeight: 18,
          //       itemTextColor: "#999",
          //       itemDirection: "left-to-right",
          //       itemOpacity: 1,
          //       symbolSize: 18,
          //       symbolShape: "circle",
          //       effects: [
          //         {
          //           on: "hover",
          //           style: {
          //             itemTextColor: "#000",
          //           },
          //         },
          //       ],
          //     },
          //   ]}
        ></ResponsivePie>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: "auto" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Calories</TableCell>
              <TableCell align="center">Calories</TableCell>
              <TableCell align="center">Fat&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Button variant="contained" sx={{ backgroundColor: `${row.color}` }}></Button>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.label}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>

      </Box>
    </>
  );
}
