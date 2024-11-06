import { Box, CircularProgress, Dialog } from "@mui/material";
import useAuthUser from "hooks/useAuthUser";
import React, { ReactNode } from "react";

export default function AppLoader({ children }: { children: ReactNode }) {
  const { isInitialized } = useAuthUser();

  return isInitialized ? (
    children
  ) : (
    <Dialog open={true} title={null} onClose={null} fullScreen>
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    </Dialog>
  );
}
