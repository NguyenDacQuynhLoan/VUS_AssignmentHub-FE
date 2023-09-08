import { useState } from "react";

import {
  Box, Button, FormControl, FormLabel, IconButton, TextField,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useEffect } from "react";
import { esES } from "@mui/x-date-pickers";
import { HTTP_METHOD } from "../../../shared/enums/http-methods";
import { HTTP_ENTITY } from "../../../shared/enums/http-entity";
import APIServices from "../../../api";
import SnackbarStatutes from "../../snackbar";

export function FormChangePassword({
  title,
  isOpen,
  OnCloseDialogForm,
  UserCode,
  sendReloadChange,
}) {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // Snackbar setting
  const [snackbarContent, setSnackbarContent] = useState({
    message: "",
    snackbarType: "",
  });
  const [isOpenSnackBar, setOpenSnackBar] = useState(false);

  // error setting
  const [errorContent, setErrorContent] = useState([{
    isError: true,
    field: "",
    message: ""
  }]);

  useEffect(() => { }, [errorContent])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitClicked = (e) => {
    e.preventDefault();
    var isValid = CheckValidChangePassword();
    if (isValid == true) {
      OnChangePasswordButton();

      OnCloseDialogForm(false);
    }
  }

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const CheckValidChangePassword = () => {
    let requiredList = [];

    if (formData.currentPassword === "") {
      requiredList.push({
        isError: true,
        field: "currentPassword",
        message: "Current Password is required.",
      });
    }
    else if (formData.currentPassword.length < 8)
    {
      requiredList.push({
        isError: true,
        field: "currentPassword",
        message: "Current Password character at least 8.",
      });
    }

    if (formData.newPassword === "") {
      requiredList.push({
        isError: true,
        field: "newPassword",
        message: "New Password is required.",
      });
    }
    else if (formData.newPassword.length < 8)
    {
      requiredList.push({
        isError: true,
        field: "newPassword",
        message: "New Password character at least 8.",
      });
    }
    
    if (formData.confirmPassword === "") {
      requiredList.push({
        isError: true,
        field: "confirmPassword",
        message: "Confirm Password is required.",
      });
    } 
    else if (formData.newPassword.length < 8)
    {
      requiredList.push({
        isError: true,
        field: "confirmPassword",
        message: "Confirm Password character at least 8.",
      });
    } 
    else if (formData.confirmPassword !== formData.newPassword) 
    {
      requiredList.push({
        isError: true,
        field: "confirmPassword",
        message: "Confirm Password is not match with Password field.",
      });
    }

    setErrorContent(requiredList);
    if (requiredList.length > 0) {
      return false;
    }
    return true;
  };

  const OnChangePasswordButton = async () => {
    setOpenSnackBar(false);
    try {
      const { confirmPassword, ...rest } = formData;
      var submitData = Object.assign(rest, { userCode: UserCode })

      var result = await APIServices({
        HttpMethod: HTTP_METHOD.HTTP_PUT,
        Endpoint: `${HTTP_ENTITY.USER}/updatePassword`,
        Data: submitData,
      })
      setOpenSnackBar(true);
      setSnackbarContent({
        message: result.message,
        snackbarType: result.executionStatus
      })
    } catch (error) {
      setOpenSnackBar(true);
      setSnackbarContent({
        message: error.message,
        snackbarType: error.executionStatus
      })
    }
  }

  return (
    <>
    <Dialog
      fullWidth
      maxWidth="sm"
      scroll="paper"
      open={isOpen}
      onClose={() => OnCloseDialogForm(false)}
    >
      <DialogTitle>Change Password</DialogTitle>
      <form noValidate onSubmit={onSubmitClicked}>
        <DialogContent >
          <FormControl fullWidth>
            <TextField
              sx={{ paddingBottom: 2 }}
              name="currentPassword"
              label="Current Password"
              error={
                errorContent.find(
                  (e) => e.isError === true && e.field === "currentPassword"
                ) != null
              }
              helperText={
                errorContent.find(
                  (e) => e.isError === true && e.field === "currentPassword"
                )?.message ?? ""
              }
              onChange={handleChange}
            />
            <TextField
              sx={{ paddingBottom: 2 }}
              name="newPassword"
              label="New Password"
              type={showPassword1 ? "text" : "password"}
              error={
                errorContent.find(
                  (e) => e.isError === true && e.field === "newPassword"
                ) != null
              }
              helperText={
                errorContent.find(
                  (e) => e.isError === true && e.field === "newPassword"
                )?.message ?? ""
              }
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
              onChange={handleChange}
            />
            <TextField
              sx={{ paddingBottom: 2 }}
              label="Confirm New Password"
              name="confirmPassword"
              type={showPassword2 ? "text" : "password"}
              error={
                errorContent.find(
                  (e) => e.isError === true && e.field === "confirmPassword"
                ) != null
              }
              helperText={
                errorContent.find(
                  (e) => e.isError === true && e.field === "confirmPassword"
                )?.message ?? ""
              }
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
              onChange={handleChange}
            />
            <Box>
            </Box>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: "red" }}
            onClick={() => OnCloseDialogForm(false)}
          >
            Cancel
          </Button>
          <Button type="submit">
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
  )
}