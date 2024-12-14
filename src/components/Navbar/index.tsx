import { AppBar, Box, Typography } from "@mui/material";
import PageContainer from "components/PageContainer";
import { useNavigate } from "react-router-dom";
import { cssColor } from "utils/colors";
import MenuItems from "./components/MenuItems";

export default function Navbar() {
  const navigate = useNavigate();

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
          boxShadow: "none",
        }}
      >
        <PageContainer sx={{ height: "100%" }}>
          <Box height="100%" display="flex" alignItems="center">
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box width="30px" component="img" src="/bug.svg" />
              <Typography
                sx={{ cursor: "pointer", display: "inline-block" }}
                color="white"
                variant="h6"
                onClick={RedirectToHome}
              >
                ErrorSnap
              </Typography>
            </Box>

            <MenuItems />
          </Box>
        </PageContainer>
      </AppBar>
    </>
  );
}
