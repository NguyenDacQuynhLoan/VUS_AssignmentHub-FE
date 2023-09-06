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

export default function EnhancedTableToolbar({ numSelected,selectedItem } ) {
  const [isOpen, setDialogOpen] = useState(false);
  const [defaultUserValue, setDefaultUserValue] = useState();
  // useEffect(()=>{},[numSelected])

  const OnEditButtonClicked = async() => {
    console.log(selectedItem);
    var userData = await APIServices({
      HttpMethod:HTTP_METHOD.HTTP_GET,
      Data:null,
      Endpoint:`${HTTP_ENTITY.USER}/${selectedItem}`
    })
    console.log(userData);
    setDefaultUserValue(userData.result);
    setDialogOpen(true);
  };

  const OnDeleteButtonClicked = async() => {
    var userData = await APIServices({
      HttpMethod:HTTP_METHOD.HTTP_GET,
      Data:null,
    })
    setDialogOpen(true);
  };

  // Close new button dialog
  const OnCloseDialogForm = (e) => {
    setDialogOpen(e);
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
            <IconButton onClick={() => OnDeleteButtonClicked()}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
      <FormUserComponent
        title={"Update User"}
        isOpen={isOpen}
        updatedUserValue={defaultUserValue}
        // sendReloadChange={sendReloadChange}
        OnCloseDialogForm={OnCloseDialogForm}
      />
    </>
  );
}
