import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Tooltip,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { DatePicker } from "@mui/x-date-pickers";
import FormUserComponent from "../../dialogs/form-sections/form-user";
import TableSearchComponent from "./components/table-search";
import TableToolBarComponent from "./components/table-toolbar-buttons";
import TableFilterComponent from "./components/table-filter";

const majorOptions = [
  'Finnace',
  'Computer Science',
  'Law',
];

const subjectOptions = [
  'HTML & CSS',
  'Human Law',
  'Account',
];


const gradeOptions = [
  'A',
  'B',
  'C',
  'D',
  'F'
];

export default function TablePageToolBar({sendReloadChange,sendFilterValue,sendSearchValue}) {
  const [isOpen, setDialogOpen] = React.useState(false);

  const [filterForm, setFilterForm] = React.useState({ 
    majors: [], 
    studentCode:"",
    studentName:"",
    subjects :[],
    grades:[],
  });

  // Show new button dialog
  const OnOpenNewButtonDialog = () => {
    setDialogOpen(true)
  }

  // Close new button dialog
  const OnCloseDialogForm = (e) => {
    setDialogOpen(e);
  }

  const handleFilterValue = (filterValue) =>{
    sendFilterValue(filterValue);
  }

  const handleSearchValue = (keyword) =>{
    sendSearchValue(keyword);
  }

  return (
    <Box sx={{ paddingBottom: 1 }}>
      <Grid container spacing={4} sx={{ paddingBottom: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={7}>
          <TableSearchComponent searchValue={handleSearchValue}/>
        </Grid>
        <Grid item xs={2} sm={4} md={5} sx={{ display: "flex", justifyContent: 'flex-end' }}>
          <TableToolBarComponent OnOpenNewButtonDialog={OnOpenNewButtonDialog}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <TableFilterComponent filterValue={handleFilterValue}/>
        </Grid>
      </Grid>
      <FormUserComponent
        title={"Create User"}
        isOpen={isOpen} 
        sendReloadChange={sendReloadChange}
        OnCloseDialogForm={OnCloseDialogForm}
      />
    </Box>
  );
}