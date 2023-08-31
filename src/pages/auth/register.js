import React, { useState, useEffect } from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

export const RegisterComponent = ({ onLoginSubmit, isError, onHandleSubmit }) => {
  // User Register information
  const [formDataRegister, setFormDataRegister] = useState({ email: "", password: "", confirmPassword: "" });
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  const [showConfirmPasswordRegister, setShowConfirmPasswordRegister] = useState(false);

  // Snackbar config
  const [isOpen, setOpenSnackbar] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState({ message: "", snackbarType: "" });

  // get form data value
  const handleChangeRegister = (e) => {
    setFormDataRegister({ ...formDataRegister, [e.target.name]: e.target.value });
  };

  //  Submit 
  const onSubmitClicked = (e) => {
    e.preventDefault();
    // var data = {
    //   email: formDataLogin.email,
    //   password: formDataLogin.password,
    // };
    // onLoginSubmit(data);
  };

  // Show alert snackbar if login false
  useEffect(() => {
    setSnackbarContent({
      message: "Incorrect username or password",
      snackbarType: "error"
    })
    setOpenSnackbar(!isError);

  }, [isError])

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form noValidate onSubmit={onSubmitClicked}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Stack spacing={3}>
          <TextField
            name="email"
            placeholder="Enter your account or email"
            value={formDataRegister.email}
            onChange={handleChangeRegister}
          />
        </Stack>
        <FormLabel sx={{ paddingTop: 2 }}>Password</FormLabel>
        <Stack spacing={3}>
          <TextField
            name="password"
            placeholder="Enter your new password"
            type={showPasswordRegister ? "text" : "password"}
            value={formDataRegister.password}
            onChange={handleChangeRegister}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPasswordRegister((show) => !show)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPasswordRegister ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <FormLabel sx={{ paddingTop: 2 }}>Confirm Password</FormLabel>
        <Stack spacing={3}>
          <TextField
            name="confirmPassword"
            placeholder="Enter your confirm password"
            type={showConfirmPasswordRegister ? "text" : "password"}
            value={formDataRegister.confirmPassword}
            onChange={handleChangeRegister}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowConfirmPasswordRegister((show) => !show)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmPasswordRegister ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Button variant="contained" type="submit" sx={{ marginTop: 3 }} >
          Register
        </Button>
      </FormControl>
    </form>
  );
}