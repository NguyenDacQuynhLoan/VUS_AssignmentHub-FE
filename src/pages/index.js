import { useEffect, useState } from "react";

import { Backdrop, Box, Button, CircularProgress, Stack, Tab, Tabs, Typography } from "@mui/material";

import { ContainerComponent } from "../components/container";
import { SidebarComponent } from "../components/sidebar";
import { HeaderComponent } from "../components/header";
import { LoginPage } from "./auth/login";
import SimpleSnackbar, { SnackbarStatus } from "../components/snackbar";
import SnackbarStatutes from "../components/snackbar";
import { AuthenticationService } from "../api/authen";
import { useNavigate } from "react-router-dom";
import { LayoutProvider } from "../layout/layout-provider";
import { RegisterComponent } from "./auth/register";
import { LoginComponent } from "./auth/login-updated";
import dayjs from "dayjs";

/**
 * Authentication
 * @returns layout access by token
 */
export const PageDirect = () => {
  const navigate = useNavigate();

  const [method, setMethod] = useState("login"); // Switch Tab Login/Register method
  const [isLoading, setLoading] = useState(true); // Loading Spinner when reload page
  const [isLogin, setLogin] = useState(false); // Check if user logged and in expired

  const [isError, setError] = useState(true);
  const [loginResult, setLoginResult] = useState({ isError: false, message: "", });

  // Snackbar setting
  const [isOpen, setOpenSnackbar] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState({ message: "", snackbarType: "" });

  // Loading waiting checking token
  useEffect(() => {
    setTimeout(() => {
      var sessionValue = JSON.parse(sessionStorage.getItem("Token"))
      
      if(sessionValue != null &&  dayjs(new Date().toString() <= dayjs(sessionValue.expiredAt))){
        setLogin(true);
      }else{
        setLogin(false);
      }
      setLoading(false);
    }, 1000);
  }, [isLogin]);

  // update due to Error
  useEffect(() => { }, [isError])

  /**
   * Login submitment
   * @param {*} data
   */
  const OnLoginSubmit = (data) => {
    const loginAsync = async() => {
      var token = await AuthenticationService(data);      
      if (token !== "" && token !== undefined) {
        navigate("/");
        window.location.reload();
      }
      else {
        setError(false);
      }
    }
    loginAsync();
    setError(true);
  };

  /**
   * Register submitment
   * @param {*} data new User information
   */
  const OnRegisterSubmit = (data) => {
    const registerAsync = async() =>{
      // var token = await AuthenticationService();
    }
    registerAsync();
  }

  // Switch login or register
  const handleMethodChange = ((value, newValue) => {
    setMethod(newValue);
  });
  
  return (
    <LayoutProvider>
      <Box height="97vh" display="flex" alignItems="stretch">
        {isLoading === true ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="primary" />
          </Backdrop>
        ) : (
          <>
            {isLogin === true && (
              <>
                <HeaderComponent />
                <SidebarComponent />
                <ContainerComponent />
              </>
            )}

            {isLogin === false && (
              <Box display="flex" justifyContent="stretch" alignItems="center" >
                <Box width="40%" display="flex" justifyContent="center" alignItems="center" >
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
                      {method === "login" && (
                        <LoginComponent onLoginSubmit={OnLoginSubmit} isError={isError}/>
                      )}
                      {method === "register" && (
                        <RegisterComponent/>
                      )}
                    </Box>
                  </div>
                </Box>
                <Box sx={{ width: "60%"}}>
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
            )}
          </>
        )}
      </Box>
    </LayoutProvider>
  );
};