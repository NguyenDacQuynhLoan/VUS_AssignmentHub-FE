
import { Link, Routes, Route } from "react-router-dom";
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
  } from "@mui/material";
import { sideBarWidth, useDefaultLayoutContext } from "../provider/layout-provider";
import { adminMenu } from "../../routes/admin-menu";

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  
export function DefaultSidebar() {
    const theme = useTheme();
    const {openSidebar,onToggleSidebar} = useDefaultLayoutContext();

    return ( 
        <>
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
        <DrawerHeader>
          <IconButton onClick={onToggleSidebar}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {adminMenu.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              style={{ textDecoration: "none", color: "gray" }}
            >
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={<Typography>{item.title}</Typography>}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      {/* <Main open={openSidebar}>
         <DrawerHeader />
         <Routes>
           {adminMenu.map((item, index) => (
             <Route key={index} path={item.url} element={item.page}></Route>
           ))}
         </Routes>
       </Main> */}
        </>
     );
}