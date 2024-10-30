import { Box, Typography } from "@mui/material";
import { cssColor } from "utils/colors";

export default function ErrorMeta() {
  return (
    <Box
      sx={{
        backgroundColor: cssColor("backgroundShade"),
        p: [2, 3],
        borderRadius: 1,
      }}
    >
      <Typography variant="body2">First seen</Typography>
      <Typography variant="body1">15.3.2024</Typography>
    </Box>
  );
}
