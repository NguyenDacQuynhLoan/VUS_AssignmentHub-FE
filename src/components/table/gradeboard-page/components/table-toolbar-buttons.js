import { 
  Button 
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function TableToolBarComponent({
  OnOpenNewButtonDialog,
  OnOpenImportButtonDialog
}) {
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
      >
        Export
      </Button>
    </>
  );
}