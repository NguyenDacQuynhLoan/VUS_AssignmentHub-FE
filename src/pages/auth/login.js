import {
  Alert,
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useCallback } from "react";
import APIServices, { ENTITY_ENUM, HTTP_METHOD_ENUM } from "../../api";
import SnackbarMessage, { SNACKBAR_TYPE } from "../../components/snackbar";

export const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [method, setMethod] = useState("email");

  const onSubmitClicked = (e) => {
    e.preventDefault();
    SnackbarMessage({
      snackbarType:SNACKBAR_TYPE.ERROR,
      message:"LOGGIN FAIL",
      isOpen:true})
    // get login data
    // var data = {
    //   email: formData.email,
    //   password: formData.password,
    // };

    // // get token
    // async function getToken() {
    //   var tokenLogged =  await APIServices({
    //     method:HTTP_METHOD_ENUM.HTTP_POST,
    //     data:data,
    //     entityUrl:ENTITY_ENUM.USER,
    //     paramUrl:null
    //   })

    //   if(tokenLogged !== "" && tokenLogged !== undefined){
    //     // Save into local storage
    //     localStorage.setItem("Token", JSON.stringify(tokenLogged));
    //   }else{
    //     // SnackbarMessage({snackbarType:SNACKBAR_TYPE.ERROR,message:"LOGGIN FAIL"})
    //   }
    // }
    // getToken();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMethodChange = useCallback((event, value) => {
    setMethod(value);
  }, []);

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
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Stack>
                  <FormLabel>Password</FormLabel>
                  <Stack spacing={3}>
                    <TextField
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Stack>
                  <Button type="submit">Submit</Button>
                </FormControl>
              </form>
            )}

            {method === "register" && (
              <form noValidate onSubmit={onSubmitClicked}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Stack spacing={3}>
                    <TextField name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Stack>
                  <FormLabel>Full name</FormLabel>
                  <Stack spacing={3}>
                    <TextField name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Stack>
                  <FormLabel>Password</FormLabel>
                  <Stack spacing={3}>
                    <TextField name="password" value={formData.password} onChange={handleChange} />
                  </Stack>
                  <Button type="submit">Submit</Button>
                </FormControl>
              </form>
            )}
          </div>
        </Box>
        <Box sx={{ width: "60%", float: "right" }}>
          <img style={{objectFit:"cover",width:"90%"}} src={process.env.PUBLIC_URL + '/Login_img.jpg'} /> 
        </Box>
      </Box>
    </>
  );
};