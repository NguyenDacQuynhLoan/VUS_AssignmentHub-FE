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

import SnackbarStatutes from "../../components/snackbar";

/**
 * Login page
 * @returns Token allow access pages
 */
export const LoginPage = ({ onLoginSubmit, isError, onHandleSubmit }) => {
  // User Login information
  const [formDataLogin, setFormDataLogin] = useState({ email: "", password: "" });
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);

  // User Register information
  const [formDataRegister, setFormDataRegister] = useState({ email: "", password: "", confirmPassword: "" });
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  const [showConfirmPasswordRegister, setShowConfirmPasswordRegister] = useState(false);

  // switch method Login or Register
  const [method, setMethod] = useState("login");

  // Snackbar config
  const [isOpen, setOpenSnackbar] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState({ message: "", snackbarType: "" });

  //  Submit login
  const onSubmitClicked = (e) => {
    e.preventDefault();
    var data = {
      email: formDataLogin.email,
      password: formDataLogin.password,
    };
    onLoginSubmit(data);
  };

  // Show alert snackbar if login false
  useEffect(() => {
    setSnackbarContent({
      message: "Incorrect username or password",
      snackbarType: "error"
    })
    setOpenSnackbar(!isError);

  }, [isError])

  // get form data value
  const handleChangeLogin = (e) => {
    setFormDataLogin({ ...formDataLogin, [e.target.name]: e.target.value });
  };

  // get form data value
  const handleChangeRegister = (e) => {
    setFormDataRegister({ ...formDataRegister, [e.target.name]: e.target.value });
  };

  // switch login or register
  const handleMethodChange = ((value, newValue) => {
    setMethod(newValue);
  });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center" >
        <Box  minHeight="100vh" width="40%" display="flex" justifyContent="center" alignItems="center" >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">
                Welcome to Student Hub
              </Typography>
            </Stack>
            <Box>
              <Tabs sx={{ mb: 3 }} value={method} onChange={handleMethodChange}>
                <Tab label="Email" value="login" />
                <Tab label="register" value="register" />
              </Tabs>
              
            </Box>

          </div>
        </Box>
        <Box sx={{ width: "60%", float: "right" }}>
          <img alt="loginImage" style={{ objectFit: "cover", width: "90%" }}
            src={process.env.PUBLIC_URL + "/Login_img.jpg"}
          />
        </Box>
        <SnackbarStatutes
          isOpen={isOpen}
          message={snackbarContent.message}
          snackbarType={snackbarContent.snackbarType}
        />
      </Box>
    </>
  );
};