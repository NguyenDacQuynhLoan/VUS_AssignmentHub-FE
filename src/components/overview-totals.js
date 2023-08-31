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
  var today = new Date();
  var currentYear = today.getFullYear();
  var currentMonth = today.getMonth() + 1;

  // 3 semester per a year
  var quarter = Math.ceil(currentMonth / 4);

  let data = [
    {
      title: "Checked assignment total",
      value: "124/ 423",
      semester: quarter,
      icon: <DoneAllIcon />,
      iconColor: "#00e676"
    },
    {
      title: "Unchecked assignment total",
      value: "32/ 423",
      semester: quarter,
      icon: <RemoveDoneIcon />,
      iconColor: "#f44336"
    },
    {
      title: "Ranked grade total",
      value: "54",
      icon: <AttachEmailIcon />,
      iconColor: "#3f51b5"
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
      {totalData.map((e, index) => (
        <Grid item xs={2} sm={4} md={4} key={index} >
          <Card>
            <CardContent>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <Stack spacing={1} >
                  <Typography color="text.secondary" variant="overline">
                    {e.title}
                  </Typography>
                  <Typography variant="h4">
                    {e.value} &nbsp;
                    {
                      e.title === "Ranked grade total" ? "" :
                        <i style={{ color: "#f9a825" }}>Sem {e.semester}</i>
                    }
                  </Typography>
                </Stack>
                <Avatar
                  sx={{
                    backgroundColor: e.iconColor,
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
