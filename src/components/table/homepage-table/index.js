import * as React from "react";
import CachedIcon from "@mui/icons-material/Cached";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  TableRow,
  TablePagination,
  Box,
  SvgIcon,
  Button,
  Typography,
} from "@mui/material";
import DataTableRow from "./components/table-row";
import { TableDataPagination } from "./components/table-pagination";
import { DataTableHead } from "./components/table-head";
import APIServices from "../../../api";
import { HTTP_METHOD } from "../../../shared/enums/http-methods";
import { HTTP_ENTITY } from "../../../shared/enums/http-entity";

//data
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
  return order === "desc"
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
 *  Table with detail row
 */
export function TableViewComponent({assignmentList,onReloadAssignment}) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(20);
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);
  
  // const [assignmentList, setAssignmentList] = React.useState([]);

  // change padding for title when screen is >= 24inch
  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1920);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);
  React.useEffect(() => {},[]);
  const getAssignmentAsync = async() =>{
    // try{
    //   var assignmentList = await APIServices({
    //     HttpMethod:HTTP_METHOD.HTTP_GET,
    //     Endpoint:HTTP_ENTITY.ASSIGNMENT,
    //     Data:null
    //   })
    //   setAssignmentList(assignmentList.result);
    // }catch(error){
        
    // }
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  

  return (
    <Box >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 1, paddingTop: isLargeScreen ? 2 : '0', }}>
        <Typography sx={{ fontSize: 20 }}>
          NEW UPDATE
        </Typography>
        <Button
          color="inherit"
          size="large"
          startIcon={
            <SvgIcon fontSize="small">
              <CachedIcon />
            </SvgIcon>
          }
          onClick={()=>onReloadAssignment()}
        >
          Sync
        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ height: "66vh" }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          size="small"
          variant="solid"
        >
          <TableHead>

            <TableRow>
              <DataTableHead
                order={order}
                orderBy={orderBy}
                // onRequestSort={handleRequestSort}
              />

            </TableRow>
            
          </TableHead>
          <TableBody>
            {assignmentList != null && assignmentList.length > 0 && 
            (
              <DataTableRow assignmentList={assignmentList}/>
            )}
          </TableBody>
        </Table>
        {assignmentList != null && assignmentList.length == 0 && (
          <Typography align="center">No data to Display</Typography>
        )} 
      </TableContainer>
    </Box>
  );
}