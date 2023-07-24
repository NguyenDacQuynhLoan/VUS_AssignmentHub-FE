import React, { useEffect, useState } from "react";

import { HeaderComponent } from "../components/header";
import { SidebarComponent } from "../components/sidebar";
import { ContainerComponent } from "../components/container";
import { LayoutProvider } from "./provider/layout-provider";
import { LoginPage } from "../pages/auth/login";
import { Backdrop, Box, Button, CircularProgress } from "@mui/material";
import { AuthenticationService } from "../api/authen";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * Authentication
 * @returns layout access by token
 */
export default function LayoutView() {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var token = localStorage.getItem("Token");
    setTimeout(() => {
      if (token !== "" && token != null) {
        setLogin(true);
      }
      setLoading(false);
    },2000);
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
