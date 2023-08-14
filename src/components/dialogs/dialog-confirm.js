import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogConfirm({
  isOpen,
  OnCloseDialogForm,
  title,
  message,
  OnAcceptDialogForm,
  action
}) {
  return (
    <div>
      <Dialog open={isOpen}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: "red" }}
            onClick={() => OnCloseDialogForm(false)}
          >
            Cancel
          </Button>
          <Button onClick={() => OnAcceptDialogForm(true,action)} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}