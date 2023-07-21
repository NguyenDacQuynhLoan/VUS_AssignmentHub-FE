import { Grid, Paper } from "@mui/material";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';

export function TotalContainerComponent() {
  let data = [
    {
      title: "Checked assignment total",
      value: "124/ 423  -Q2",
      icon: <DoneAllIcon/>,
      iconColor :""
    },
    {
      title: "Unchecked assignment total",
      value: "32/ 423  -Q2",
      icon: <RemoveDoneIcon/>,
      iconColor :""
    },
    {
      title: "Ranked grade total",
      value: "54",
      icon: <AttachEmailIcon/>,
      iconColor :""
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
                    // backgroundColor: "primary.main",
                    height: 56,
                    width: 56,
                  }}
                >
                  {e.icon}
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
