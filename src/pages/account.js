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
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { DatePicker } from "@mui/x-date-pickers";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import DeleteIcon from "@mui/icons-material/Delete";
import HttpsIcon from "@mui/icons-material/Https";
import dayjs from "dayjs";

import DialogConfirm from "../components/dialogs/dialog-confirm";
import { useDefaultLayoutContext } from "../layout/provider/layout-provider";
import APIServices from "../api";
import { ConvertDate } from "../shared/func";
import { HTTP_METHOD } from "../shared/enums/http-methods";
import { HTTP_ENTITY } from "../shared/enums/http-entity";
import { UserModelFunc } from "../shared/models/user";
import { DIALOG_ACTION } from "../shared/enums/dialog-action";
import { MAJOR_ENUM } from "../shared/enums/major-enum";
import SnackbarStatutes from "../components/snackbar";

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
  });
  const [birthDate, setBirthDate] = useState(dayjs(""));
  const [majors, setMajors] = useState([{ key: "", value: "" }]);

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
  const [isSuccess , setSuccess] = useState(false);
  const [isOpenSnackBar, setOpenSnackBar] = useState(false);
  /**
   * Update User Information
   * @returns 
   */
  const updateUser = () => {
    const updateAPI = async () => {
      try {
        if (Object.values(userForm).includes("")) {
          var newUserForm = {
            userCode:
              userForm.userCode === "" ? userInfo.userCode : userForm.userCode,
            userName:
              userForm.userName === "" ? userInfo.userName : userForm.userName,
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
        setSuccess(true)
        // return isSuccess;
      } catch (error) {
        console.log(error);
      }
    };
    updateAPI();
  };

  const getUser = () => {
    const getUserData = async () => {
      var userEmail = localStorage.getItem("UserEmail").slice(1, -1);

      var userData = await APIServices({
        HttpMethod: HTTP_METHOD.HTTP_GET,
        Data: null,
        Endpoint: `${HTTP_ENTITY.USER}/email/${userEmail}`,
      });

      userData.dateOfBirth = dayjs(userData.dateOfBirth);
      setUserInfo(UserModelFunc(userData));
      setMajors(MAJOR_ENUM);
    };
    getUserData();
  };

  const deleteUser = () => {};

  // get user information
  useEffect(() => {
    getUser();
  }, []);

  // Reload user state
  useEffect(() => {}, [userInfo]);

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
    switch (action) {
      case 1:
        // {
          updateUser();
          if(isSuccess == true){
            setSnackbarContent({
              message: "Update user profile successful",
              snackbarType: "success",
            });
          } else {
            setSnackbarContent({
              message: "CANNOT update user profile successful",
              snackbarType: "error",
            });
          }
        
        break;
      case 2:
        deleteUser();
        break;
    }
    // turn off
    setDialogOpen(false);
    setSuccess(false);
  };

  const OnUploadFileButton = () => {
    document.getElementById("get-file").click();
  };

  const OnOpenDialogForm = () => {
    setDialogOpen(true);
  };

  const OnCloseDialogForm = (e) => {
    setDialogOpen(e);
  };

  return (
    <>
      {userInfo != null ? (
        <>
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
                                  label="User Name"
                                  name="userName"
                                  required
                                  variant={isReadOnly ? "filled" : "outlined"}
                                  defaultValue={userInfo.userName}
                                  onChange={handleChange}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                md={6}
                                sx={{ paddingTop: "15px !important" }}
                              >
                                <TextField
                                  InputProps={{
                                    readOnly: true,
                                  }}
                                  sx={{ marginRight: 2 }}
                                  fullWidth
                                  label="User Code"
                                  variant="filled"
                                  name="userCode"
                                  required
                                  defaultValue={userInfo.userCode}
                                  onChange={handleChange}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                md={6}
                                sx={{ paddingTop: "15px !important" }}
                              >
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
                                <Box
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <Typography>Major:&nbsp;</Typography>
                                  <Select
                                    readOnly={isReadOnly}
                                    sx={{
                                      background: isReadOnly
                                        ? "#F0F0F0"
                                        : "inherit",
                                      width: "100%",
                                    }}
                                    defaultValue={2}
                                    name="major"
                                    onChange={handleChange}
                                  >
                                    {Object.keys(MAJOR_ENUM).map((e) => (
                                      <MenuItem
                                        value={Object.keys(MAJOR_ENUM).indexOf(
                                          e
                                        )}
                                      >
                                        {e}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </Box>
                              </Grid>

                              <Grid
                                item
                                xs={12}
                                md={2}
                                sx={{ paddingTop: "15px !important" }}
                              >
                                <Box
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <Typography>Gender:&nbsp;</Typography>
                                  <Select
                                    id="demo-simple-select"
                                    readOnly={isReadOnly}
                                    sx={{
                                      background: isReadOnly
                                        ? "#F0F0F0"
                                        : "inherit",
                                      width: "100%",
                                    }}
                                    defaultValue={userInfo.gender}
                                    name="gender"
                                    onChange={handleChange}
                                  >
                                    <MenuItem value={"Female"}>Female</MenuItem>
                                    <MenuItem value={"Male"}>Male</MenuItem>
                                  </Select>
                                </Box>
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
          <DialogConfirm
            isOpen={isOpen}
            title={dialogContent.title}
            message={dialogContent.message}
            action={dialogContent.action}
            OnCloseDialogForm={OnCloseDialogForm}
            OnAcceptDialogForm={OnAcceptDialogForm}
          />
        </>
      ) : (
        "Loading..."
      )}
      <SnackbarStatutes
        isOpen={isOpenSnackBar}
        message={snackbarContent.message}
        snackbarType={snackbarContent.snackbarType}
      />
    </>
  );
}
