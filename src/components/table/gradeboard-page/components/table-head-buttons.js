import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditIcon from "@mui/icons-material/Edit";
import FormUserComponent from "../../../dialogs/form-sections/form-user";
import { useState } from "react";

export default function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  const [isOpen, setDialogOpen] = useState(false);

  // Show new button dialog
  const OnOpenEditButtonDialog = () => {
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
            <IconButton onClick={() => OnOpenEditButtonDialog()}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        )}
        {numSelected >= 1 && (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
      <FormUserComponent
        title={"Update User"}
        isOpen={isOpen}
        // sendReloadChange={sendReloadChange}
        OnCloseDialogForm={OnCloseDialogForm}
      />
    </>
  );
}
