import { useState } from "react";

import { Box, Button, FormControl, FormLabel, IconButton, TextField,
    InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export function FormChangePassword() {
    const [formData, setFormData] = useState({
        currentPassword:"",
        newPassword:"",
        confirmPassword:""
    });
    const [error, setError] = useState({
        isError:false,
        message:""
    });
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmitClicked =() =>{

    }

    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    return(
        <Box paddingTop={1}>
            <form noValidate onSubmit={onSubmitClicked}>
                <FormControl>
                <TextField
                    sx={{paddingBottom:2}}
                    name="userCode"
                    label="Current Password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                />
                <TextField
                    sx={{paddingBottom:2}}
                    name="password"
                    value={formData.newPassword}
                    label="New Password"
                    type={showPassword1 ? "text" : "password"}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword1}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword1 ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                />
                <TextField
                    error={error.isError}
                    sx={{paddingBottom:2}}
                    label="Confirm New Password"
                    name="password"
                    type={showPassword2 ? "text" : "password"}
                    onChange={handleChange}
                    value={formData.confirmPassword}
                    helperText={error.message}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword2}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword2 ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                />
                <Box>
                </Box>
                </FormControl>
            </form>
        </Box>
    )
}