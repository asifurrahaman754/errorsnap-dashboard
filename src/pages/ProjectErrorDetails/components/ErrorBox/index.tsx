import { Box, Typography } from "@mui/material";
import { cssColor } from "utils/colors";

export default function ErrorBox() {
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
          <Typography color="primary">errorLogger.js</Typography>
        </Box>
        <Box>
          <Typography>Column No</Typography>
          <Typography color="primary">31</Typography>
        </Box>
        <Box>
          <Typography>Line No</Typography>
          <Typography color="primary">21</Typography>
        </Box>
      </Box>

      <Box
        minHeight="200px"
        sx={{
          backgroundColor: cssColor("backgroundShade"),
          borderRadius: 1,
          p: 2,
          color: "white",
        }}
      >
        <h1>this is the actual code block</h1>
      </Box>
    </Box>
  );
}
