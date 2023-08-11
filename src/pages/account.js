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
    Typography
} from "@mui/material";

import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { DatePicker } from "@mui/x-date-pickers";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import DeleteIcon from '@mui/icons-material/Delete';
import HttpsIcon from '@mui/icons-material/Https';
import dayjs from "dayjs";

import DialogConfirm from "../components/dialogs/dialog-confirm";
import { UserModelFunc } from "../api/models/user";
import { useDefaultLayoutContext } from "../layout/provider/layout-provider";
import APIServices, { ENTITY_ENUM, HTTP_METHOD_ENUM } from "../api";
import { ConvertDate } from "../api/func";

const USER_ACTION = {
    DELETE,
    UPDATE
}

export default function AccountPage() {
    // User Infomation
    const [userInfo, setUserInfo] = useState();
    const [userForm, setUserForm] = useState({
        userCode: "",
        userName: "",
        gender: "",
        dateOfBirth: "",
        phone: "",
        major: "",
        email: "",
    });
    const [birthDate, setBirthDate] = useState(dayjs(""));

    const [dialogContent, setDialogContent] = useState({
        title:"",
        message:""
    });

    const [isOpen, setDialogOpen] = useState(false);
    const [isReadOnly, setReadOnly] = useState(false);

    
    const updateUser = () =>{

    }

    const getUser = () =>{
        
    }

    const deleteUser = () =>{

    }

    // get user information
    useEffect(()=>{
        const getUserData = async () => 
        {    
            var userEmail = (localStorage.getItem("UserEmail")).slice(1,-1);

            var value  = await APIServices({
                HttpMethod: HTTP_METHOD_ENUM.HTTP_GET,
                Data:null,
                Endpoint:`${ENTITY_ENUM.USER}/email/${userEmail}`
            });

            value.dateOfBirth = dayjs(value.dateOfBirth)
            setUserInfo(UserModelFunc(value));
        } 
        getUserData();
    },[])

    // Reload user state
    useEffect(()=>{
    },[userInfo])

    // get form data value
    const handleChange = (e) => {
        setUserForm({ ...userForm, [e.target.name]: e.target.value });
    };

    const onSaveButtonClicked = async () =>{
        // console.log(ConvertDate(userInfo.dateOfBirth));
        
        if(Object.values(userForm).includes(""))
        {
            var newUserForm = 
            {
                userCode: userForm.userCode === "" ? userInfo.userCode : userForm.userCode,
                userName: userForm.userName === "" ? userInfo.userName : userForm.userName,
                gender: userForm.gender === "" ? userInfo.gender : userForm.gender,
                dateOfBirth: userForm.dateOfBirth === ""? ConvertDate(userInfo.dateOfBirth): ConvertDate(birthDate),
                phone: userForm.phone === "" ? userInfo.phone : userForm.phone,
                major: userForm.major === "" ? userInfo.major : userForm.major,
                email: userForm.email === "" ? userInfo.email : userForm.email,
            }
            console.log(UserModelFunc(newUserForm));
        }
    }
  
    const onSubmitClicked = (e) =>{
        e.preventDefault();
        setDialogContent({
            title:"Update information",
            message:"Do you want change your account information ?"
        })
    }

    const OnDeleteProfileButton = () => {
        setDialogContent({
            title:"Delete account",
            message:"Do you want to delete this account ?"
        })
        setDialogOpen(true)

        if(OnAcceptDialogForm()){
            console.log(1123);
        }
        // deleteUser();
    }

    const OnEditProfileButton = () => {
        setReadOnly(!isReadOnly);
    }
    
    const OnUploadFileButton = () =>{
        document.getElementById("get-file").click();
    }

    const OnOpenDialogForm = () => {
        setDialogOpen(true)
    }

    const OnCloseDialogForm = (e) => {
        setDialogOpen(e);
    }

    const OnAcceptDialogForm = (e) =>{
        // turn off 
        // setDialogOpen(false);

        // allow acction
        return true ;
    }
    return (
        <>  
            {userInfo != null ?
            (
                <>
                            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                }}
            >
                <Stack spacing={3}>
                    <div>
                        <Typography variant="h4">
                            Account 
                            <Button onClick={onSaveButtonClicked} variant="contained">TEST</Button>
                        </Typography>
                    </div>
                    <div>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} lg={4} >
                                <Card>
                                    <CardContent>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                height: "60vh"
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
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                            >
                                                {userInfo.userName}
                                            </Typography>
                                            <Typography
                                                color="text.secondary"
                                                variant="body2"
                                            >
                                                {userInfo.userCode}
                                            </Typography>
                                            <Typography
                                                color="text.secondary"
                                                variant="body2"
                                            >
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
                                        <Input id="get-file" sx={{display:"none"}} type="file"/>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6} lg={8}>
                                <form
                                    autoComplete="off"
                                    noValidate
                                    onSubmit={onSubmitClicked}
                                >
                                    <Card >
                                        <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                                            <CardHeader
                                                subheader="The information can be edited"
                                                title="Profile"
                                            >
                                            </CardHeader>
                                            <Box sx={{display:"flex", alignItems:"center"}}>
                                            <Button onClick={OnDeleteProfileButton}>
                                                <Tooltip title="Delete" >
                                                    <DeleteIcon />
                                                </Tooltip>
                                            </Button>    
                                            <Button onClick={OnEditProfileButton}>
                                                <Tooltip title="Edit" >
                                                    <EditIcon />
                                                </Tooltip>
                                            </Button>
                                            </Box>
                                        </Box>
                                        <CardContent >
                                            <Box sx={{ height: "53vh", flexGrow: 1 }} paddingLeft={3}>
                                                <Grid container spacing={4} >
                                                    <Grid item xs={12} md={6} sx={{ paddingTop: "15px !important" }}>
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
                                                            value={userForm.userName}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6} sx={{ paddingTop: "15px !important" }}>
                                                        <TextField
                                                            InputProps={{
                                                                readOnly: isReadOnly,
                                                            }}
                                                            sx={{ marginRight: 2 }}
                                                            fullWidth
                                                            label="User Code"
                                                            name="userCode"
                                                            requirede
                                                            variant={isReadOnly ? "filled" : "outlined"}
                                                            defaultValue={userInfo.userCode}
                                                            onChange={handleChange}
                                                        // value={values.userCode}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6} sx={{ paddingTop: "15px !important" }}>
                                                        <DatePicker 
                                                        sx={{width:"100%"}}
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
                                                    <Grid item xs={12} md={3} sx={{ paddingTop: "15px !important" }}>
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
                                                            value={userInfo.phone}
                                                            onChange={handleChange}
                                                        // value={values.[phone]}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={3} sx={{ paddingTop: "15px !important" }}>
                                                        <Box sx={{display:"flex",alignItems:"center"}}>
                                                        <Typography>Gender:&nbsp;</Typography>
                                                        <Select
                                                            id="demo-simple-select"
                                                            readOnly={isReadOnly}
                                                            sx={{ background: isReadOnly ? '#F0F0F0' : 'inherit' }}
                                                            defaultValue={userInfo.gender}
                                                            value={userInfo.gender}
                                                            name="gender"
                                                            // value={age}
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value={"Female"}>Female</MenuItem>
                                                            <MenuItem value={"Male"}>Male</MenuItem>
                                                        </Select>
                                                        </Box>                                                       
                                                    </Grid>
                                                    <Grid item xs={12} md={6} sx={{ paddingTop: "15px !important" }}>
                                                        <Box sx={{display:"flex",alignItems:"center"}}> 
                                                            <TextField
                                                                // InputProps={{
                                                                //     readOnly: isReadOnly,
                                                                // }}
                                                                readOnly
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
                                                                background: isReadOnly ? '#F0F0F0' : 'inherit'
                                                             }} 
                                                             startIcon={
                                                                 <InputAdornment position="start">
                                                                    {isReadOnly ? <HttpsIcon/>:
                                                                    <LockOpenIcon/>
                                                                     }
                                                                 </InputAdornment>
                                                            } >Change password</Button>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} md={2} sx={{ paddingTop: "15px !important" }}>
                                                    <Box sx={{display:"flex",alignItems:"center"}}>
                                                        <Typography>Major:&nbsp;</Typography>
                                                        <Select
                                                            readOnly={isReadOnly}
                                                            sx={{ background: isReadOnly ? '#F0F0F0' : 'inherit' }}
                                                            defaultValue={userInfo.major}
                                                            // value={age}
                                                            // onChange={handleChange}
                                                        >
                                                            <MenuItem value={"Finance"}>Finance</MenuItem>
                                                            <MenuItem value={"Dev"}>Dev</MenuItem>
                                                        </Select>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </CardContent>
                                        <Divider />
                                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                                            <Button variant="contained"
                                            disabled={isReadOnly}
                                            type="submit"
                                                onClick={() => OnOpenDialogForm()}>
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
                isOpen={isOpen} title={dialogContent.title} message={dialogContent.message} 
                OnCloseDialogForm={OnCloseDialogForm} 
                OnAcceptDialogForm={(e)=>OnAcceptDialogForm(e,USER_ACTION.DELETE)}
            /></>
            )
            :
            ("Loading...")}  

        </>
    );
}     