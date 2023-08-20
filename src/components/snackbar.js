import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Box } from '@mui/material';
import { useEffect } from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarStatutes({ isOpen, message, snackbarType }) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{ position: "absolute" }}>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={snackbarType} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>
    </Box>
  );
}