import { Box } from "@mui/material";
import RoutProvider from "./routes/Provider";
import { cssColor } from "utils/colors";
import { Toaster } from "react-hot-toast";
import AppEvents from "components/AppEvents";
import AppLoader from "components/AppLoader";

function App() {
  return (
    <>
      <Toaster />
      <Box
        width="100%"
        minHeight="100vh"
        sx={{
          background: cssColor("background"),
        }}
      >
        <AppEvents />
        <AppLoader>
          <RoutProvider />
        </AppLoader>
      </Box>
    </>
  );
}

export default App;
