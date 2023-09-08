import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditIcon from "@mui/icons-material/Edit";
import FormUserComponent from "../../../dialogs/form-sections/form-user";
import { useState } from "react";
import { useEffect } from "react";
import APIServices from "../../../../api";
import { HTTP_METHOD } from "../../../../shared/enums/http-methods";
import { HTTP_ENTITY } from "../../../../shared/enums/http-entity";
import dayjs from "dayjs";
import DialogConfirm from "../../../dialogs/dialog-confirm";
import { DIALOG_ACTION } from "../../../../shared/enums/dialog-action";
import SnackbarStatutes from "../../../snackbar";

export default function EnhancedTableToolbar({ numSelected,selectedItem,sendReloadChange } ) {
  const [isOpenFormUser, setDialogOpenFromUser] = useState(false);
  const [isOpenConfirm, setDialogOpenConfirm] = useState(false);

  const [isOpenSnackBar, setOpenSnackBar] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState({
    message: "",
    snackbarType: "",
  });

  // Dialog setting
  const [dialogContent, setDialogContent] = useState({
    title: "",
    message: "",
    action: 0,
  });
  
  
  const [defaultUserValue, setDefaultUserValue] = useState();

  const OnEditButtonClicked = async() => {
    var userData = await APIServices({
      HttpMethod:HTTP_METHOD.HTTP_GET,
      Data:null,
      Endpoint:`${HTTP_ENTITY.USER}/${selectedItem}`
    })
    setDefaultUserValue(userData.result);
    setDialogOpenFromUser(true);
  };

  const OnDeleteButtonClicked = () => {
    setOpenSnackBar(false);
    try{
      selectedItem.forEach(async(element) => {
        await APIServices({
          HttpMethod:HTTP_METHOD.HTTP_DELETE,
          Data:null,
          Endpoint:`${HTTP_ENTITY.USER}/${element}`
        })  
      });
      setDialogOpenConfirm(true);

      // show snackbar
      setOpenSnackBar(true);
      setSnackbarContent({
        message: "Delete successful",
        snackbarType: true,
      });

    }catch(error){
      setOpenSnackBar(true);
      setSnackbarContent({
        message: "Delete error",
        snackbarType: error.executionStatus,
      });
    }
  };

  // Close new button dialog
  const OnCloseDialogForm = (e) => {
    setDialogOpenFromUser(e);
    setDialogOpenConfirm(e)
  };

  const OnOpenDialogForm = () => {
    setDialogContent({
      title: "Delete User",
      message: "Do you want to delete total " + numSelected + " users ?",
      action: DIALOG_ACTION.DELETE,
    });
    setDialogOpenConfirm(true);
    
  };

  const OnAcceptDialogForm = (e, action) => {
    OnDeleteButtonClicked();

    // turn off
    setDialogOpenConfirm(false);

    sendReloadChange(true);
  };

  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            List
          </Typography>
        )}

        {numSelected == 1 && (
          <Tooltip title="Edit">
            <IconButton onClick={() => OnEditButtonClicked()}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        )}
        {numSelected >= 1 && (
          <Tooltip title="Delete">
            <IconButton onClick={() => OnOpenDialogForm()}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
      <FormUserComponent
        title={"Update User"}
        isOpen={isOpenFormUser}
        updatedUserValue={defaultUserValue}
        sendReloadChange={sendReloadChange}
        OnCloseDialogForm={OnCloseDialogForm}
      />
      <DialogConfirm
            isOpen={isOpenConfirm}
            title={dialogContent.title}
            message={dialogContent.message}
            action={dialogContent.action}
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
