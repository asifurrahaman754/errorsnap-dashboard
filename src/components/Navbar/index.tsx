import { AppBar, Box, SwipeableDrawer, Typography } from "@mui/material";
import PageContainer from "components/PageContainer";
import MenuIcon from "icons/MenuIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cssColor } from "utils/colors";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleToggleSidebarMenu = () => {
    setOpen((prev) => !prev);
  };

  const RedirectToHome = () => {
    navigate("/projects");
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          height: "56px",
          background: "hsla(0,0%,100%,.8)",
          backdropFilter: "saturate(180%) blur(5px)",
          backgroundColor: cssColor("backgroundShade"),
          borderBottom: `1px solid #2e2e2e`,
        }}
      >
        <PageContainer
          sx={{
            height: "100%",
          }}
        >
          <Box height="100%" display="flex" alignItems="center">
            <MenuIcon
              sx={{ cursor: "pointer" }}
              onClick={handleToggleSidebarMenu}
              color="white"
              mr={1}
            />
            <Typography
              color="white"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={RedirectToHome}
            >
              ErrorSnap
            </Typography>
          </Box>
        </PageContainer>
      </AppBar>

      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClose={handleToggleSidebarMenu}
        onOpen={handleToggleSidebarMenu}
      >
        <Box width="200px">hi</Box>
      </SwipeableDrawer>
    </>
  );
}
