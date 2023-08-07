import { useEffect, useState } from "react";

import { Backdrop, Box, Button, CircularProgress } from "@mui/material";

import { LayoutProvider } from "./provider/layout-provider";
import { ContainerComponent } from "../components/container";
import { SidebarComponent } from "../components/sidebar";
import { HeaderComponent } from "../components/header";
import { LoginPage } from "../pages/auth/login";
import SimpleSnackbar, { SnackbarStatus } from "../components/snackbar";
import SnackbarStatutes from "../components/snackbar";

/**
 * Authentication
 * @returns layout access by token
 */
export const LayoutView = () => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);

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
    },1000);
  }, [login]);

  return (
    <LayoutProvider>
      <Box sx={{ display: "flex" }}>
        {loading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="primary" />
          </Backdrop>
        ) : (
          <>
            {login === true ? (
              <>
                <HeaderComponent />
                <SidebarComponent />
                <ContainerComponent />
              </>
            ) : (
              <LoginPage />
            )}
          </>
        )}
      </Box>
    </LayoutProvider>
  );
}