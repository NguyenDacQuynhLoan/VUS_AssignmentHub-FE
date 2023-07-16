import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";


export function TotalContainerComponent() {
  let data = [
    {
      title: "total 1",
      value: "total value",
    },
    {
      title: "total 2",
      value: "total value",
    },
    {
      title: "total 3",
      value: "total value",
    },
  ];
  return (
    <>
      <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
          <TotalItemsComponent totalData={data} />
      </Grid>
    </>
  );
}

const TotalItemsComponent = ({ totalData }) => {
  // const { title, value} = data;
  console.log(totalData);
  return (
    <>
      {totalData.map((e,index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Card>
            <CardContent>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <Stack spacing={1}>
                  <Typography color="text.secondary" variant="overline">
                    {e.title}
                  </Typography>
                  <Typography variant="h4">
                    {e.value}
                    </Typography>
                </Stack>
                <Avatar
                  sx={{
                    backgroundColor: "primary.main",
                    height: 56,
                    width: 56,
                  }}
                >
                  {/* <SvgIcon></SvgIcon> */}
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

// TotalContainerComponent.propTypes = {
//   value: PropTypes.array,
// };
