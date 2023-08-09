import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import DialogForm from '../../dialogs/dialog-form';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

// #region sample data
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
// const headCells = [
//   {
//     id: 'name',
//     numeric: false,
//     disablePadding: true,
//     label: 'Dessert (100g serving)',
//   },
//   {
//     id: 'calories',
//     numeric: true,
//     disablePadding: false,
//     label: 'Calories',
//   },
//   {
//     id: 'fat',
//     numeric: true,
//     disablePadding: false,
//     label: 'Fat (g)',
//   },
//   {
//     id: 'carbs',
//     numeric: true,
//     disablePadding: false,
//     label: 'Carbs (g)',
//   },
//   {
//     id: 'protein',
//     numeric: true,
//     disablePadding: false,
//     label: 'Protein (g)',
//   },
// ];
// #endregion 

const rows = [
  createData(
    1,
    "001",
    "Math",
    "Loan",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous1",
        amount: 1,
      },
    ]
  ),
  createData(
    2,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    2,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    2,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    2,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    2,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    2,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    2,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    2,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    2,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    2,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    2,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    3,
    "003",
    "English",
    "Cuong",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    4,
    "004",
    "English",
    "Thanh",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    5,
    "005",
    "English",
    "Ho",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    6,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    7,
    "002",
    "English",
    "Truc",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    8,
    "002",
    "English",
    "Thuy",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    9,
    "002",
    "English",
    "Minh",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    10,
    "002",
    "English",
    "Tu",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    11,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    12,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    13,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
  createData(
    14,
    "002",
    "English",
    "An",
    "Assignment Submit",
    "2023-03-31",
    true,
    [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous2",
        amount: 1,
      },
    ]
  ),
];
function createData(
  id,
  code,
  subject,
  studentName,
  title,
  submitDate,
  isGrade,
  detail
) {
  return { id, code, subject, studentName, title, submitDate, isGrade, detail };
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

const headCells = [
  { //id, code, subject, studentName, title, submitDate, isGrade, detail 
    id: 'Id',
    numeric: true,
    disablePadding: true,
    label: '',
  },
  {
    id: 'code',
    numeric: false,
    disablePadding: false,
    label: 'Student Code',
  },
  {
    id: 'studentName',
    numeric: false,
    disablePadding: false,
    label: 'Student Name',
  },
  {
    id: 'title',
    numeric: false,
    disablePadding: false,
    label: 'Assignment Title',
  },
  {
    id: 'submitDate',
    numeric: false,
    disablePadding: false,
    label: "Submit Date",
  },
  {
    id: 'grade',
    numeric: false,
    disablePadding: false,
    label: "Grade",
  },
  {
    id: 'Status',
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "edit",
    numeric: false,
    disablePadding: false,
    label: "Edit",
  },
];

function GradeBoardTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            sx={{ padding: 0 }}
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

GradeBoardTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// #region toolbar
function GradeBoardTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}
      {numSelected == 1 ? (
        <Button startIcon={
          <EditIcon />
        }>
          <Tooltip title="Edit">
            Edit
          </Tooltip>
        </Button>
      ) : ""}
      {numSelected >= 1 ? (
        <Button sx={{marginLeft:4,marginRight:2}} startIcon={
          <DeleteIcon />
        }>
          <Tooltip title="Delete">
            Delete
          </Tooltip>
        </Button>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

GradeBoardTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
// #endregion

export default function GradeBoardTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);

  const onOpenTab = (url) => {
    window.open(url);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <GradeBoardTableToolbar numSelected={selected.length} />
        <TableContainer sx={{ height: "72vh" }}>
          <Table sx={{ minWidth: 750 }}>
            <GradeBoardTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `GradeBoard-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        sx={{ height: "3.25vh" }}
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
                      {row.name}
                    </TableCell>
                    <TableCell sx={{ padding: 0 }} align="left">
                      {row.code}
                    </TableCell>
                    <TableCell sx={{ padding: 0.2 }} align="left">
                      <Button size="small" variant="outlined" sx={{ padding: 0 }}
                        onClick={() => onOpenTab(`http://localhost:3000/assignments/detail?code=${row.code}&name=${row.studentName}`)}>
                        {row.studentName}
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: 0 }} align="left">
                      {row.title}
                    </TableCell>
                    <TableCell sx={{ padding: 0 }} align="left">
                      {row.submitDate}
                    </TableCell>
                    <TableCell sx={{ padding: 0 }} align="left">
                      {row.isGrade}
                    </TableCell>
                    <TableCell sx={{ padding: 0 }} align="left">
                      {row.code}
                    </TableCell>
                    <TableCell sx={{ padding: 0 }} align="left">
                      {row.code}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[50, 100, 500]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}