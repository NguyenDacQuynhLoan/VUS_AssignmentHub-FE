import { useCallback, useState } from "react";

import {
  Box, Button, FormControl, FormLabel, IconButton, TextField,
  InputAdornment,
  Grid,
  Typography,
  Tabs,
  Tab,
  Select,
  MenuItem
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoFileViewer } from "../../../test-file-viewer";
import { Today } from "@mui/icons-material";
import dayjs from "dayjs";
import { ENUM_MAJOR } from "../../../shared/enums/enum-majors";
import { ENUM_ROLE } from "../../../shared/enums/enum-roles";

export function FormUser() {
  const [userFormValid,setUserFormValid] = useState();
  const [userForm, setUserForm] = useState({
    userCode: "",
    userName: "",
    role:"",
    major: "",
    email: "",
    gender: "",
    location: "",
    dateOfBirth: "",
    phone: "",
  });

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  
  const [errorContent, setErrorContent] = useState({
    isError: false,
    message: ""
  });

  const validateUserForm = (e) => { 
    e.preventDefault();
    // console.log(userForm);
  }

  const updateUser = () =>{
    const updateAsync = () => {
      // validate

      // update api
    }
  }



  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  //region password 
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  // switch login or register
  const [method, setMethod] = useState("information");
  const handleMethodChange = ((value, newValue) => {
    setMethod(newValue);
  });

  return (
    <>
      <Tabs sx={{ mb: 3 }} value={method} onChange={handleMethodChange}>
        <Tab label="Information" value="information" />
        <Tab label="Files" value="files" />
      </Tabs>
      {
        method === "information" && (
          <Box >
            <form noValidate onSubmit={validateUserForm} >
              <FormControl fullWidth sx={{ height: "64vh" }} >
                <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={12} md={12} lg={12} padding={0}>
                    <Typography paddingLeft={2} fontSize={22}>Account </Typography>
                    <Button variant="contained" type="submit">SubmitTest</Button>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <TextField
                      required
                      sx={{ paddingBottom: 2, width: "100%" }}
                      name="email"
                      type="email"
                      helperText="not right email format"
                      label="E-mail"
                      defaultValue={userForm.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={2} lg={2}>
                    <TextField
                      sx={{ paddingBottom: 2, width: "100%" }}
                      name="role"
                      label="Role"
                      required
                      select
                      defaultValue={2}
                      onChange={handleChange}
                    >
                      {
                        Object.keys(ENUM_ROLE).map((e) =>(
                          <MenuItem value={Object.keys(ENUM_ROLE).indexOf(e)}>
                            {e}
                          </MenuItem>     
                        ))
                      }
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={3} lg={3}>
                    <TextField
                      fullWidth
                      sx={{ paddingBottom: 2 }}
                      name="password"
                      label="Password"
                      required
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
                  </Grid>
                  <Grid item xs={12} md={3} lg={3}>
                    <TextField
                      fullWidth
                      required
                      error={errorContent.isError}
                      sx={{ paddingBottom: 2 }}
                      label="Confirm Password"
                      name="confirmPassword"
                      type={showPassword2 ? "text" : "password"}
                      onChange={handleChange}
                      helperText={errorContent.message}
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
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} padding={0}>
                    <Typography paddingLeft={2} fontSize={22}>User Information</Typography>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <TextField sx={{ paddingBottom: 2, width: "100%" }}
                      required
                      name="userName"
                      label="Name"
                      defaultValue={userForm.userName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={2} lg={2}>
                    <TextField
                      sx={{ paddingBottom: 2, width: "100%" }}
                      name="userCode"
                      required
                      label="Code"
                      defaultValue={userForm.userCode}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} lg={3}>
                    <TextField
                      sx={{ paddingBottom: 2, width: "100%" }}
                      defaultValue={0}
                      required
                      name="major"
                      select
                      label="Major"
                      onChange={handleChange}
                    >
                      {Object.keys(ENUM_MAJOR).map((e) => (
                        <MenuItem
                          value={Object.keys(ENUM_MAJOR).indexOf(
                            e
                          )}
                        >
                          {e}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={2} lg={3}>
                    <DatePicker
                      label={"Date Of Birth"}
                      sx={{ width: "100%" }}
                      defaultValue={dayjs(new Date())}
                      slotProps={{
                        actionBar: {
                          actions: ["clear", "today"],
                        },
                      }} />
                  </Grid>
                  <Grid item xs={12} md={1} lg={1}>
                    <TextField
                      select 
                      label="Gender"
                      defaultValue={"Female"}
                      name="gender"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Male"}>Male</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8}>
                    <TextField
                      sx={{ paddingBottom: 2, width: "100%" }}
                      defaultValue={userForm.location}
                      name="location"
                      label="Location"
                      // value={formData.currentPassword}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <TextField
                      sx={{ paddingBottom: 2, width: "100%" }}
                      defaultValue={userForm.phone}
                      name="phone"
                      label="Phone"
                      // value={formData.currentPassword}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </FormControl>
            </form>
          </Box>
        )
      }
      {
        method === "files" && (
          <DemoFileViewer />
        )
      }


    </>

  )
}