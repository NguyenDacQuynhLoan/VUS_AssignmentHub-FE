import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from '@mui/icons-material/Add';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
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
import FormUserComponent from "../../../dialogs/form-sections/form-user";
import TableSearchComponent from "./table-search";

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

export default function TableToolBarComponent({sendReloadChange}) {
  const [isOpen, setDialogOpen] = React.useState(false);

  const [filterForm, setFilterForm] = React.useState({ 
    majors: [], 
    studentCode:"",
    studentName:"",
    subjects :[],
    grades:[],
  });

  const [major, setMajor] = React.useState([]);
  const [subject, setSubject] = React.useState([]);
  const [grade, setGrade] = React.useState([]);

  // Select major
  const OnFilterMajorSelect = (event) => {
    var value = event.target.value;
    if (!value.includes("")) {
      setMajor(
        typeof value === 'string' ? value.split(',') : value,
      );
    }
    else {
      setMajor([])
    }
  };

  // Select subject
  const OnFilterSubjectSelect = (event) => {
    var value = event.target.value;
    if (!value.includes("")) {
      setSubject(
        typeof value === 'string' ? value.split(',') : value,
      );
    }
    else {
      setSubject([])
    }
  };

  // Select Grade
  const OnFilterGradeSelect = (event) => {
    // const { target: { value } } = event;
    var value = event.target.value;
    if (!value.includes("")) {
      setGrade(
        typeof value === 'string' ? value.split(',') : value,
      );
    }
    else {
      setGrade([])
    }
  };

  // Show new button dialog
  const OnOpenNewButtonDialog = () => {
    setDialogOpen(true)
  }

  // Close new button dialog
  const OnCloseDialogForm = (e) => {
    setDialogOpen(e);
  }

  const OnFilterButtonClicked = () =>{
  }

  const OnButtonsClicked = () =>{
    // switch (key) {
    //   case value:
        
    //     break;
    
    //   default:
    //     break;
    // }
  }

  return (
    <Box sx={{ paddingBottom: 1 }}>
      <Grid
        container
        spacing={4}
        sx={{ paddingBottom: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={7}>
          <TableSearchComponent/>
        </Grid>
        
        <Grid item xs={2} sm={4} md={5} sx={{ display: "flex", justifyContent: 'flex-end' }}>
          <Button
            onClick={() => OnOpenNewButtonDialog()}
            variant="contained"
            sx={{
              marginRight: 2,
              cursor: "pointer",
              backgroundColor: "default.dark"
            }}
            startIcon={<AddIcon />}
          >
            New
          </Button>
          <Button
            variant="contained"
            sx={{
              marginRight: 2,
              cursor: "pointer",
              backgroundColor: "default.dark"
            }}
            startIcon={<FileUploadIcon />}
          >
            Import
          </Button>
          <Button
            variant="contained"
            sx={{
              marginRight: 2,
              cursor: "pointer",
              backgroundColor: "default.dark"
            }}
            startIcon={<FileDownloadIcon />}
          >
            Export
          </Button>
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