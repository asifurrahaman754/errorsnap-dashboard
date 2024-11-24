import { Box, CircularProgress, Tooltip } from "@mui/material";
import { useIsFetching } from "@tanstack/react-query";
import React from "react";
import { cssColor } from "utils/colors";

export default function GlobalFetchingLoader() {
  const isFetching = useIsFetching();

  if (isFetching === 0) {
    return null;
  }

  return (
    <Tooltip title="Syncing data..">
      <Box
        sx={{
          position: "fixed",
          top: 10,
          right: 10,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        <CircularProgress sx={{ color: cssColor("textSecondary") }} size={20} />
      </Box>
    </Tooltip>
  );
}
