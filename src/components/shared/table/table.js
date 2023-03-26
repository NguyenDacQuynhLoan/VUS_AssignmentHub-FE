import * as React from "react";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  TableRow,
  TablePagination,
} from "@mui/material";
import DataTableRow from "./components/table-row";
import { DataTablePagination } from "./components/table-pagination";


//data
const rows = [
  createData(1, "001", "Math", "loan", "Assignment Submit", "2023-03-31", true, [
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
  ]),
  createData(2, "002", "English", "An", "Assignment Submit", "2023-03-31", true, [
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
  ]),
  createData(3, "002", "English", "An", "Assignment Submit", "2023-03-31", true, [
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
  ]),
  createData(4, "002", "English", "An", "Assignment Submit", "2023-03-31", true, [
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
  ]),
  createData(5, "002", "English", "An", "Assignment Submit", "2023-03-31", true, [
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
  ]),
  createData(6, "002", "English", "An", "Assignment Submit", "2023-03-31", true, [
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
  ]),
  createData(7, "002", "English", "An", "Assignment Submit", "2023-03-31", true, [
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
  ]),
  createData(8, "002", "English", "An", "Assignment Submit", "2023-03-31", true, [
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
  ]),
  createData(9, "002", "English", "An", "Assignment Submit", "2023-03-31", true, [
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
  ]),
  createData(10, "002", "English", "An", "Assignment Submit", "2023-03-31", true, [
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
  ]),
  createData(11, "002", "English", "An", "Assignment Submit", "2023-03-31", true, [
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
  ]),
  createData(12, "002", "English", "An", "Assignment Submit", "2023-03-31", true, [
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
  ]),
  createData(13, "002", "English", "An", "Assignment Submit", "2023-03-31", true, [
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
  ]),
  createData(14, "002", "English", "An", "Assignment Submit", "2023-03-31", true, [
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
  ]),
]
function createData(id, code, subject, studentName, title, submitDate, isGrade, detail) {
  return { id, code, subject, studentName, title, submitDate, isGrade, detail };
}

/**
 *  Table with detail row
 */
export function DataTable() {
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);

  const emptyRows =
    pageIndex > 0 ? Math.max(0, (1 + pageIndex) * pageSize - rows.length) : 0;


  const handleChangePageIndex = (event, newPage) => {
    setPageIndex(newPage);
  };

  const handleChangePageSize = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setPageIndex(0);
  };
  return (
    <>
      <TableContainer component={Paper} sx={{ height: 515 }}>
        <Table stickyHeader aria-label="sticky table" size="small" >
          <TableHead>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell align="left">Student Name</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="center">Submit Date</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pageSize > 0
              ? rows
                .slice(pageIndex * pageSize, pageIndex * pageSize + pageSize)
                .map((e) => (
                  <>
                    <DataTableRow key={e.id} row={e} />
                  </>
                ))
              : emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
          </TableBody>

        </Table>

      </TableContainer>
      <TablePagination
        sx={{ bottom: '0' }}
        component="div"
        rowsPerPageOptions={[10, 25, 100]}
        colSpan={3}
        count={rows.length}
        rowsPerPage={pageSize}
        page={pageIndex}
        onPageChange={handleChangePageIndex}
        onRowsPerPageChange={handleChangePageSize}
        ActionsComponent={DataTablePagination}
      />
    </>
  );
}