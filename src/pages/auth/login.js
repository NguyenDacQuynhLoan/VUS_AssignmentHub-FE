import {
  Alert,
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
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
      <Box
        sx={{
          backgroundColor: "background.paper",
          border: "red solid 1px",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: 550, px: 3, py: "100px", width: "100%" }}>
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Login</Typography>

              <Typography color="text.secondary" variant="body2">
                Don&apos;t have an account? &nbsp;
                <Link underline="hover" href="/auth/register">
                  {/* component={NextLink} */}
                  Register
                </Link>
              </Typography>
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
      </Box>
    </>
  );
};