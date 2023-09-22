import { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  TextField,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useEffect } from "react";
import { esES } from "@mui/x-date-pickers";
import { HTTP_METHOD } from "../../../shared/enums/http-methods";
import { HTTP_ENTITY } from "../../../shared/enums/http-entity";
import APIServices from "../../../api";
import SnackbarStatutes from "../../snackbar";

export function FormImport({ title, isOpen, OnCloseDialogForm, UserCode }) {
  const [fileName, setFileName] = useState("");
  const [errorMessage,setErrorMessage] = useState();

  const onSubmitClicked = (e) => {
    e.preventDefault();
    if(fileName == null || fileName == ""){
        setErrorMessage("Please upload File")
    }else{
        setErrorMessage('');
        readCSVFile();
    }
  };

  const getFileName = () => {
    var name = document.getElementById("fileImport").files[0].name;
    setFileName(name);
  };

  const readCSVFile = () => {
    var file = document.getElementById("fileImport");
    if(file.files.length > 0){
      var reader = new FileReader()
      reader.readAsText(file[0])
    }
  }

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="sm"
        scroll="paper"
        open={isOpen}
        onClose={() => OnCloseDialogForm(false)}
      >
        <DialogTitle>Import User</DialogTitle>
        <form noValidate onSubmit={onSubmitClicked}>
          <DialogContent>
            <Box display="flex" gap="10px" alignItems="center">
              <Button variant="contained" component="label">
                Upload File
                <input
                  type="file"
                  id="fileImport"
                  onChange={getFileName}
                  hidden
                />
              </Button>
              {fileName != "" && <Typography>{fileName}</Typography>}
            </Box>
            {errorMessage != "" ? (
                <Typography color="red" marginTop="10px">
                    {errorMessage}
                </Typography>
            ):null}
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ color: "red" }}
              onClick={() => OnCloseDialogForm(false)}
            >
              Cancel
            </Button>
            <Button type="submit">OK</Button>
          </DialogActions>
        </form>
      </Dialog>
      {/* <SnackbarStatutes
        isOpen={isOpenSnackBar}
        message={snackbarContent.message}
        snackbarType={snackbarContent.snackbarType}
      /> */}
    </>
  );
}