import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import APIServices from "../../../../api";
import { HTTP_METHOD } from "../../../../shared/enums/http-methods";
import { HTTP_ENTITY } from "../../../../shared/enums/http-entity";
import axios from "axios";
import { FormImport } from "../../../dialogs/form-sections/form-user-import";
import { APIExportFile } from "../../../../api/apiAttachment";

export default function TableToolBarComponent({
  OnOpenNewButtonDialog,
  OnOpenImportButtonDialog,
}) {
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
        isOpen={true}
        //  message={snackbarContent.message}
        //  snackbarType={snackbarContent.snackbarType}
      />
    </>
  );
}
