import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import { errorLog } from "types/errorLog";
import { cssColor } from "utils/colors";
import { getBrowserIcon } from "utils/icon";
import Assignee from "../Assignee";

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
      <Typography variant="body1" mb={2}>
        {format(new Date(error.created_at), "d.M.yyyy")}
      </Typography>
      <Typography variant="body2">Browser</Typography>
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        {getBrowserIcon(error?.browser)}
        <Typography variant="body1">{error?.browser}</Typography>
      </Box>
      <Typography variant="body2">OS</Typography>
      <Typography variant="body1" mb={2}>
        {error?.os}
      </Typography>

      <Assignee assignee={error?.assignee_id} />
    </Box>
  );
}
