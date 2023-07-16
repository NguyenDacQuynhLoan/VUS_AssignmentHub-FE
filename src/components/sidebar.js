import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
  Divider,
  IconButton,
  List,
  Box,
} from "@mui/material";
import {
  sideBarWidth,
  useDefaultLayoutContext,
} from "../layout/provider/layout-provider";
import { adminMenu } from "../routes/admin-menu";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export function SidebarComponent() {
  const theme = useTheme();
  const { openSidebar, onToggleSidebar } = useDefaultLayoutContext();

  return (
    <Box>
      <Drawer
        sx={{
          width: sideBarWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: sideBarWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={openSidebar}
      >
        <DrawerHeader sx={{ backgroundColor: "default.dark" }}>
          <IconButton onClick={onToggleSidebar}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon sx={{ color: "textWhite" }} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ backgroundColor: "default.dark", height: "100%" }}>
          {adminMenu.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              style={{ textDecoration: "none", color: "textWhite" }}
            >
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "textWhite" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "textWhite" }}
                    primary={<Typography>{item.title}</Typography>}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
