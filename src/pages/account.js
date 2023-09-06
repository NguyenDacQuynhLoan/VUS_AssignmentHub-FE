import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Input,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import DeleteIcon from "@mui/icons-material/Delete";
import HttpsIcon from "@mui/icons-material/Https";
import EditIcon from "@mui/icons-material/Edit";
import dayjs from "dayjs";

import DialogConfirm from "../components/dialogs/dialog-confirm";
import APIServices from "../api";
import SnackbarStatutes from "../components/snackbar";
import { useDefaultLayoutContext } from "../layout/layout-provider";
import { HTTP_METHOD } from "../shared/enums/http-methods";
import { HTTP_ENTITY } from "../shared/enums/http-entity";
import { ENUM_MAJOR } from "../shared/enums/enum-majors";
import { DIALOG_ACTION } from "../shared/enums/dialog-action";
import { UserModelFunc } from "../shared/models/user";
import { ConvertDate } from "../shared/func";
import jwtDecode from "jwt-decode";

export default function AccountPage() {
  // User Information
  const [userInfo, setUserInfo] = useState();
  const [userForm, setUserForm] = useState({
    userCode: "",
    userName: "",
    gender: "",
    location: "",
    dateOfBirth: "",
    phone: "",
    major: "",
    email: "",
    userRoleCode :"",
  });
  const [birthDate, setBirthDate] = useState(dayjs(""));
  // const [majors, setMajors] = useState([{ key: "", value: "" }]);
  const [roles,setRoles] = useState([]);

  // Dialog setting
  const [dialogContent, setDialogContent] = useState({
    title: "",
    message: "",
    action: 0,
  });
  const [isOpen, setDialogOpen] = useState(false);
  
  const [isReadOnly, setReadOnly] = useState(false);

  // Snackbar setting
  const [snackbarContent, setSnackbarContent] = useState({
    message: "",
    snackbarType: "",
  });
  const [isSuccess, setSuccess] = useState(true);
  const [isOpenSnackBar, setOpenSnackBar] = useState(false);

  /**
   * Update User Information
   * @returns 
   */
  const updateUser = () => {
    const updateAsync = async () => {
      try {
        if (Object.values(userForm).includes("")) {
          var newUserForm = {
            userCode:
              userForm.userCode === "" ? userInfo.userCode : userForm.userCode,
            userName:
              userForm.userName === "" ? userInfo.userName : userForm.userName,
            userRoleCode: 
              userForm.userRoleCode === "" ? userInfo.userRoleCode : userForm.userRoleCode,
            gender: userForm.gender === "" ? userInfo.gender : userForm.gender,
            dateOfBirth:
              userForm.dateOfBirth === ""
                ? ConvertDate(userInfo.dateOfBirth)
                : ConvertDate(birthDate),
            phone: userForm.phone === "" ? userInfo.phone : userForm.phone,
            major: userForm.major === "" ? userInfo.major : userForm.major,
            email: userForm.email === "" ? userInfo.email : userForm.email,
            location:
              userForm.location === "" ? userInfo.location : userForm.location,
          };
          
          await APIServices({
            HttpMethod: HTTP_METHOD.HTTP_PUT,
            Endpoint: HTTP_ENTITY.USER,
            Data: UserModelFunc(newUserForm),
          });
          
        }
      } catch (error) {
        console.log(error);
      }
    };
    updateAsync();
  };

  const getUsers = () => {
    const getUserAsync = async () => {
      // decode jwt get user code
      var sessionValue = JSON.parse(sessionStorage.getItem("Token"))
      var token = sessionValue.token;
      var decodeToken = jwtDecode(token);

      var userCode = decodeToken.code;
      var userRole = decodeToken.authorities[0].authority;

      var userData = await APIServices({
        HttpMethod: HTTP_METHOD.HTTP_GET,
        Data: null,
        // Endpoint: `${HTTP_ENTITY.USER}/role-${userRole}/${userCode}`
        Endpoint: `${HTTP_ENTITY.USER}/${userCode}`
      });
      userData = userData.result;
      userData.dateOfBirth = dayjs(userData.dateOfBirth);
      setUserInfo(UserModelFunc(userData));
      // setMajors(ENUM_MAJOR);
    };
    getUserAsync();
  };
  
  const deleteUser = () => { };

  const getRoles =() =>{
    const getRoleAsync = async () =>{
      var roleData = await APIServices({
        HttpMethod:HTTP_METHOD.HTTP_GET,
        Data:null,
        Endpoint:HTTP_ENTITY.ROLE
      })
      setRoles(roleData.result);
    } 
    getRoleAsync();
  }

  // get user information
  useEffect(() => {
    getUsers();
    getRoles();
  }, []);

  // Reload user state
  useEffect(() => { }, [userInfo]);

  // get form data value
  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const onSubmitClicked = (e) => {
    e.preventDefault();
    setDialogContent({
      title: "Update information",
      message: "Do you want change your account information ?",
      action: DIALOG_ACTION.UPDATE,
    });
  };

  const OnDeleteProfileButton = () => {
    setDialogContent({
      title: "Delete account",
      message: "Do you want to delete this account ?",
      action: DIALOG_ACTION.DELETE,
    });
    setDialogOpen(true);
  };

  const OnEditProfileButton = () => {
    setReadOnly(!isReadOnly);
  };


  const OnAcceptDialogForm = (e, action) => {
    setOpenSnackBar(true);

    updateUser();

    // turn off
    setDialogOpen(false);
  };

  const OnUploadFileButton = () => {
    document.getElementById("get-file").click();
  };

  const OnOpenDialogForm = () => {
    setDialogOpen(true);
  };

  const OnCloseDialogForm = (e) => {
    setDialogOpen(false);
  };

  return (
    <>
      {userInfo != null ? (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">Account</Typography>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                  <Card>
                    <CardContent>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "column",
                          height: "60vh",
                        }}
                      >
                        <Avatar
                          //   src={user.avatar}
                          sx={{
                            my: 3,
                            height: "40vh",
                            mb: 2,
                            width: "40vh",
                          }}
                        />
                        <Typography gutterBottom variant="h5">
                          {userInfo.userName}
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                          {userInfo.userCode}
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                          {userInfo.major}
                        </Typography>
                      </Box>
                    </CardContent>
                    <Divider />
                    <CardActions>
                      <Button
                        onClick={OnUploadFileButton}
                        fullWidth
                        variant="text"
                      >
                        Upload picture
                      </Button>
                      <Input
                        id="get-file"
                        sx={{ display: "none" }}
                        type="file"
                      />
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                  <form
                    autoComplete="off"
                    noValidate
                    onSubmit={onSubmitClicked}
                  >
                    <Card>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <CardHeader
                          subheader="The information can be edited"
                          title="Profile"
                        ></CardHeader>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Button onClick={OnDeleteProfileButton}>
                            <Tooltip title="Delete">
                              <DeleteIcon />
                            </Tooltip>
                          </Button>
                          <Button onClick={OnEditProfileButton}>
                            <Tooltip title="Edit">
                              <EditIcon />
                            </Tooltip>
                          </Button>
                        </Box>
                      </Box>
                      <CardContent>
                        <Box
                          sx={{ height: "53vh", flexGrow: 1 }}
                          paddingLeft={3}
                        >
                          <Grid container spacing={4}>
                            <Grid item xs={12} md={6} sx={{ paddingTop: "15px !important" }} >
                              <TextField
                                InputProps={{
                                  readOnly: isReadOnly,
                                }}
                                sx={{ marginRight: 2 }}
                                fullWidth
                                label="Name"
                                name="userName"
                                required
                                variant={isReadOnly ? "filled" : "outlined"}
                                defaultValue={userInfo.userName}
                                onChange={handleChange}
                              />
                            </Grid>
                            <Grid item xs={12} md={3} sx={{ paddingTop: "15px !important" }} >
                              <TextField
                                required
                                fullWidth
                                sx={{ marginRight: 2 }}
                                variant="filled"
                                onChange={handleChange}
                                defaultValue={userInfo.userCode}
                                label="Code"
                                name="userCode"
                              />
                            </Grid>
                            <Grid item xs={12} md={3} sx={{ paddingTop: "15px !important" }} >
                            <TextField
                                fullWidth
                                select
                                name="userRoleCode"
                                label="Role"
                                readOnly={isReadOnly}
                                sx={{
                                  background: isReadOnly
                                    ? "#F0F0F0"
                                    : "inherit",
                                }}
                                defaultValue={userInfo.userRoleCode}
                                onChange={handleChange}
                              >
                                {
                                  roles.map((e)=>(
                                    <MenuItem value={e.code}>{e.name}</MenuItem>
                                  ))
                                }
                                {/* {Object.keys(ENUM_MAJOR).map((e) => (
                                  <MenuItem
                                    value={Object.keys(ENUM_MAJOR).indexOf(e)}
                                  >
                                    {e}
                                  </MenuItem>
                                ))} */}
                              </TextField>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ paddingTop: "15px !important" }} >
                              <DatePicker
                                sx={{ width: "100%" }}
                                disabled={isReadOnly}
                                label="Date of Birth"
                                value={userInfo.dateOfBirth}
                                slotProps={{
                                  actionBar: {
                                    actions: ["clear", "today"],
                                  },
                                }}
                                onChange={(newDate) => setBirthDate(newDate)}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              md={3}
                              sx={{ paddingTop: "15px !important" }}
                            >
                              <TextField
                                fullWidth
                                select
                                name="major"
                                label="Major"
                                readOnly={isReadOnly}
                                sx={{
                                  background: isReadOnly
                                    ? "#F0F0F0"
                                    : "inherit",
                                  width: "100%",
                                }}
                                defaultValue={2}
                                onChange={handleChange}
                              >
                                {Object.keys(ENUM_MAJOR).map((e) => (
                                  <MenuItem
                                    value={Object.keys(ENUM_MAJOR).indexOf(e)}
                                  >
                                    {e}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </Grid>

                            <Grid item xs={12} md={3} sx={{ paddingTop: "15px !important" }} >
                              <TextField
                                fullWidth
                                select
                                label="Gender"
                                name="gender"
                                readOnly={isReadOnly}
                                sx={{
                                  background: isReadOnly
                                    ? "#F0F0F0"
                                    : "inherit"
                                }}
                                defaultValue={userInfo.gender}
                                onChange={handleChange}
                              >
                                <MenuItem value={"Female"}>Female</MenuItem>
                                <MenuItem value={"Male"}>Male</MenuItem>
                              </TextField>
                            </Grid>

                            <Grid
                              item
                              xs={12}
                              md={6}
                              sx={{ paddingTop: "15px !important" }}
                            >
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <TextField
                                  InputProps={{
                                    readOnly: true,
                                  }}
                                  sx={{ marginRight: 2 }}
                                  fullWidth
                                  label="E-mail / Account"
                                  name="email"
                                  required
                                  variant="filled"
                                  defaultValue={userInfo.email}
                                  onChange={handleChange}
                                // value={values.email}
                                />
                                <Button
                                  variant={isReadOnly ? "filled" : "outlined"}
                                  disabled={isReadOnly}
                                  sx={{
                                    background: isReadOnly
                                      ? "#F0F0F0"
                                      : "inherit",
                                  }}
                                  startIcon={
                                    <InputAdornment position="start">
                                      {isReadOnly ? (
                                        <HttpsIcon />
                                      ) : (
                                        <LockOpenIcon />
                                      )}
                                    </InputAdornment>
                                  }
                                >
                                  Change password
                                </Button>
                              </Box>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              md={6}
                              sx={{ paddingTop: "15px !important" }}
                            >
                              <TextField
                                InputProps={{
                                  readOnly: isReadOnly,
                                }}
                                sx={{ marginRight: 2 }}
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                required
                                variant={isReadOnly ? "filled" : "outlined"}
                                defaultValue={userInfo.phone}
                                onChange={handleChange}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              md={12}
                              sx={{ paddingTop: "15px !important" }}
                            >
                              <TextField
                                InputProps={{
                                  readOnly: isReadOnly,
                                }}
                                sx={{ marginRight: 2 }}
                                fullWidth
                                label="Location"
                                name="location"
                                required
                                variant={isReadOnly ? "filled" : "outlined"}
                                defaultValue={userInfo.location}
                                onChange={handleChange}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              md={12}
                              sx={{ paddingTop: "15px !important" }}
                            >
                              <Typography>Total Subject</Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </CardContent>
                      <Divider />
                      <CardActions sx={{ justifyContent: "flex-end" }}>
                        <Button
                          variant="contained"
                          disabled={isReadOnly}
                          type="submit"
                          onClick={() => OnOpenDialogForm()}
                        >
                          Save
                        </Button>
                      </CardActions>
                    </Card>
                  </form>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Box>
      ) : (
        <Typography>
          Loading...
        </Typography>
      )}
       <DialogConfirm
            isOpen={isOpen}
            title={dialogContent.title}
            message={dialogContent.message}
            action={dialogContent.action}
            OnCloseDialogForm={OnCloseDialogForm}
            OnAcceptDialogForm={OnAcceptDialogForm}
          />
      <SnackbarStatutes
        isOpen={isOpenSnackBar}
        message={snackbarContent.message}
        snackbarType={snackbarContent.snackbarType}
      />
    </>
  );
}