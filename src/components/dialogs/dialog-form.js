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
import { UserModelFunc } from "../../shared/models/user";
import { FormChangePassword } from "./form-sections/form-user-password";

export default function DialogForm({ 
  // isOpen, 
  isOpen,
  OnCloseDialogForm,
  message,
  title,
  OnAcceptDialogForm,
  FormComponent
}) {
  const [formData, setFormData] = React.useState([]);
  const [date,setDate] = useState()

  const onSubmitClicked = async (e) => {
    e.preventDefault();
    // const year = date.getFullYear();
    // const month = date.getMonth();
    // const day = date.getDate();
    // var dateValue =`${day}-${month}-${year}`

    // formData.dateOfBirth  = dateValue;
    
};
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDateChange = (e) => {
    setDate(e.toDate());
  };

  return (
    <>
      <Dialog fullWidth maxWidth="lg" scroll="paper" 
        open={isOpen} onClose={() => OnCloseDialogForm(false)}>
        {/* onClose={handleClose} */}
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {FormComponent}
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "red" }} onClick={() => OnCloseDialogForm(false)} >
            Cancel
          </Button>
          <Button onClick={() => OnCloseDialogForm(false)} >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}