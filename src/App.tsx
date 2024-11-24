import { Box } from "@mui/material";
import RoutProvider from "./routes/Provider";
import { cssColor } from "utils/colors";
import { Toaster } from "react-hot-toast";
import AppEvents from "components/AppEvents";
import AppLoader from "components/AppLoader";
import GlobalFetchingLoader from "components/GlobalFetchingLoader";

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
          <GlobalFetchingLoader />
          <RoutProvider />
        </AppLoader>
      </Box>
    </>
  );
}

export default App;
