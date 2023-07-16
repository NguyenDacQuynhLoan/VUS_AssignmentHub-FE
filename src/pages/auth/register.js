import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
    return ( 
        <>
        <title>
          Register | Devias Kit
        </title>
        <Box sx={{ maxWidth: 550, px: 3, py: '100px', width: '100%'}}>
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h4">
                Register
              </Typography>
              <Typography color="text.secondary" variant="body2">
                  Already have an account? &nbsp;
                <Link href="/auth/login" underline="hover" variant="subtitle2">
                  {/* component={NextLink} */}
                  Log in
                </Link>
              </Typography>
            </Stack>
          </div>
        </Box>
        </>
     );
}