import React, { useState } from "react";
import { Box } from "@mui/system";

import { HeaderComponent } from "../components/header";
import { SidebarComponent } from "../components/sidebar";
import { ContainerComponent } from "../components/container";
import { LayoutProvider } from "./provider/layout-provider"
import { LoginPage } from "../pages/auth/login";

/**
 * Authentication
 * @returns layout access by token
*/
export default function LayoutView() {
  const [login, setLogin] = useState(true);
  // token 

  return (
    <LayoutProvider>
      {login === true ? (
        <Box sx={{ display: "flex" }}>
          <HeaderComponent />
          <SidebarComponent />
          <ContainerComponent />
        </Box>
      ) : (
        <>
          <LoginPage />
        </>
      )}
    </LayoutProvider>
  );
}