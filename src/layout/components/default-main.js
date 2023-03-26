import { Link, Routes, Route } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { adminMenu } from "../../routes/admin-menu";
import { sideBarWidth, useDefaultLayoutContext } from "../provider/layout-provider";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${sideBarWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export function DefaultMain() {
    const {openSidebar} = useDefaultLayoutContext();

  return (
    <>
      <Main open={openSidebar}>
        <DrawerHeader />
        <Routes>
          {adminMenu.map((item, index) => (
            <Route key={index} path={item.url} element={item.page}></Route>
          ))}
        </Routes>
      </Main>
    </>
  );
}
