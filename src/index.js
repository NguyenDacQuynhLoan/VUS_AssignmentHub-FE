import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import LayoutView from './layout';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    default: {
      // light: "#9908a1",
      // dark: "#610673",
      light: "#1c83eb",
      dark: "#045cb5",
    },
    textWhite: "#FFF",
  },
});

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <LayoutView />
        </ThemeProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);