import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import { assignmentColumns } from "./data/admin-assignment-header";

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
            {orderBy === e.field  && (
              <Box component="span" sx={visuallyHidden}>
                {order === "desc" ? "sorted descending" : "sorted ascending"}
              </Box>
            )}
          </TableSortLabel>
        </TableCell>
      ))}
    </>
  );
};