import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import APIServices from "../../../../api";
import { HTTP_METHOD } from "../../../../shared/enums/http-methods";
import { HTTP_ENTITY } from "../../../../shared/enums/http-entity";
import axios from "axios";
import { FormImport } from "../../../dialogs/form-sections/form-user-import";
import { APIExportFile, APIImportFile } from "../../../../api/apiAttachment";
import { useState } from "react";
import SnackbarStatutes from "../../../snackbar";

export default function TableToolBarComponent({
  OnOpenNewButtonDialog,
  OnOpenImportButtonDialog,
}) {
  const [isOpen ,setOpen] = useState(false);
  const [isOpenSnackBar, setOpenSnackBar] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState({
    message: "",
    snackbarType: "",
  });

  const OnExportButtonClicked = async () => {
    APIExportFile().then((res) => {
      var blob = new Blob([res], { type: "application/csv" });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.setAttribute("download", "UserList.csv");
      link.href = url;

      document.body.appendChild(link);
      link.click();
    });
  };

  const OnImportButtonClicked = async() =>{
    setOpen(true);
  }
  
  const OnCloseDialogForm = (e) => {
    setOpen(e);
  };

  const OnAcceptDialogForm = async(file) =>{
    var data = await APIImportFile(file);
    console.log(data);
    console.log(typeof data.result);
    setOpenSnackBar(true);
    if(data != null && data.result.totalSuccess >0){
      setSnackbarContent({
        message:`Total Success ${data.result.totalSuccess} lines , Total Fail ${data.result.totalFail} lines`,
        snackbarType: data.executionStatus
      })
    }else{
      setSnackbarContent({
        message:`Can\'t import file.`,
        snackbarType:false
      })
    }
    setOpen(false);
  }

  return (
    <>
      <Button
        onClick={() => OnOpenNewButtonDialog()}
        variant="contained"
        sx={{
          marginRight: 2,
          cursor: "pointer",
          backgroundColor: "default.dark",
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
          backgroundColor: "default.dark",
        }}
        startIcon={<FileUploadIcon />}
        onClick={OnImportButtonClicked}
      >
        Import
      </Button>
      <Button
        variant="contained"
        sx={{
          marginRight: 2,
          cursor: "pointer",
          backgroundColor: "default.dark",
        }}
        startIcon={<FileDownloadIcon />}
        onClick={OnExportButtonClicked}
      >
        Export
      </Button>
      <FormImport
        isOpen={isOpen}
        OnCloseDialogForm={OnCloseDialogForm}
        OnAcceptDialogForm={OnAcceptDialogForm}
      />
      <SnackbarStatutes
        isOpen={isOpenSnackBar}
        message={snackbarContent.message}
        snackbarType={snackbarContent.snackbarType}
      />  
    </>
  );
}
