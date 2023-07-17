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
  Grid,
  InputAdornment,
  TextField,
  Tooltip,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import DialogForm from "../../../dialogs/dialog-form";

export default function TableFilterComponent() {
  const [isOpen, setDialogOpen] = React.useState(false);

  const OnOpenNewDialogForm = () =>{
    setDialogOpen(true)
  }
  const OnCloseDiaglogForm = (e) =>{
    setDialogOpen(e);
  }
  return (
    <Box  sx={{ paddingBottom: 1 }}>
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
        <Grid item xs={2} sm={4} md={5} sx={{display:"flex", justifyContent: 'flex-end' }}>
          <Button
          onClick={()=>OnOpenNewDialogForm()}
            variant="contained"
            sx={{
              marginRight: 2, 
              cursor: "pointer",
              backgroundColor:"default.dark"
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
              backgroundColor:"default.dark"
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
              backgroundColor:"default.dark"
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <DialogForm isOpen={isOpen} OnCloseDiaglogForm={OnCloseDiaglogForm}/>
    </Box>
  );
}
