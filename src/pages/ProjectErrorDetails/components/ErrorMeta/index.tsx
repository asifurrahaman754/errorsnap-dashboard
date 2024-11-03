import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import { errorLog } from "types/errorLog";
import { cssColor } from "utils/colors";

export default function ErrorMeta({ error }: { error: errorLog }) {
  return (
    <Box
      sx={{
        backgroundColor: cssColor("backgroundShade"),
        p: [2, 3],
        borderRadius: 1,
      }}
    >
      <Typography variant="body2">First seen</Typography>
      <Typography variant="body1">
        {format(new Date(error.created_at), "d.M.yyyy")}
      </Typography>
    </Box>
  );
}
