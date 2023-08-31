import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    FormLabel,
    Stack,
    TextField,
    Box, IconButton,
    InputAdornment,
    Grid,
    Typography,
    Tabs,
    Tab,
    Select,
    MenuItem
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ENUM_MAJOR } from "../../../shared/enums/enum-majors";
import { ENUM_ROLE } from "../../../shared/enums/enum-roles";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoFileViewer } from "../../../test-file-viewer";
import { UserModelFunc } from "../../../shared/models/user";
import APIServices from "../../../api";
import { HTTP_METHOD } from "../../../shared/enums/http-methods";
import { HTTP_ENTITY } from "../../../shared/enums/http-entity";

export default function FormUser2({
    title,
    isOpen,
    OnCloseDialogForm,
}) {
    const [userForm, setUserForm] = useState({
        email: "",
        role: "",
        password: "",
        userName: "",
        userCode: "",
        major: "",
        dateOfBirth: "",
        gender: "",
        location: "",
        phone: "",
    });

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const [errorContent, setErrorContent] = useState([]);
    
    const ValidateFormUser = () => {
        try {
            let requiredList = []
            userForm.dateOfBirth = birthDate;
            if(userForm.email == ""){
                requiredList.push({
                    isError: true,
                    field: userForm.email,
                    message: "E-mail is required."
                })
            }
            if(userForm.userName === ""){
                requiredList.push({
                    isError: true,
                    field: userForm.userName,
                    message: "User Name is required."
                })
            }
            if(userForm.userCode === ""){
                requiredList.push({
                    isError: true,
                    field: userForm.userCode,
                    message: "User Code is required."
                })
            }

            if(userForm.password === ""){
                requiredList.push({
                    isError: true,
                    field: userForm.password,
                    message: "Password is required."
                })
            }
            if(requiredList.length > 0 ){
                setErrorContent(requiredList);
            }
            console.log(errorContent);
            // var requiredList = Object.entries(userForm).filter((e) => 
            //        e[0] === "email"  && e[1] == ""
            //     || e[0] === "role" && e[1] == ""
            //     || e[0] === "password" && e[1] == ""
            //     || e[0] === "userName" && e[1] == ""
            //     || e[0] === "userCode" && e[1] == ""
            //     || e[0] !== "major" && e[1] == ""                
            //     // if( e[0] === "email"  && e[1] == ""
            //     //     || e[0] === "role" && e[1] == ""
            //     //     || e[0] === "password" && e[1] == ""
            //     //     || e[0] === "userName" && e[1] == ""
            //     //     || e[0] === "userCode" && e[1] == ""
            //     //     || e[0] !== "major" && e[1] == "")
            //     //     {
                        
            //     //     }
            //     // if(key == "email" || key == "userName"){
            //     //     e[key] = value;
            //     // }
            //     // console.log(e);
            //     // if (key !== "email"  
            //     //     // || key === "role"
            //     //     // || key === "password"
            //     //     // || key === "userName"
            //     //     // || key === "userCode"
            //     //     || key !== "major") 
            //     // {
            //     //     e[key] = value;
            //     //     // throw Error(key)
            //     // }
            //     // return e;
            //     // return null;
            // )
            // console.log(requiredList[0][0]);

            // createUser(UserModelFunc(userForm))
        } catch (error) {
            console.log(error);
            // setErrorContent({
            //     isError: true,
            //     message:`${errorField} is required`,
            //     field:errorField
            // })
        }
    }

    const updateUser = () => {
        const updateAsync = async () => {

        }
        updateAsync();
    }

    const createUser = (data) => {
        try {
            const createAsync = async () => {
                await APIServices({
                    HttpMethod: HTTP_METHOD.HTTP_POST,
                    Data: data,
                    Endpoint: HTTP_ENTITY.USER
                })
            }
            createAsync()
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    const handleChange = (e) => {
        setTimeout(() =>{
            setUserForm({ ...userForm, [e.target.name]: e.target.value });
        },1000)
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

    const [birthDate, setBirthDate] = useState(dayjs(new Date()));
    
    return (
        <>
            <Dialog fullWidth maxWidth="lg" scroll="paper"
                open={isOpen} onClose={() => OnCloseDialogForm(false)}>
                <form >

                    <DialogTitle>{title}</DialogTitle>
                    <DialogContent>
                        <FormControl fullWidth sx={{ height: "64vh" }} >
                            <Tabs sx={{ mb: 3 }} value={method} onChange={handleMethodChange}>
                                <Tab label="Information" value="information" />
                                <Tab label="Files" value="files" />
                            </Tabs>
                            {
                                method === "information" && (
                                    <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        <Grid item xs={12} md={12} lg={12} padding={0}>
                                            <Typography paddingLeft={2} fontSize={22}>Account </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4} lg={4}>
                                            <TextField sx={{ paddingBottom: 2, width: "100%" }}
                                                required
                                                name="email"
                                                type="email"
                                                label="E-mail"
                                                error={() =>{
                                                    console.log(errorContent);
                                                    var existed = errorContent.find(e => e.isError === true && e.field === "email")
                                                    if(existed != null){
                                                        return true;
                                                    }else{
                                                        return false;
                                                    }
                                                }}
                                                helperText={
                                                    // errorContent.find(e => e.isError == true && e.field == "email").message
                                                    ""
                                                }
                                                defaultValue={userForm.email}
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={2} lg={2}>
                                            <TextField sx={{ paddingBottom: 2, width: "100%" }}
                                                required
                                                select
                                                name="role"
                                                label="Role"
                                                // error={
                                                //     errorContent.isError == true
                                                //     && errorContent.field == "role"
                                                // }
                                                // helperText={
                                                //     errorContent.isError == true
                                                //     && errorContent.field == "role"
                                                //     ? errorContent.message : ""
                                                // }
                                                onChange={handleChange}
                                            >
                                                {
                                                    Object.keys(ENUM_ROLE).map((e) => (
                                                        <MenuItem value={Object.keys(ENUM_ROLE).indexOf(e)}>
                                                            {e}
                                                        </MenuItem>
                                                    ))
                                                }
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={12} md={3} lg={3}>
                                            <TextField sx={{ paddingBottom: 2 }}
                                                fullWidth
                                                required
                                                name="password"
                                                label="Password"
                                                type={showPassword1 ? "text" : "password"}
                                                // error={
                                                //     errorContent.isError == true
                                                //     && errorContent.field == "password"
                                                // }
                                                // helperText={
                                                //     errorContent.isError == true
                                                //     && errorContent.field == "password"
                                                //     ? errorContent.message : ""
                                                // }
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
                                                // error={errorContent.isError}
                                                sx={{ paddingBottom: 2 }}
                                                label="Confirm Password"
                                                name="confirmPassword"
                                                type={showPassword2 ? "text" : "password"}
                                                onChange={handleChange}
                                                // helperText={errorContent.message}
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
                                                // error={
                                                //     errorContent.isError == true
                                                //     && errorContent.field == "userName"
                                                // }
                                                // helperText={
                                                //     errorContent.isError == true
                                                //     && errorContent.field == "userName"
                                                //     ? errorContent.message : ""
                                                // }
                                                defaultValue={userForm.userName}
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={2} lg={2}>
                                            <TextField sx={{ paddingBottom: 2, width: "100%" }}
                                                required
                                                name="userCode"
                                                label="Code"
                                                // error={
                                                //     errorContent.isError == true
                                                //     && errorContent.field == "userCode"
                                                // }
                                                // helperText={
                                                //     errorContent.isError == true
                                                //     && errorContent.field == "userCode"
                                                //     ? errorContent.message : ""
                                                // }
                                                defaultValue={userForm.userCode}
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={3} lg={3}>
                                            <TextField sx={{ paddingBottom: 2, width: "100%" }}
                                                required
                                                select
                                                name="major"
                                                label="Major"
                                                // error={
                                                //     errorContent.isError == true
                                                //     && errorContent.field == "major"
                                                // }
                                                // helperText={
                                                //     errorContent.isError == true
                                                //     && errorContent.field == "major"
                                                //     ? errorContent.message : ""
                                                // }
                                                onChange={handleChange}
                                            >
                                                {Object.keys(ENUM_MAJOR).map((e) => (
                                                    <MenuItem value={Object.keys(ENUM_MAJOR).indexOf(e)} >
                                                        {e}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={12} md={2} lg={3}>
                                            <DatePicker
                                                label={"Date Of Birth"}
                                                // name="dateOfBirth"
                                                sx={{ width: "100%" }}
                                                onChange={(newDate) => setBirthDate(newDate)}
                                                defaultValue={birthDate}
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
                                                name="gender"
                                                defaultValue={"Female"}
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
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4} lg={4}>
                                            <TextField
                                                sx={{ paddingBottom: 2, width: "100%" }}
                                                defaultValue={userForm.phone}
                                                name="phone"
                                                label="Phone"
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                    </Grid>
                                )
                            }

                            {
                                method === "files" && (
                                    <DemoFileViewer />
                                )
                            }
                        </FormControl>

                    </DialogContent>
                    <DialogActions>
                        <Button sx={{ color: "red" }}
                            onClick={() => OnCloseDialogForm(false)} >
                            Cancel
                        </Button>
                        <Button onClick={() => {
                            ValidateFormUser();
                            // OnCloseDialogForm(false);
                        }}>
                            OK
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}