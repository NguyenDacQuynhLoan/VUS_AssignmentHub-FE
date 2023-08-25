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
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker } from "@mui/x-date-pickers";

import DialogForm from "../dialogs/dialog-form";
import { FormChangePassword } from "../dialogs/form-sections/form-user-password";
import { FormUser } from "../dialogs/form-sections/form-user";

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

export default function TableFilterComponent() {
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
  const OnCloseNewButtonDiaglog = (e) => {
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
          <TextField
            sx={{ width: "100%" }}
            label="Searching"
            variant="standard"
            placeholder="Enter keyword"
            InputProps={{
              endAdornment: (
                <Tooltip sx={{ cursor: "pointer" }} title="Search">
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                </Tooltip>
              ),
            }}
          />
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
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ paddingRight: 1 }}>Filter</Typography>
          <FilterListIcon />
        </AccordionSummary>
        <AccordionDetails>
          <form noValidate onSubmit={OnFilterButtonClicked}>
            <FormControl fullWidth>
              <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={3} >
                  <InputLabel id="demo-simple-select-label">
                    Major
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    sx={{ width: "100%" }}
                    label="Major"
                    multiple
                    value={major}
                    onChange={OnFilterMajorSelect}
                    renderValue={(selected) => selected.join(', ')}
                  >
                    <MenuItem key="" value="">None</MenuItem>
                    {majorOptions.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={major.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={3}>
                  <Stack spacing={3}>
                    <TextField
                      name="studentCode"
                      label="Student Code" />
                  </Stack>
                </Grid>
                <Grid item xs={4}>
                  <Stack spacing={3}>
                    <TextField
                      name="studentName"
                      label="Student Name"
                    // value={formData.email}
                    // onChange={handleChange}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
                  <Stack spacing={3}>
                    <FormControlLabel
                      control={
                        <Switch name="antoine" size="medium" />
                        // checked={state.antoine} onChange={handleChange} 
                      }
                      label={"Male"}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={6} >
                  <InputLabel id="select-subject" sx={{ marginTop: 11 }}>
                    Subject
                  </InputLabel>
                  <Select
                    multiple
                    label="Subject"
                    labelId="select-subject"
                    sx={{ width: "100%" }}
                    value={subject}
                    onChange={OnFilterSubjectSelect}
                    renderValue={(e) => e.join(', ')}
                  >
                    <MenuItem key="" value="">None</MenuItem>
                    {subjectOptions.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={subject.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={4}>
                  <Stack spacing={3}>
                    <TextField
                      name="assignmentTitle"
                      label="Assignment Title" />
                  </Stack>
                </Grid>
                <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
                  <Stack spacing={3}>
                    <FormControlLabel
                      control={
                        <Switch name="antoine" size="medium" />
                        // checked={state.antoine} onChange={handleChange} 
                      }
                      label={"Checked"}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={3} >
                  <InputLabel id="select-grade" sx={{ marginTop: 22 }}>
                    Grade
                  </InputLabel>
                  <Select
                    labelId="select-grade"
                    sx={{ width: "100%" }}
                    label="Grade"
                    multiple
                    value={grade}
                    onChange={OnFilterGradeSelect}
                    renderValue={(selected) => selected.join(', ')}
                  >
                    <MenuItem key="" value="">None</MenuItem>
                    {gradeOptions.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={grade.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
                  <DatePicker
                    label={"Start date"}
                    sx={{ width: "100%" }}
                    slotProps={{
                      actionBar: {
                        actions: ["clear", "today"],
                      },
                    }} />
                </Grid>
                <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
                  <DatePicker
                    label={"End date"}
                    sx={{ width: "100%" }}
                    slotProps={{
                      actionBar: {
                        actions: ["clear", "today"],
                      },
                    }} />
                </Grid>

                <Grid item xs={12}>
                  <Button variant="contained" type="submit" sx={{ marginRight: 2 }}>Filter</Button>
                  <Button variant="outlined" type="submit">Clear</Button>
                </Grid>
              </Grid>
            </FormControl>
          </form>
        </AccordionDetails>
      </Accordion>
      <DialogForm 
        title={"Create User"}
        isOpen={isOpen} 
        FormComponent={<FormUser/>}
        OnCloseDiaglogForm={OnCloseNewButtonDiaglog} 
      />
    </Box>
  );
}