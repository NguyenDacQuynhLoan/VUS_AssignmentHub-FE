import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
  IconButton,
  InputAdornment,
  Grid,
  Typography,
  Tabs,
  Tab,
  MenuItem,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ENUM_MAJOR } from "../../../shared/enums/enum-majors";
import { ENUM_ROLE } from "../../../shared/enums/enum-roles";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { UserModelFunc } from "../../../shared/models/user";
import APIServices from "../../../api";
import { HTTP_METHOD } from "../../../shared/enums/http-methods";
import { HTTP_ENTITY } from "../../../shared/enums/http-entity";
import SnackbarStatutes from "../../snackbar";
import { ConvertDate } from "../../../shared/func";
import { DemoFileViewer } from "./test-file-viewer";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
const mammoth = require("mammoth/mammoth.browser");

export default function FormUserComponent({
  title,
  isOpen,
  OnCloseDialogForm,
  sendReloadChange,
  updatedUserValue,
  updateAssignmentValue,
}) {
  // User form information
  const [userForm, setUserForm] = useState({
    email: "",
    userRoleCode: "",
    password: "",
    confirmPassword: "",
    userName: "",
    userCode: "",
    major: "",
    dateOfBirth: "",
    gender: "",
    location: "",
    phone: "",
  });

  // Assignment form information
  const [assignmentForm, setAssignmentForm] = useState({
    code: "",
    title: "",
    subjectName: "",
    status: null,
    grade: null,
    file: "",
    createdDate: "",
    updatedDate: "",
  });

  const [birthDate, setBirthDate] = useState(
    dayjs(updatedUserValue?.dateOfBirth ?? new Date())
  );

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // error setting
  const [errorContent, setErrorContent] = useState([]);

  // snackbar setting
  const [isOpenSnackBar, setOpenSnackBar] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState({
    message: "",
    snackbarType: "",
  });

  const [roles, setRoles] = useState([]);

  // updated by depends
  useEffect(() => {}, [errorContent, isOpenSnackBar, updatedUserValue]);

  useEffect(() => {
    // clean when open dialog
    setUserForm({ ...userForm });

    // get roles
    const getRoles = async () => {
      var roleList = await APIServices({
        HttpMethod: HTTP_METHOD.HTTP_GET,
        Data: "",
        Endpoint: HTTP_ENTITY.ROLE,
      });
      setRoles(roleList.result);
    };
    getRoles();
  }, []);

  /**
   *  Check Form User input is valid or not
   * @returns true if form user is valid
   */
  const CheckValidateFormUser = () => {
    let requiredList = [];
    userForm.dateOfBirth = birthDate;

    if (userForm.email === "") {
      requiredList.push({
        isError: true,
        field: "email",
        message: "E-mail is required.",
      });
    }

    if (userForm.userRoleCode === "") {
      requiredList.push({
        isError: true,
        field: "userRoleCode",
        message: "Role is required.",
      });
    }

    if (userForm.password === "") {
      requiredList.push({
        isError: true,
        field: "password",
        message: "Password is required.",
      });
    }

    if (userForm.confirmPassword === "") {
      requiredList.push({
        isError: true,
        field: "confirmPassword",
        message: "Confirm Password is required.",
      });
    }

    if (userForm.confirmPassword !== userForm.password) {
      requiredList.push({
        isError: true,
        field: "confirmPassword",
        message: "Confirm Password is not match with Password field.",
      });
    }

    if (userForm.userName === "") {
      requiredList.push({
        isError: true,
        field: "userName",
        message: "User Name is required.",
      });
    }

    if (userForm.userCode === "") {
      requiredList.push({
        isError: true,
        field: "userCode",
        message: "User Code is required.",
      });
    }

    if (userForm.major === "") {
      requiredList.push({
        isError: true,
        field: "major",
        message: "Major is required.",
      });
    }

    if (requiredList.length > 0) {
      setErrorContent(requiredList);
      return false;
    }
    return true;
  };

  const createUser = async () => {
    console.log(assignmentForm);
    setOpenSnackBar(false);

    // try {
    //   var isValidated = CheckValidateFormUser();
    //   if (isValidated === true) {
    //     var result = await APIServices({
    //       HttpMethod: HTTP_METHOD.HTTP_POST,
    //       Data: UserModelFunc(userForm),
    //       Endpoint: HTTP_ENTITY.USER,
    //     });

    //     //close dialog
    //     OnCloseDialogForm(false);

    //     // show snackbar
    //     setOpenSnackBar(true);
    //     setSnackbarContent({
    //       message: result.message,
    //       snackbarType: result.executionStatus,
    //     });
    //   }
    // } catch (error) {
    //   setOpenSnackBar(true);
    //   setSnackbarContent({
    //     message: error.message,
    //     snackbarType: error.executionStatus,
    //   });
    // } finally {
    //   // send reload
    //   sendReloadChange(true);
    // }
  };

  const updateUser = async () => {
    setOpenSnackBar(false);

    try {
      var newUserForm = {
        userCode:
          userForm.userCode === ""
            ? updatedUserValue?.userCode
            : userForm.userCode,
        userName:
          userForm.userName === ""
            ? updatedUserValue.userName
            : userForm.userName,
        gender:
          userForm.gender === "" ? updatedUserValue.gender : userForm.gender,
        phone: userForm.phone === "" ? updatedUserValue.phone : userForm.phone,
        major: userForm.major === "" ? updatedUserValue.major : userForm.major,
        email: userForm.email === "" ? updatedUserValue.email : userForm.email,
        location:
          userForm.location === ""
            ? updatedUserValue.location
            : userForm.location,
        userRoleCode:
          userForm.userRoleCode === ""
            ? updatedUserValue.userRoleCode
            : userForm.userRoleCode,
        dateOfBirth:
          userForm.dateOfBirth === ""
            ? ConvertDate(updatedUserValue.dateOfBirth)
            : ConvertDate(birthDate),
      };

      var result = await APIServices({
        HttpMethod: HTTP_METHOD.HTTP_PUT,
        Data: newUserForm,
        Endpoint: HTTP_ENTITY.USER,
      });

      //close dialog
      OnCloseDialogForm(false);

      // show snackbar
      setOpenSnackBar(true);
      setSnackbarContent({
        message: result.message,
        snackbarType: result.executionStatus,
      });
    } catch (error) {
      setOpenSnackBar(true);
      setSnackbarContent({
        message: error.message,
        snackbarType: error.executionStatus,
      });
    } finally {
      // send reload
      sendReloadChange(true);
    }
  };

  const handleChangeUser = (e) => {
    setTimeout(() => {
      setUserForm({ ...userForm, [e.target.name]: e.target.value });
    }, 1000);
  };

  const handleChangeAssignment = (e) => {
    setTimeout(() => {
      setAssignmentForm({ ...assignmentForm, [e.target.name]: e.target.value });
    }, 1000);
  };

  //region password
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  // switch login or register
  const [method, setMethod] = useState("files");
  const handleMethodChange = (value, newValue) => {
    setMethod(newValue);
  };
  const filePath1 = process.env.PUBLIC_URL + "/sample_word.html";
  const filePath2 = process.env.PUBLIC_URL + "/sample_excel.html";
  const docs = [
    {
      uri: filePath1,
    },
    {
      uri: filePath2,
    },
  ];

  // demo convert word to html --> ERROR
  useEffect(() => {
    const demoConverter = () => {
      mammoth
        .convertToHtml({ path: process.env.PUBLIC_URL + "/test_word.docx" })
        .then(function (result) {
          var html = result.value; // The generated HTML
          docs.push({
            uri: html,
          });
        })
        .catch(function (error) {
          console.error("this is error " + error);
        });
    };
    demoConverter();
  }, []);

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="lg"
        scroll="paper"
        open={isOpen}
        onClose={() => OnCloseDialogForm(false)}
      >
        <form>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <FormControl fullWidth sx={{ height: "64vh" }}>
              <Tabs sx={{ mb: 3 }} value={method} onChange={handleMethodChange}>
                <Tab label="Information" value="information" />
                <Tab label="Files" value="files" />
              </Tabs>
              {method === "information" && (
                <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={12} md={12} lg={12} padding={0}>
                    <Typography paddingLeft={2} fontSize={22}>
                      Account{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <TextField
                      sx={{ paddingBottom: 2, width: "100%" }}
                      required
                      name="email"
                      type="email"
                      label="E-mail"
                      error={
                        errorContent.find(
                          (e) => e.isError === true && e.field === "email"
                        ) != null
                      }
                      helperText={
                        errorContent.find(
                          (e) => e.isError === true && e.field === "email"
                        )?.message ?? ""
                      }
                      defaultValue={updatedUserValue?.email ?? ""}
                      onChange={handleChangeUser}
                    />
                  </Grid>
                  <Grid item xs={12} md={2} lg={2}>
                    <TextField
                      sx={{ paddingBottom: 2, width: "100%" }}
                      required
                      select
                      name="userRoleCode"
                      label="Role"
                      error={
                        errorContent.find(
                          (e) =>
                            e.isError === true && e.field === "userRoleCode"
                        ) != null
                      }
                      helperText={
                        errorContent.find(
                          (e) =>
                            e.isError === true && e.field === "userRoleCode"
                        )?.message ?? ""
                      }
                      defaultValue={updatedUserValue?.userRoleCode ?? ""}
                      onChange={handleChangeUser}
                    >
                      {roles.length > 0 &&
                        roles.map((role) => (
                          <MenuItem value={role.code}>{role.name}</MenuItem>
                        ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={3} lg={3}>
                    <TextField
                      sx={{ paddingBottom: 2 }}
                      fullWidth
                      required
                      name="password"
                      label="Password"
                      type={showPassword1 ? "text" : "password"}
                      error={
                        errorContent.find(
                          (e) => e.isError === true && e.field === "password"
                        ) != null
                      }
                      helperText={
                        errorContent.find(
                          (e) => e.isError === true && e.field === "password"
                        )?.message ?? ""
                      }
                      defaultValue={updatedUserValue?.password ?? ""}
                      onChange={handleChangeUser}
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
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} lg={3}>
                    <TextField
                      sx={{ paddingBottom: 2 }}
                      fullWidth
                      required
                      name="confirmPassword"
                      label="Confirm Password"
                      type={showPassword2 ? "text" : "password"}
                      error={
                        errorContent.find(
                          (e) =>
                            e.isError === true && e.field === "confirmPassword"
                        ) != null
                      }
                      helperText={
                        errorContent.find(
                          (e) =>
                            e.isError === true && e.field === "confirmPassword"
                        )?.message ?? ""
                      }
                      defaultValue={updatedUserValue?.password ?? ""}
                      onChange={handleChangeUser}
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
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} padding={0}>
                    <Typography paddingLeft={2} fontSize={22}>
                      User Information
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <TextField
                      sx={{ paddingBottom: 2, width: "100%" }}
                      required
                      name="userName"
                      label="Name"
                      error={
                        errorContent.find(
                          (e) => e.isError === true && e.field === "userName"
                        ) != null
                      }
                      helperText={
                        errorContent.find(
                          (e) => e.isError === true && e.field === "userName"
                        )?.message ?? ""
                      }
                      defaultValue={updatedUserValue?.userName ?? ""}
                      onChange={handleChangeUser}
                    />
                  </Grid>
                  <Grid item xs={12} md={2} lg={2}>
                    <TextField
                      sx={{ paddingBottom: 2, width: "100%" }}
                      required
                      name="userCode"
                      label="Code"
                      error={
                        errorContent.find(
                          (e) => e.isError === true && e.field === "userCode"
                        ) != null
                      }
                      helperText={
                        errorContent.find(
                          (e) => e.isError === true && e.field === "userCode"
                        )?.message ?? ""
                      }
                      defaultValue={updatedUserValue?.userCode ?? ""}
                      onChange={handleChangeUser}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} lg={3}>
                    <TextField
                      sx={{ paddingBottom: 2, width: "100%" }}
                      required
                      select
                      name="major"
                      label="Major"
                      error={
                        errorContent.find(
                          (e) => e.isError === true && e.field === "major"
                        ) != null
                      }
                      helperText={
                        errorContent.find(
                          (e) => e.isError === true && e.field === "major"
                        )?.message ?? ""
                      }
                      onChange={handleChangeUser}
                    >
                      {Object.keys(ENUM_MAJOR).map((e) => (
                        <MenuItem
                          // defaultValue={updatedUserValue?.major ?? ""}
                          value={Object.keys(ENUM_MAJOR).indexOf(e)}
                        >
                          {e}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={3} lg={1}>
                    <TextField
                      sx={{ width: "100%" }}
                      select
                      label="Gender"
                      name="gender"
                      defaultValue={"Female"}
                      onChange={handleChangeUser}
                    >
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Male"}>Male</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <TextField
                      sx={{ paddingBottom: 2, width: "100%" }}
                      defaultValue={updatedUserValue?.location ?? ""}
                      name="location"
                      label="Location"
                      onChange={handleChangeUser}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} lg={3}>
                    <TextField
                      sx={{ paddingBottom: 2, width: "100%" }}
                      defaultValue={updatedUserValue?.phone ?? ""}
                      name="phone"
                      label="Phone"
                      onChange={handleChangeUser}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} lg={3}>
                    <DatePicker
                      label={"Date Of Birth"}
                      sx={{ width: "100%" }}
                      onChange={(newDate) => setBirthDate(newDate)}
                      defaultValue={birthDate}
                      slotProps={{
                        actionBar: {
                          actions: ["clear", "today"],
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              )}

              {method === "files" && (
                <>
                  <Grid
                    container
                    spacing={1}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item xs={12} md={12} lg={12} padding={0}>
                      <Typography paddingLeft={2} fontSize={22}>
                        Assignment Submitment
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                      <TextField
                        sx={{ paddingBottom: 2, width: "100%" }}
                        required
                        name="code"
                        label="Code"
                        // defaultValue={updateAssignmentValue?.code ?? ""}
                        onChange={handleChangeAssignment}
                      />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                      <TextField
                        sx={{ paddingBottom: 2, width: "100%" }}
                        required
                        name="title"
                        label="Title"
                        // defaultValue={updateAssignmentValue?.code ?? ""}
                        onChange={handleChangeAssignment}
                      />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                      <TextField
                        sx={{ paddingBottom: 2, width: "100%" }}
                        required
                        name="subjectName"
                        label="Subject"
                        // defaultValue={updateAssignmentValue?.code ?? ""}
                        onChange={handleChangeAssignment}
                      />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                      <TextField
                        sx={{ paddingBottom: 2, width: "100%" }}
                        required
                        name="createdDate"
                        label="Create Date"
                        // defaultValue={updateAssignmentValue?.code ?? ""}
                        onChange={handleChangeAssignment}
                      />
                    </Grid>
                    {/* <Grid item xs={0} md={8} lg={8}/> */}
                    <Grid item xs={12} md={4} lg={4}>
                      <TextField
                        sx={{ paddingBottom: 2, width: "100%" }}
                        required
                        name="updatedDate"
                        label="Update Date"
                        // defaultValue={updateAssignmentValue?.code ?? ""}
                        onChange={handleChangeAssignment}
                      />
                    </Grid>
                    <Grid item xs={0} md={4} lg={4} />
                    <Grid
                      item
                      xs={12}
                      md={4}
                      lg={4}
                      display={"flex"}
                      alignItems={"baseline"}
                      gap={"15px"}
                    >
                      <Typography>Status</Typography>
                      <TextField
                        sx={{ paddingBottom: 2, width: "100%" }}
                        required
                        name="status"
                        variant="filled"
                        // defaultValue={updateAssignmentValue?.code ?? ""}
                        onChange={handleChangeAssignment}
                      />
                    </Grid>
                    <Grid item xs={0} md={8} lg={8} />
                    <Grid
                      item
                      xs={12}
                      md={4}
                      lg={4}
                      display={"flex"}
                      alignItems={"baseline"}
                      gap={"15px"}
                    >
                      <Typography>Grade</Typography>
                      <TextField
                        sx={{ paddingBottom: 2, width: "100%" }}
                        required
                        name="grade"
                        variant="filled"
                        // defaultValue={updateAssignmentValue?.code ?? ""}
                        onChange={handleChangeAssignment}
                      />
                    </Grid>
                    <Grid item xs={0} md={8} lg={8} />
                  </Grid>
                  <Box height={"80vh"}>
                    <DocViewer
                      prefetchMethod="GET"
                      documents={docs}
                      pluginRenderers={DocViewerRenderers}
                      style={{
                        height: "80vh",
                      }}
                    />
                  </Box>
                </>
              )}
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ color: "red" }}
              onClick={() => OnCloseDialogForm(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (updatedUserValue == null) {
                  createUser();
                } else {
                  updateUser();
                }
              }}
            >
              OK
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <SnackbarStatutes
        isOpen={isOpenSnackBar}
        message={snackbarContent.message}
        snackbarType={snackbarContent.snackbarType}
      />
    </>
  );
}
