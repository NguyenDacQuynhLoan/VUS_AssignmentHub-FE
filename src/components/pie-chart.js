import {
  Box,
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
  console.log(props.data); 
    const pattern = [
      {
        id: 0,
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 1,
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]

    const getRandomPattern = () => {
      return Math.floor(Math.random() * 2);
    }

  return (
    <Box>
      <Box sx={{ width: "auto", height: "32.2vh" ,marginLeft:3 }}>
        <ResponsivePie
          data={props.data}
          sortByValue={props.data.value}
          margin={{ top: 20, right: 70, bottom: 30, left: 70 }}
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
          defs={pattern}
          fill={
            props.data.map((e)=>(
              {
                match: {
                  id: e.id,
                },
                id: getRandomPattern(),    
              }
            ))}
        ></ResponsivePie>
        <TableContainer component={Paper} sx={{height:"41vh"}}>
        <Table sx={{ minWidth: "auto" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="left">Subject</TableCell>
              <TableCell align="left">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row" >
                  <Box sx={{
                    backgroundColor:row.color,
                    color:"transparent",
                    width:"2em" ,
                    height:"2em",
                    borderRadius:"50%",
                    }}/>
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
    </Box>
  );
}