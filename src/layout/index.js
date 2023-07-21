import React, { useEffect, useState } from "react";

import { HeaderComponent } from "../components/header";
import { SidebarComponent } from "../components/sidebar";
import { ContainerComponent } from "../components/container";
import { LayoutProvider } from "./provider/layout-provider"
import { LoginPage } from "../pages/auth/login";
import { Box, Button } from "@mui/material";
import { AuthenticationService } from "../api/authen";

/**
 * Authentication
 * @returns layout access by token
*/
export default function LayoutView() {
  const [login, setLogin] = useState(true);
  useEffect(() => {
    const testAPI = async() =>{
      var token = await AuthenticationService();
      if(token != null & token.length > 0){
        // console.log(token);
      }
    }
    testAPI();
  },[])
  

  return (
    <LayoutProvider>
      {login === true ? (
        <Box sx={{ display: "flex"}}>
          <HeaderComponent />
          <SidebarComponent />
          {/* onClick={testAPI} */}
          <ContainerComponent />
        </Box>
      ) : (
        <LoginPage />
      )}
    </LayoutProvider>
  );
}