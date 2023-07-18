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
  FormLabel,
  Grid,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Switch,
  TextField,
  Tooltip,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import DialogForm from "../../../dialogs/dialog-form";
import { DatePicker } from "@mui/x-date-pickers";
import { Label } from "@mui/icons-material";

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function TableFilterComponent() {
  const [isOpen, setDialogOpen] = React.useState(false);
  const [personName, setPersonName] = React.useState([]);

  // filter select class 
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const OnOpenNewDialogForm = () => {
    setDialogOpen(true)
  }
  const OnCloseDiaglogForm = (e) => {
    setDialogOpen(e);
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
            // label="With normal TextField"
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
            onClick={() => OnOpenNewDialogForm()}
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
              // borderColor: "default.light",
              // color: "default.light",
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
              // borderColor: "default.light",
              // color: "default.light",
            }}
            startIcon={<FileDownloadIcon />}
          >
            Export
          </Button>
        </Grid>
      </Grid>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ paddingRight: 1 }}>Filter</Typography>
          <FilterListIcon />
        </AccordionSummary>
        <AccordionDetails>
          <form noValidate >
            {/* onSubmit={onSubmitClicked} */}
            <FormControl fullWidth>
              <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>

                {/* first row */}
                <Grid item xs={3} sx={{ paddingTop: "15px !important" }}>
                  <Stack spacing={3}>
                    <TextField
                      name="studentCode"
                      label="Student Code" />
                  </Stack>
                </Grid>
                <Grid item xs={4} sx={{ paddingTop: "15px !important" }}>
                  <Stack spacing={3}>
                    <TextField

                      name="studentName"
                      label="Student Name"
                    // value={formData.email}
                    // onChange={handleChange}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={5} sx={{ paddingTop: "15px !important" }}>
                  <Stack spacing={3}>
                    <Select
                      label="Classes"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(', ')}
                    // MenuProps={MenuProps}
                    >
                      <MenuItem key="" value="">None</MenuItem>
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>
                </Grid>

                {/* second row */}
                <Grid item xs={2} sx={{ paddingTop: "15px !important" }}>
                  <Stack spacing={3}>
                    <TextField
                      name="assignmentTitle"
                      label="Assignment Title" />
                  </Stack>
                </Grid>
                <Grid item xs={3} sx={{ paddingTop: "15px !important", display: "flex", alignItems: "center" }}>
                  <Typography sx={{ padding: "0 10px", fontSize: "small" }}>Date From :</Typography>
                  <DatePicker />
                </Grid>
                <Grid item xs={3} sx={{ paddingTop: "15px !important", display: "flex", alignItems: "center" }}>
                  <Typography sx={{ padding: "0 10px", fontSize: "small" }}>Date To :</Typography>
                  <DatePicker />
                </Grid>
                <Grid item xs={2} sx={{ paddingTop: "15px !important" }}>
                  <Stack>
                    <Select
                      label="Classes"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(', ')}
                    // MenuProps={MenuProps}
                    >
                      <MenuItem key="" value="">None</MenuItem>
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>
                </Grid>
                <Grid item xs={1} sx={{ paddingTop: "15px !important", display: "flex", alignItems: "center" }}>
                  <Stack spacing={3}>
                    <FormControlLabel
                      control={
                        <Switch name="antoine" size="medium" />
                        // checked={state.antoine} onChange={handleChange} 
                      }
                      label="Status"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="outlined" type="submit" sx={{ marginRight: 2 }}>Filter</Button>
                  <Button variant="outlined" type="submit">Clear</Button>
                </Grid>
              </Grid>
            </FormControl>
          </form>
        </AccordionDetails>
      </Accordion>
      <DialogForm isOpen={isOpen} OnCloseDiaglogForm={OnCloseDiaglogForm} />
    </Box>
  );
}