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

import TablePageHead from './table-head';
import TableHeadButtonsComponent from './components/table-head-buttons';
import APIServices from '../../../api';
import { HTTP_METHOD } from '../../../shared/enums/http-methods';
import { HTTP_ENTITY } from '../../../shared/enums/http-entity';
import { Button } from '@mui/material';

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

/**
 * TABLE
 * @returns 
 */
export default function TablePageBody({isReload,searchValue,filterValue}) {
  const [users,setUsers]= useState([]);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('userCode');

  const [selected, setSelected] = useState([]);


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  
  const getUserList = async() =>{
    var userList = await APIServices({
      HttpMethod: HTTP_METHOD.HTTP_GET,
      Endpoint: `${HTTP_ENTITY.USER}/${page}/${rowsPerPage}`,
      Data: null,
    })
    console.log(userList.result);
    setUsers(userList.result);
  }
  
useEffect(() => {getUserList()}, [isReload,page, rowsPerPage]);

useEffect(() => {}, [searchValue]);
useEffect(() => {filterUserAsync()}, [filterValue]);
  const filterUserAsync = async() =>{
    var filterList = await APIServices({
      HTTP_METHOD:HTTP_METHOD.HTTP_POST,
      Endpoint:HTTP_ENTITY.USER,
      Data:null
    })
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = users.map((n) => n.userCode);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const handleReloadChange = (reloadFlag) =>{
    if(reloadFlag === true){
      getUserList();  
      setSelected([]);
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableHeadButtonsComponent 
          numSelected={selected.length} 
          selectedItem={selected}
          sendReloadChange={handleReloadChange}
        />
        <TableContainer sx={{minHeight:700}}>
          <Table
            aria-labelledby="tableTitle"
            size="small"
          >
            <TablePageHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={users.length}
            />
            <TableBody>
              {
                users.length > 0 ?
                  users.map((row, index) => {
                    const isItemSelected = isSelected(row.userCode);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.userCode)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.userCode}
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
                        >
                          {row.userCode}
                        </TableCell>
                        <TableCell align="left">{row.userName}</TableCell>
                        <TableCell align="left">{row.gender}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.major}</TableCell>
                        <TableCell align="center">{row.assignments.length}</TableCell>
                        <TableCell align="center">{row.subjects.length}</TableCell>
                        <TableCell align="left">{row.major}</TableCell>
                        <TableCell align="left">
                          <Button>DETAIL</Button>
                        </TableCell>
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
          rowsPerPageOptions={[15, 50, 100]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}