import React, { useState } from "react";
import PropTypes from 'prop-types';

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
  Button
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

DataTableRow.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    code: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    studentName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    submitDate: PropTypes.string.isRequired,
    isGrade: PropTypes.bool.isRequired,
    detail: PropTypes.arrayOf(PropTypes.shape({
      amount: PropTypes.number.isRequired,
      customerId: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })).isRequired

  }).isRequired,
};

export default function DataTableRow(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  const onOpenTab = (url) =>{
    window.open(url);
    console.log(url);
  }

  return (
    <React.Fragment>
      <TableRow hover={true} selected={open} sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.code}
        </TableCell>
        <TableCell align="left">
          <Button size="small" variant="outlined" 
            onClick={()=>onOpenTab(`http://localhost:3000/assignments/detail?code=${row.code}&name=${row.studentName}`)}>
              {row.studentName}
            </Button>
        </TableCell>
        <TableCell align="left">{row.subject}</TableCell>
        <TableCell align="left">{row.title}</TableCell>
        <TableCell align="center">{row.submitDate}</TableCell>
        <TableCell align="right">{row.isGrade.toString()}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detail
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.detail.map((e) => (
                    <TableRow sx={{ width: '100%;' }} key={e.date}>
                      <TableCell component="th" scope="row">
                        {e.date}
                      </TableCell>
                      <TableCell>{e.customerId}</TableCell>
                      <TableCell align="right">{e.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(e.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}