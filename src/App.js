import React from "react";
import { useState } from "react";
import axios from "axios";

import { Box } from "@mui/system";

import { DefaultLayoutProvider } from "./layout/provider/layout-provider";
import { DefaultHeader } from "./layout/components/default-header";
import { DefaultSidebar } from "./layout/components/default-sidebar";
import { DefaultMain } from "./layout/components/default-main";
import LoginPage from "./pages/Login";
  
// export const api = axios.create({
//   baseURL: "http://localhost:8080/AssigmentSubmissionApp",
// });
//axios.defaults.baseURL = 'http://localhost:8080'; 
/**
 * Authentication
 * @returns layout access by token
*/
export default function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="container-fluid">
      {login == true ? (
        <DefaultLayoutProvider>
          <Box sx={{ display: "flex" }}>
            <DefaultHeader />
            <DefaultSidebar />
            <DefaultMain />
          </Box>
        </DefaultLayoutProvider>
      ) : (
        <>
        <LoginPage/>
        </>
      )}
    </div>
  );
}
