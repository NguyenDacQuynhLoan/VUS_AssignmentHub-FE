import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  TableCell,
  IconButton,
  Collapse,
  TableBody,
  Typography,
  Box,
  Table,
  TableHead,
  TableRow,
  Tooltip,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ConvertDate } from "../../../../shared/func";

export default function DataTableRow({ assignmentList }) {
  useEffect(() => {}, [assignmentList])

  const [openRows, setOpenRows] = useState([]);
  const toggleRow = (index) => {

    setOpenRows((prevOpenRows) => {
      const newOpenRows = [...prevOpenRows];
      newOpenRows[index] = !newOpenRows[index];
      return newOpenRows;
    });
  };

  return (
    <React.Fragment>
      {assignmentList.map((e,index) => (
        <>
          <TableRow
            hover={true}
            selected={openRows[index]}
            sx={{ "& > *": { borderBottom: "unset" } }}
          >
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => toggleRow(index)}
              >
                {openRows[index]  ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>

            <TableCell align="left" component="th" scope="row">
              {e?.code}
            </TableCell>
            <TableCell align="left">{e?.title}</TableCell>
            <TableCell align="left">{ConvertDate(e?.createdDate)}</TableCell>
            <TableCell align="left">{ConvertDate(e?.updatedDate)}</TableCell>
            <TableCell align="left">{e?.userCode}</TableCell>
            <TableCell align="left">{e?.grade}</TableCell>
            <TableCell align="left">{e?.status}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    Detail
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell>Student Code</TableCell>
                        <TableCell>Student Name</TableCell>
                        <TableCell align="left">Major</TableCell>
                        <TableCell align="center">File</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      
                    <TableRow sx={{ width: "100%;" }} key={e?.userCode}>
                      <TableCell component="th" scope="row">
                        {e?.userCode}
                      </TableCell>
                      <TableCell>{e?.userName}</TableCell>
                      <TableCell align="left">{e.major}</TableCell>
                      <TableCell align="right">
                        <Button
                          sx={{
                            padding: 0,
                            maxWidth: "10em",
                            textTransform:"none"
                          }}
                        >
                          <Typography
                            sx={{
                              fontStyle:"italic",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <Tooltip
                            placement="bottom-start"
                            title="View file">

                            {"View Fileeddddddddddddddddddddđdddddddddddddddddddeeeeeeee"}
                            </Tooltip>
                          </Typography>
                        </Button>
                      </TableCell>
                    </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </>
      ))}


    </React.Fragment>
  );
}