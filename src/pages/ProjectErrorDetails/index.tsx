import { Grid2 as Grid } from "@mui/material";
import ErrorBox from "./components/ErrorBox";
import ErrorMeta from "./components/ErrorMeta";
import PageContainer from "components/PageContainer";

export default function ProjectErrorDetails() {
  return (
    <>
      <PageContainer>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 10 }}>
            <ErrorBox />
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <ErrorMeta />
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
}
