import { Link } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Drawer, ListItem, ListItemIcon, ListItemText, ListItemButton, Typography, Divider, IconButton, List, Box, } from "@mui/material";

import { SIDEBAR_WIDTH, useDefaultLayoutContext, } from "../layout/provider/layout-provider";
import { adminMenu } from "../routes/admin-menu";
import DialogConfirm from "./dialogs/dialog-confirm";
import { useState } from "react";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export function SidebarComponent() {
  const [isOpen, setDialogOpen] = useState(false);

  const theme = useTheme();
  const { openSidebar, onToggleSidebar } = useDefaultLayoutContext();

  let title = "Confirm";
  let message = "Are you sure you want to log out ?";
  const OnOpenDialogForm = () => {
    setDialogOpen(true)
  }

  const OnCloseDialogForm = (e) => {
      setDialogOpen(e);
  }

  const OnAcceptDialogForm = () =>{
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Box>
      <Drawer
        sx={{
          width: SIDEBAR_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: SIDEBAR_WIDTH,
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
                <ListItemButton 
                  onClick={
                    item.title === "Log Out"?
                    OnOpenDialogForm
                    :null}
                >
                  <ListItemIcon sx={{ color: "textWhite" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "textWhite" }}
                    primary={<Typography>
                      {item.title}
                    </Typography>}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <DialogConfirm
                isOpen={isOpen} title={title} message={message} 
                OnCloseDialogForm={OnCloseDialogForm} 
                OnAcceptDialogForm={OnAcceptDialogForm}
            />
    </Box>
  );
}