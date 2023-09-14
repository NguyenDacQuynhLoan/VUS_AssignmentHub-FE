import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
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


const majorOptions = ["Finnace", "Computer Science", "Law"];

const subjectOptions = ["HTML & CSS", "Human Law", "Account"];

const gradeOptions = ["A", "B", "C", "D", "F"];

export default function TableFilterComponent({filterValue}) {

  const [formValue, setFormValue] = React.useState({
    major:"",
    userCode:"",
    userName:"",
    gender:"",
    grade:"",
    subject:"",
    createdDate:"",
    updatedDate:""
  });

  const OnFilterButtonClicked = (e) => {
    e.preventDefault();
    filterValue(formValue);
  };

  // get form data value
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <Accordion expanded="true">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ paddingRight: 1 }}>Filter</Typography>
        <FilterListIcon />
      </AccordionSummary>
      <AccordionDetails>
        <form noValidate onSubmit={OnFilterButtonClicked}>
          <FormControl fullWidth>
            <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={3}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Major"
                  select
                  name="major"
                  onChange={handleChange}
                >
                  <MenuItem key="" value="">
                    <i>None</i> 
                  </MenuItem>
                  {majorOptions.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={3}>
                <Stack spacing={3}>
                  <TextField name="studentCode" label="Student Code" />
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={3}>
                  <TextField
                    name="studentName"
                    label="Student Name"
                    onChange={handleChange}
                  />
                </Stack>
              </Grid>
              <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
                <Stack spacing={3}>
                  <FormControlLabel
                    control={
                      <Switch name="antoine" size="medium" />
                    }
                    label={"Male"}
                  />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  label="Subject"
                  name="subject"
                  labelId="select-subject"
                  sx={{ width: "100%" }}
                  onChange={handleChange}
                >
                  <MenuItem key="" value="">
                    <i>None</i>
                  </MenuItem>
                  {subjectOptions.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={3}>
                  <TextField name="assignmentTitle" label="Assignment Title" />
                </Stack>
              </Grid>
              <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
                <Stack spacing={3}>
                  <FormControlLabel
                    control={
                      <Switch name="antoine" size="medium" />
                    }
                    label={"Checked"}
                  />
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  labelId="select-grade"
                  sx={{ width: "100%" }}
                  label="Grade"
                  select
                  name="grade"
                  onChange={handleChange}
                >
                  <MenuItem key="" value="">
                    None
                  </MenuItem>
                  {gradeOptions.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
                <DatePicker
                  label={"Start date"}
                  sx={{ width: "100%" }}
                  slotProps={{
                    actionBar: {
                      actions: ["clear", "today"],
                    },
                  }}
                />
              </Grid>
              <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
                <DatePicker
                  label={"End date"}
                  sx={{ width: "100%" }}
                  slotProps={{
                    actionBar: {
                      actions: ["clear", "today"],
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ marginRight: 2 }}
                >
                  Filter
                </Button>
                <Button variant="outlined" type="submit">
                  Clear
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}