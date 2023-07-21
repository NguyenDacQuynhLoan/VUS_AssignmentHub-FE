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
import { useAuth } from "../../hooks/use-context";
import axios from "axios";

export const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [method, setMethod] = useState("email");
  const [token, setToken] = useState("");

  const auth = useAuth();

  const onSubmitClicked = (e) => {
    e.preventDefault();
    var url = "http://localhost:8080/EduSystem/auth/login";
    var login = {
      email: formData.email,
      password: formData.password,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.post(url, login, config).then((res) => setToken(res.data));

    // Save into local storage
    localStorage.setItem("Token", JSON.stringify(token));
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