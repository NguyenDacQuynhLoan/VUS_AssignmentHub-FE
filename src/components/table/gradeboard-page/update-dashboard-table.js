import React, { useEffect, useState } from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

import EnhancedTableHead from './components/table-head';
import EnhancedTableToolbar from './components/table-toolbar';
import APIServices from '../../../api';
import { AssignmentModelFunc } from '../../../shared/models/assignment';
import { HTTP_METHOD } from '../../../shared/enums/http-methods';
import { HTTP_ENTITY } from '../../../shared/enums/http-entity';
import { UserModelFunc } from '../../../shared/models/user';

// function createData(
//   code,
//   subject,
//   studentName,
//   title,
//   submitDate,
//   isGrade,
//   assignments
// ) {
//   return { code, subject, studentName, title, submitDate, isGrade, assignments };
// }
// const rows = [
//   createData(
//     "001",
//     "Math",
//     "Loan",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous1",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "002",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "003",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "004",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "005",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "006",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "007",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "008",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "009",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "010",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "011",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "012",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "013",
//     "English",
//     "Cuong",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "014",
//     "English",
//     "Thanh",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "015",
//     "English",
//     "Ho",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "016",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "017",
//     "English",
//     "Truc",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "018",
//     "English",
//     "Thuy",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "019",
//     "English",
//     "Minh",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "020",
//     "English",
//     "Tu",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "021",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "022",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "023",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
//   createData(
//     "024",
//     "English",
//     "An",
//     "Assignment Submit",
//     "2023-03-31",
//     true,
//     [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous2",
//         amount: 1,
//       },
//     ]
//   ),
// ];
function createDataFrame(obj) {
  
}
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function EnhancedTable() {
  const [data, setData] = useState([]);
  const [assignments,setAssignment]= useState([]);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('code');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  useEffect(() => {
    getData();
 }, []);

  const getData = async () => {
    var apiValue = await APIServices({
      // user 
      HttpMethod: HTTP_METHOD.HTTP_GET,
      Data: null,
      Endpoint: HTTP_ENTITY.USER
    })
    var convertedValue = apiValue.map(e => UserModelFunc(e));
  
    setData(convertedValue)
    console.log(data);

    // assignment
    var apiAssignment = await APIServices({
      HttpMethod: HTTP_METHOD.HTTP_GET,
      Data: null,
      Endpoint: HTTP_ENTITY.ASSIGNMENT
    })
    var convertedAssignment = apiAssignment.map(e => AssignmentModelFunc(e));
    setAssignment(convertedAssignment)
    console.log(convertedAssignment);
  }


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = assignments.map((n) => n.code);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - assignments.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(assignments, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={assignments.length}
            />
            <TableBody>
              {
                visibleRows.length > 0 ?
                  visibleRows.map((row, index) => {
                    const isItemSelected = isSelected(row.code);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.code)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.code}
                        selected={isItemSelected}
                        sx={{ cursor: 'pointer' }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.code}
                        </TableCell>
                        <TableCell align="right">{row.title}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    );
                  })
                  : (
                    <TableRow
                      style={{
                        height: (33) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} >
                        No data...
                      </TableCell>
                    </TableRow>
                  )
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 50, 100]}
          component="div"
          count={assignments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}