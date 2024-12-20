import { Box, Chip, Typography } from "@mui/material";
import { errorLog } from "types/errorLog";
import { errorStatus } from "types/logs";
import { cssColor } from "utils/colors";

export default function ErrorBox({ error }: { error: errorLog }) {
  const statusColor =
    error?.status === 0
      ? "error"
      : error?.status === 1
      ? "secondary"
      : "success";

  return (
    <Box
      sx={{
        p: [2, 3],
        border: `1px solid ${cssColor("divider")}`,
        borderRadius: 1,
      }}
    >
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={1}
        mb={2}
      >
        <Box>
          <Typography>File name/function name</Typography>
          <Typography color="error">{error?.source}</Typography>
        </Box>
        <Box>
          <Typography>Column No</Typography>
          <Typography color="error">{error?.colno}</Typography>
        </Box>
        <Box>
          <Typography>Line No</Typography>
          <Typography color="error">{error?.lineno}</Typography>
        </Box>
        <Box>
          <Typography>Status</Typography>
          <Chip
            color={statusColor}
            label={errorStatus[error?.status]}
            variant="outlined"
          />
        </Box>
      </Box>

      <Typography variant="h6">Stack trace</Typography>
      <Box
        minHeight="200px"
        sx={{
          backgroundColor: cssColor("backgroundShade"),
          borderRadius: 1,
          p: 2,
          color: cssColor("error"),
          minWidth: "400px",
          overflow: "auto",
        }}
      >
        <pre>{error?.stack}</pre>
      </Box>
    </Box>
  );
}
