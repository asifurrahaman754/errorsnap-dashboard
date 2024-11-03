import { Box, Grid2 as Grid, Typography } from "@mui/material";
import ErrorBox from "./components/ErrorBox";
import ErrorMeta from "./components/ErrorMeta";
import PageContainer from "components/PageContainer";
import useError from "hooks/useError";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";
import { cssColor } from "utils/colors";

export default function ProjectErrorDetails() {
  const { errorId } = useParams();
  const { data, isFetching } = useError(errorId);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <>
      <PageContainer>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Box
              sx={{
                p: [2, 3],
                border: `1px solid ${cssColor("divider")}`,
                borderRadius: 1,
                color: cssColor("white"),
              }}
            >
              <Typography variant="h5">{data?.message}</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }}>
            <ErrorBox error={data} />
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <ErrorMeta error={data} />
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
}
