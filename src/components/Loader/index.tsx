import { Box, CircularProgress } from "@mui/material";
import { cssColor } from "utils/colors";

export default function Loader({ size = 30 }: { size?: number }) {
  return (
    <Box display="flex" justifyContent="center" p={[2, 6]}>
      <CircularProgress
        size={size}
        sx={{
          color: cssColor("white"),
        }}
      />
    </Box>
  );
}
