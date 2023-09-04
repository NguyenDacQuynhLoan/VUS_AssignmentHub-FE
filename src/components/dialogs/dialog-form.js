import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import axios from "axios";

export default function DialogForm({ 
  isOpen,
  OnCloseDialogForm,
  message,
  title,
  OnAcceptDialogForm,
  FormComponent
}) {


  return (
    <>
      <Dialog fullWidth maxWidth="lg" scroll="paper" 
        open={isOpen} onClose={() => OnCloseDialogForm(false)}>
        <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            {FormComponent}
          </DialogContent>
        <DialogActions>
          <Button sx={{ color: "red" }} 
            onClick={() =>OnCloseDialogForm(false)} >
            Cancel
          </Button>
          <Button type="submit">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}