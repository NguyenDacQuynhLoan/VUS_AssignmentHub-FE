import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import { useState } from "react";

export function FormChangePassword() {
    const [formData, setFormData] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmitClicked =() =>{

    }

    return(
        <Box paddingTop={1}>
            <form noValidate onSubmit={onSubmitClicked}>
                <FormControl>
                <TextField
                    sx={{paddingBottom:2}}
                    name="userCode"
                    label="Current Password"
                    // value={formData.userCode}
                    onChange={handleChange}
                />
                <TextField
                    sx={{paddingBottom:2}}
                    name="password"
                    label="New Password"
                    // value={formData.password}
                    onChange={handleChange}
                />
                <TextField
                    sx={{paddingBottom:2}}
                    label="Confirm New Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    // value={formData.password}
                    onChange={handleChange}
                />
                <Button variant="contained" type="submit">Submit</Button>
                <Button variant="contained" type="submit">Submit</Button>
                </FormControl>
            </form>
        </Box>
    )
}