import React, { useState, useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

import SnackbarStatutes, {
  SNACKBAR_TYPE,
  SnackbarStatus,
} from "../../components/snackbar";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

/**
 * Login page
 * @returns Token allow access pages
 */
export const LoginPage = ({ onLoginSubmit, isError, onHandleSubmit }) => {
  const [formDataLogin, setFormDataLogin] = useState({
    email: "",
    password: "",
  });

  const [snackbarContent, setSnackbarContent] = useState({
    message:"",
    snackbarType:""
  });

  const [formDataRegister, setFormDataRegister] = useState({
    email: "",
    password: "",
  });

  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);

  const [method, setMethod] = useState("login");
  const [isOpen, setOpenSnackbar] = useState(false);

  //  Submit login
  const onSubmitClicked = (e) => {
    e.preventDefault();

    // login data
    var data = {
      email: formDataLogin.email,
      password: formDataLogin.password,
    };

    onLoginSubmit(data);
    
  };
  
  useEffect(() => {
    setSnackbarContent({
      message:"Incorrect username or password",
      snackbarType:"error"
  })
    setOpenSnackbar(!isError);

  }, [isError])
  
  // get form data value
  const handleChange = (e) => {
    setFormDataLogin({ ...formDataLogin, [e.target.name]: e.target.value });
  };

  // switch login or register
  const handleMethodChange = useCallback((value) => {
    setMethod(value);
  }, []);

  const handleClickShowPassword = () => setShowPasswordLogin((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{
            width: "40%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Login</Typography>
            </Stack>
            <Tabs sx={{ mb: 3 }} value={method} onChange={handleMethodChange}>
              <Tab label="Email" value="email" />
              <Tab label="register" value="register" />
            </Tabs>
            {method === "login" && (
              <form noValidate onSubmit={onSubmitClicked}>
                <FormControl>
                  <FormLabel>Email or account name</FormLabel>
                  <Stack spacing={3}>
                    <TextField
                      name="email"
                      placeholder="Enter your account or email"
                      value={formDataLogin.email}
                      onChange={handleChange}
                    />
                  </Stack>
                  <FormLabel sx={{ paddingTop: 2 }}>Password</FormLabel>
                  <Stack spacing={3}>
                    <TextField
                      type={showPasswordLogin ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      value={formDataLogin.password}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPasswordLogin ? (
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
                  <Button
                    variant="contained"
                    sx={{ marginTop: 3 }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </FormControl>
              </form>
            )}

            {method === "register" && (
              <form noValidate onSubmit={onSubmitClicked}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Stack spacing={3}>
                    <TextField
                      name="email"
                      value={formDataRegister.email}
                      onChange={handleChange}
                    />
                  </Stack>
                  <FormLabel>Full name</FormLabel>
                  <Stack spacing={3}>
                    <TextField
                      type={showPasswordRegister ? "text" : "password"}
                      name="password"
                      value={formDataRegister.email}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
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
                  <FormLabel>Password</FormLabel>
                  <Stack spacing={3}>
                    <TextField
                      type={showPasswordRegister ? "text" : "password"}
                      name="confirmPassword"
                      value={formDataRegister.email}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
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
                    {/* <TextField name="password" value={formDataRegister.password} onChange={handleChange} /> */}
                  </Stack>
                  <Button
                    variant="contained"
                    sx={{ marginTop: 3 }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </FormControl>
              </form>
            )}
          </div>
        </Box>
        <Box sx={{ width: "60%", float: "right" }}>
          <img
            alt="loginImage"
            style={{ objectFit: "cover", width: "90%" }}
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