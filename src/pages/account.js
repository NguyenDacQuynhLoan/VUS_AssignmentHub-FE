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

import { UserModelFunc } from "../api/models/user";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { DatePicker } from "@mui/x-date-pickers";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HttpsIcon from '@mui/icons-material/Https';
import dayjs from "dayjs";
import DialogConfirm from "../components/dialogs/dialog-confirm";

export default function AccountPage() {
    const [isOpen, setDialogOpen] = useState(false);
    const [isReadOnly, setReadOnly] = useState(true);
    const [birthDate, setBirthDate] = useState(dayjs("2022-04-17"));
    let title = "Update information";
    let message = "Do you want change your account information ?"
    let data = {
        userCode: "Code001",//
        userName: "admin", //
        gender: "Female",//
        dateOfBirth: "2022-04-17", // translate to datepicker
        phone: "0902625027", //
        major: "Finance",
        email: "admin@gmail",//
        password: "$2a$12$C5XEeARWvjsUgb6mPwx8duGfxD4JzfLGyh2lzi0tJ/4lKFk7kWCJO",
        subjects: [],
        assignments: []
    }

    let convertedDate = UserModelFunc(data);
    
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

    const OnAcceptDialogForm = () =>{
        // save 
        
        setDialogOpen(false);
    }
    return (
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
                                                {convertedDate.userName}
                                            </Typography>
                                            <Typography
                                                color="text.secondary"
                                                variant="body2"
                                            >
                                                {convertedDate.userCode}
                                            </Typography>
                                            <Typography
                                                color="text.secondary"
                                                variant="body2"
                                            >
                                                {convertedDate.major}
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
                                // onSubmit={handleSubmit}
                                >
                                    <Card >
                                        <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                                            <CardHeader
                                                subheader="The information can be edited"
                                                title="Profile"
                                            >
                                            </CardHeader>
                                            <Button onClick={OnEditProfileButton}>
                                                <Tooltip title="Edit" >
                                                    <EditIcon />
                                                </Tooltip>
                                            </Button>
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
                                                            defaultValue={convertedDate.userName}
                                                        // onChange={handleChange}
                                                        // value={values.firstName}
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
                                                            required
                                                            variant={isReadOnly ? "filled" : "outlined"}
                                                            defaultValue={convertedDate.userCode}
                                                        // onChange={handleChange}
                                                        // value={values.userCode}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6} sx={{ paddingTop: "15px !important" }}>
                                                        <DatePicker 
                                                        sx={{width:"100%"}}
                                                        disabled={isReadOnly}
                                                        label="Date of Birth"
                                                        value={birthDate}
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
                                                            defaultValue={convertedDate.phone}
                                                        // onChange={handleChange}
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
                                                            defaultValue={convertedDate.gender}
                                                            // value={age}
                                                            // onChange={handleChange}
                                                        >
                                                            <MenuItem value={"Female"}>Female</MenuItem>
                                                            <MenuItem value={"Male"}>Male</MenuItem>
                                                        </Select>
                                                        </Box>
                                                       

                                                        {/* <TextField
                                                            InputProps={{
                                                                readOnly: isReadOnly,
                                                            }}
                                                            sx={{ marginRight: 2 }}
                                                            fullWidth
                                                            label="Gender"
                                                            name="gender"
                                                            required
                                                            variant={isReadOnly ? "filled" : "outlined"}
                                                            defaultValue={convertedDate.gender}
                                                        onChange={handleChange}
                                                        value={values.gender}
                                                        /> */}
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
                                                                defaultValue={convertedDate.email}
                                                            // onChange={handleChange}
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
                                                            defaultValue={convertedDate.major}
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
                isOpen={isOpen} title={title} message={message} 
                OnCloseDialogForm={OnCloseDialogForm} 
                OnAcceptDialogForm={OnAcceptDialogForm}
            />
        </>
    );
}     