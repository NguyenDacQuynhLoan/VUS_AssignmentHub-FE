import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PageDirect } from './pages';
import { Height } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    default: {
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={theme}>
            <PageDirect />
          </ThemeProvider>
        </LocalizationProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);