import { Grid } from "@mui/material";

export default function AccountPage() {
    return ( 
        <>
            <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    img
                </Grid>
                <Grid item xs={2} sm={4} md={8}>
                    content
                </Grid>
            </Grid>
        </>
     );
}