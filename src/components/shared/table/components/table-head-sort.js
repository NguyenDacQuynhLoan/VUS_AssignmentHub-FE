import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import { assignmentColumns } from "./columns/admin-assignment-header";

// function createData(name, calories, fat, carbs, protein) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Donut', 452, 25.0, 51, 4.9),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0),
//   createData('KitKat', 518, 26.0, 65, 7.0),
//   createData('Lollipop', 392, 0.2, 98, 0.0),
//   createData('Marshmallow', 318, 0, 81, 2.0),
//   createData('Nougat', 360, 19.0, 9, 37.0),
//   createData('Oreo', 437, 18.0, 63, 4.0),
// ];

export const DataTableHead = ({ order, orderBy, onRequestSort }) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <>
      <TableCell />
      {assignmentColumns.map((e,index) => (
        <TableCell
          key={index}
          align={e.align}
          padding={e.disablePadding ? "none" : "normal"}
          sortDirection={orderBy === e.field ? order : false}
        >
          <TableSortLabel
            active={orderBy === e.field}
            direction={orderBy === e.field ? order : "asc"}
            onClick={createSortHandler(e.field)}
          >
            {e.label}
            {orderBy === e.field ? (
              <Box component="span" sx={visuallyHidden}>
                {order === "desc" ? "sorted descending" : "sorted ascending"}
              </Box>
            ) : null}
          </TableSortLabel>
        </TableCell>
      ))}
    </>
  );
};