import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { ReactNode } from "react";
import { cssColor } from "utils/colors";

export default function AuthFormWrapper({ children }: { children: ReactNode }) {
  return (
    <Grid container maxWidth="800px" mx="auto" spacing={4}>
      <Grid
        size={{ xs: 12, lg: 6 }}
        display="grid"
        sx={{
          placeItems: "center",
        }}
      >
        <Box width="100%" height="max-content" my="auto">
          <Typography variant="h1" mb={1}>
            Track, Resolve, Succeed –<br /> ErrorSnap!
          </Typography>
          <Typography variant="caption">
            ErrorSnap helps you pinpoint problems, resolve them faster, and
            ensure your app runs flawlessly. Track smarter, resolve quicker, and
            succeed effortlessly!
          </Typography>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, lg: 6 }}>
        <Box
          width="100%"
          height="100vh"
          display="grid"
          sx={{
            placeItems: "center",
          }}
        >
          <Grid
            sx={{
              border: "1px solid #1f1f1f",
              borderRadius: 2,
              color: "white",
              backgroundColor: cssColor("paper"),
            }}
            container
            spacing={2}
            px={3}
            py={3}
            maxWidth="400px"
          >
            {children}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
