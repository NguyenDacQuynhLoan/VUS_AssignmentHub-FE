import React, { useState, useCallback } from "react";

import { Box, Button, FilledInput, FormControl, FormLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";

import APIServices, { ENTITY_ENUM, HTTP_METHOD_ENUM } from "../../api";
import SnackbarStatutes, { SNACKBAR_TYPE, SnackbarStatus } from "../../components/snackbar";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
/**
 * Login page
 * @returns Token allow access pages
 */
export const LoginPage = () => {
  const [formDataLogin, setFormDataLogin] = useState({ email: "", password: "" });
  const [formDataRegister, setFormDataRegister] = useState({ email: "", password: "" });
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);

  const [method, setMethod] = useState("email");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  
  //  Submit login 
  const onSubmitClicked = (e) => {
    e.preventDefault();

    // login data
    var data = {
      email: formDataLogin.email,
      password: formDataLogin.password,
    };

    // get token
    async function getToken() {
      var tokenLogged = await APIServices({
        method: HTTP_METHOD_ENUM.HTTP_POST,
        data: data,
        entityUrl: ENTITY_ENUM.USER,
        paramUrl: null
      })

      if (tokenLogged !== "" && tokenLogged !== undefined) {
        // Save into local storage
        localStorage.setItem("Token", JSON.stringify(tokenLogged));
      } else {
        setOpenSnackbar(true);
      }
    }
    getToken();
  };

  const handleSnackbar = (e) => {
    setOpenSnackbar(e)
  }

  // get form data value
  const handleChange = (e) => {
    setFormDataLogin({ ...formDataLogin, [e.target.name]: e.target.value });
  };

  // switch login or register
  const handleMethodChange = useCallback((event, value) => {
    setMethod(value);
  }, []);

  const handleClickShowPassword = () => setShowPasswordLogin((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{
            width: "40%"
          }}
        >
          <div >
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Login</Typography>
            </Stack>
            <Tabs sx={{ mb: 3 }} value={method} onChange={handleMethodChange}>
              <Tab label="Email" value="email" />
              <Tab label="register" value="register" />
            </Tabs>
            {method == "email" && (
              <form noValidate onSubmit={onSubmitClicked}>
                <FormControl>
                  <FormLabel>Email or account name</FormLabel>
                  <Stack spacing={3}>
                    <TextField name="email"
                      value={formDataLogin.email}
                      onChange={handleChange}
                    />
                  </Stack>
                  <FormLabel>Password</FormLabel>
                  <Stack spacing={3}>
                    <TextField
                    type={showPasswordLogin? "text" :"password" }
                      name="password"
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
                            {showPasswordLogin ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                        )}}
                    />
                  </Stack>
                  <Button variant="contained" sx={{marginTop:3}} type="submit">Submit</Button>
                </FormControl>
              </form>
            )}

            {method === "register" && (
              <form noValidate onSubmit={onSubmitClicked}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Stack spacing={3}>
                    <TextField name="email"
                      value={formDataRegister.email}
                      onChange={handleChange}
                    />
                  </Stack>
                  <FormLabel>Full name</FormLabel>
                  <Stack spacing={3}>
                     <TextField
                    type={showPasswordRegister? "text" :"password" }
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
                            {showPasswordRegister ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                        )}}
                    />
                  </Stack>
                  <FormLabel>Password</FormLabel>
                  <Stack spacing={3}>
                  <TextField
                      type={showPasswordRegister? "text" :"password" }
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
                            {showPasswordRegister ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                        )}}
                    />
                    {/* <TextField name="password" value={formDataRegister.password} onChange={handleChange} /> */}
                  </Stack>
                  <Button variant="contained" sx={{marginTop:3}} type="submit">Submit</Button>
                </FormControl>
              </form>
            )}
          </div>
        </Box>
        <Box sx={{ width: "60%", float: "right" }}>
          <img style={{ objectFit: "cover", width: "90%" }} src={process.env.PUBLIC_URL + '/Login_img.jpg'} />
        </Box>
        <SnackbarStatutes
          isOpen={openSnackbar}
          message={"Incorrect username or password"}
          snackbarType={"error"}
          handleSnackbar={handleSnackbar} />
      </Box>
    </>
  );
};