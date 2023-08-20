import { useEffect, useState } from "react";

import { Backdrop, Box, Button, CircularProgress } from "@mui/material";

import {
  LayoutProvider,
  useDefaultLayoutContext,
} from "./provider/layout-provider";
import { ContainerComponent } from "../components/container";
import { SidebarComponent } from "../components/sidebar";
import { HeaderComponent } from "../components/header";
import { LoginPage } from "../pages/auth/login";
import SimpleSnackbar, { SnackbarStatus } from "../components/snackbar";
import SnackbarStatutes from "../components/snackbar";
import { AuthenticationService } from "../api/authen";
import { useNavigate } from "react-router-dom";

/**
 * Authentication
 * @returns layout access by token
 */
export const LayoutView = () => {
  const navigate = useNavigate();

  const [isLogin, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(true);

  // loading waiting checking token
  useEffect(() => {
    var token = localStorage.getItem("Token");
    setTimeout(() => {
      // token is existed
      if (token !== "" && token != null && token !== undefined) {
        setLogin(true);
      }

      // turn off loading
      setLoading(false);
    }, 1000);
  }, [isLogin]);

  // update due to Error
  useEffect(() => {}, [isError])

  /**
   * Login submitment
   * @param {*} data
   */
  const onLoginSubmit = (data) => {
    // get token
    async function getToken() {
      var tokenLogged = await AuthenticationService(data);

      if (tokenLogged !== "" && tokenLogged !== undefined) {
        localStorage.setItem("UserEmail", JSON.stringify(data.email));
        
        // reload page
        navigate("/");
        window.location.reload();
      }
      else
      {
        setError(false);
      }
    }
    getToken();
    setError(true);
  };
  
  return (
    <LayoutProvider>
      <Box sx={{ display: "flex" }}>
        {isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="primary" />
          </Backdrop>
        ) : (
          <>
            {isLogin === true ? (
              <>
                <HeaderComponent />
                <SidebarComponent />
                <ContainerComponent />
              </>
            ) : (
              <LoginPage onLoginSubmit={onLoginSubmit} isError={isError} />
            )}
          </>
        )}
      </Box>
    </LayoutProvider>
  );
};