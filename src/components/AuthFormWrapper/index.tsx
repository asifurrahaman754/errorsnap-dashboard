import { Grid2 as Grid, Typography } from "@mui/material";
import { ReactNode } from "react";
import { cssColor } from "utils/colors";

export default function AuthFormWrapper({ children }: { children: ReactNode }) {
  return (
    <Grid
      minHeight="100vh"
      alignItems="center"
      alignContent="center"
      container
      maxWidth={{ lg: "800px", xs: "100%" }}
      mx="auto"
      spacing={{ xs: 2, lg: 4 }}
      p={[3, 1]}
    >
      <Grid size={{ xs: 12, lg: 6 }}>
        <Typography variant="h1" mb={1} textAlign="center">
          Track, Resolve, Succeed –<br /> ErrorSnap!
        </Typography>
        <Typography display="block" variant="caption" textAlign="center">
          ErrorSnap helps you pinpoint problems, resolve them faster, and ensure
          your app runs flawlessly. Track smarter, resolve quicker, and succeed
          effortlessly!
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, lg: 6 }}>
        <Grid
          sx={{
            border: "1px solid #1f1f1f",
            borderRadius: 2,
            color: "white",
            backgroundColor: cssColor("paper"),
            mx: { xs: "auto" },
          }}
          container
          spacing={2}
          px={3}
          py={3}
          maxWidth="400px"
        >
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}
