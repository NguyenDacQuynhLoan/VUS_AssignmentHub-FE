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
  title,
  message,
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
      <Dialog scroll="paper" open={isOpen} onClose={() => OnCloseDialogForm(false)} maxWidth="md">
        {/* onClose={handleClose} */}
        
        <DialogTitle>{title}</DialogTitle>
        
        <DialogContent>
          
          {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    /> */}
          {/* <form noValidate onSubmit={onSubmitClicked}>
            <FormControl>
             <FormLabel>User id</FormLabel>
              <TextField
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
              <FormLabel>User code</FormLabel>
              <TextField
                name="userCode"
                value={formData.userCode}
                onChange={handleChange}
              />
              <FormLabel>user name</FormLabel>
              <TextField
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
              <FormLabel>user gender</FormLabel>
              <TextField
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
              <FormLabel>user date of birth</FormLabel>
              <TextField name="gender" sx={{display:"none"}}/>
              <DatePicker
                value={date}
                onChange={handleDateChange}
                format="YYYY-MM-DD"
                // label=""
                clearable
                showTodayButton
                inputVariant="outlined"
            />
              <FormLabel>user phone</FormLabel>
              <TextField
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <FormLabel>major</FormLabel>
              <TextField
                name="major"
                value={formData.major}
                onChange={handleChange}
              />
              <FormLabel>Email or account name</FormLabel>
              <TextField
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <FormLabel>Password</FormLabel>
              <TextField
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Button type="submit">Submit</Button>
            </FormControl>
          </form> */}
          {FormComponent}
          {/* <FormChangePassword/> */}

        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: "red" }}
            onClick={() => OnCloseDialogForm(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={() => OnCloseDialogForm(false)}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}