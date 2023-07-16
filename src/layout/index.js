import React, { useState } from "react";
import { Box } from "@mui/system";

import { HeaderComponent } from "../components/header";
import { SidebarComponent } from "../components/sidebar";
import { ContainerComponent } from "../components/container";
import { LayoutProvider} from "./provider/layout-provider"
import { LoginPage } from "../pages/auth/login";

// Favicon links
const Favicon = () => (
  <>
    <link rel="icon" href="/favicon.ico"/>
    <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
    <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
    <link rel="apple-touch-icon"  href="/apple-touch-icon.png" sizes="180x180"/>
  </>
);

//Font links
const Fonts = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap"/>
  </>
);

/**
 * Authentication
 * @returns layout access by token
*/
export default function LayoutView() {
  const [login, setLogin] = useState(true);
  // token 

  return (
    <div className="container-fluid">
      {login === true ? (
        <LayoutProvider>
          <Box sx={{ display: "flex" }}>
            <HeaderComponent />
            <SidebarComponent />
            <ContainerComponent />
          </Box>
        </LayoutProvider>
      ) : (
        <>
          <LoginPage/>
        </>
      )}
    </div>
  );
}