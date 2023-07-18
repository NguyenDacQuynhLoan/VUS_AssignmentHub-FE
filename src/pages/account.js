import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Container, Divider, Grid, Stack, TextField, Typography } from "@mui/material";

export default function AccountPage() {
    return (
        <>
            {/* <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>

                </Grid>
                <Grid item xs={2} sm={4} md={8}>
                    content
                </Grid>
            </Grid> */}
            {/* <Head>
                <title>
                    Account | Devias Kit
                </title>
            </Head> */}
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
                                                    height:"60vh"
                                                }}
                                            >
                                                <Avatar
                                                    //   src={user.avatar}
                                                    sx={{
                                                        my:3,
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
                                            <Button
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
                                            <CardHeader
                                                subheader="The information can be edited"
                                                title="Profile"
                                            />
                                            <CardContent >
                                            {/* sx={{ pt: 0 }} */}
                                                <Box sx={{height:"53vh"}}>
                                                    <Grid container spacing={3} paddingLeft={3}>
                                                        <Grid xs={12} md={6}>
                                                            <TextField
                                                                fullWidth
                                                                helperText="Please specify the first name"
                                                                label="First name"
                                                                name="firstName"
                                                                required
                                                                // onChange={handleChange}
                                                                // value={values.firstName}
                                                            />
                                                        </Grid>
                                                        <Grid
                                                            xs={12}
                                                            md={6}
                                                        >
                                                            <TextField
                                                                fullWidth
                                                                label="Last name"
                                                                name="lastName"
                                                                required
                                                                // onChange={handleChange}
                                                                // value={values.lastName}
                                                            />
                                                        </Grid>
                                                        <Grid
                                                            xs={12}
                                                            md={6}
                                                        >
                                                            <TextField
                                                                fullWidth
                                                                label="Email Address"
                                                                name="email"
                                                                required
                                                                // onChange={handleChange}
                                                                // value={values.email}
                                                            />
                                                        </Grid>
                                                        <Grid
                                                            xs={12}
                                                            md={6}
                                                        >
                                                            <TextField
                                                                fullWidth
                                                                label="Phone Number"
                                                                name="phone"
                                                                type="number"
                                                                // onChange={handleChange}
                                                                // value={values.phone}
                                                            />
                                                        </Grid>
                                                        <Grid
                                                            xs={12}
                                                            md={6}
                                                        >
                                                            <TextField
                                                                fullWidth
                                                                label="Country"
                                                                name="country"
                                                                required
                                                                // onChange={handleChange}
                                                                // value={values.country}
                                                            />
                                                        </Grid>
                                                        <Grid
                                                            xs={12}
                                                            md={6}
                                                        >
                                                            <TextField
                                                                fullWidth
                                                                label="Select State"
                                                                name="state"
                                                                // onChange={handleChange}
                                                                required
                                                                select
                                                                SelectProps={{ native: true }}
                                                                // value={values.state}
                                                            >
                                                                {/* {states.map((option) => (
                                                                    <option
                                                                        key={option.value}
                                                                        value={option.value}
                                                                    >
                                                                        {option.label}
                                                                    </option>
                                                                ))} */}
                                                            </TextField>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </CardContent>
                                            <Divider />
                                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                                <Button variant="contained">
                                                    Save details
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
