import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid,
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

export default function AccountPage() {
    const [isReadOnly, setReadOnly] = useState(true);

    let data = {
        userCode: "Code001",
        userName: "admin",
        gender: "1",
        dateOfBirth: "2012-12-11T17:00:00.000+00:00",
        phone: "1",
        major: "Finance",
        email: "admin@gmail",
        password: "$2a$12$C5XEeARWvjsUgb6mPwx8duGfxD4JzfLGyh2lzi0tJ/4lKFk7kWCJO",
        subjects: [],
        assignments: []
    }

    let convertedDate = UserModelFunc(data);
    console.log(convertedDate);

    const EditAccount = () => {
        setReadOnly(true);
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
                                                {/* {user.name} */}
                                                name
                                            </Typography>
                                            <Typography
                                                color="text.secondary"
                                                variant="body2"
                                            >
                                                {/* {user.city} {user.country} */}
                                                city
                                            </Typography>
                                            <Typography
                                                color="text.secondary"
                                                variant="body2"
                                            >
                                                {/* {user.timezone} */}
                                                timezone
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                    <Divider />
                                    <CardActions>
                                        <Button onClick={() => EditAccount()}
                                            fullWidth
                                            variant="text"
                                        >
                                            Upload picture
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            {/* content */}
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
                                            <Button>
                                                <Tooltip title="Edit">
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
                                                        <TextField
                                                            InputProps={{
                                                                readOnly: isReadOnly,
                                                            }}
                                                            sx={{ marginRight: 2 }}
                                                            fullWidth
                                                            label="E-mail / Account"
                                                            name="email"
                                                            required
                                                            variant={isReadOnly ? "filled" : "outlined"}
                                                            defaultValue={convertedDate.email}
                                                        // onChange={handleChange}
                                                        // value={values.email}
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
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            readOnly={isReadOnly}
                                                            label="Gender"
                                                            sx={{ background: isReadOnly ? '#F0F0F0' : 'inherit' }}
                                                            defaultValue={convertedDate.gender}
                                                            // value={age}
                                                            // onChange={handleChange}
                                                        >
                                                            <MenuItem value={"Female"}>Female</MenuItem>
                                                            <MenuItem value={"Male"}>Male</MenuItem>
                                                        </Select>

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

                                                </Grid>
                                            </Box>
                                        </CardContent>
                                        <Divider />
                                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                                            <Button variant="contained">
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
        </>
    );
}