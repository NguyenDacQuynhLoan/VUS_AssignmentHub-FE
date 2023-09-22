import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import APIServices from "../../../../api";
import { HTTP_METHOD } from "../../../../shared/enums/http-methods";
import { HTTP_ENTITY } from "../../../../shared/enums/http-entity";
import axios from "axios";
import { FormImport } from "../../../dialogs/form-sections/form-user-import";

export default function TableToolBarComponent({
  OnOpenNewButtonDialog,
  OnOpenImportButtonDialog,
}) {
  const OnExportButtonClicked = async () => {
    var sessionValue = JSON.parse(sessionStorage.getItem("Token"));
    var token = sessionValue.token;
    var baseURL = "http://localhost:8090/AssignmentHub";

    await axios
      .get(`${baseURL}${HTTP_ENTITY.USER}/export`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        var blob = new Blob([response.data], { type: "application/csv" });
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
