import { Button, Grid2 as Grid, Typography } from "@mui/material";
import ErrorTable from "./components/ErrorTable";
import { useParams } from "react-router-dom";
import Copy from "components/Copy";
import PageContainer from "components/PageContainer";
import DownloadIcon from "icons/DownloadIcon";
import { project } from "types/project";
import { apiClient } from "utils/axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "components/Loader";
import ErrorMessage from "components/ErrorMessage";
import SettingsIcon from "icons/SettingsIcon";

export default function ProjectErrors() {
  const { projectId } = useParams();
  const {
    data: project,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["single-project"],
    queryFn: async (): Promise<project> => {
      const response = await apiClient.get(`/project/${projectId}`);
      return response.data?.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error?.message} />;
  }

  return (
    <>
      <PageContainer>
        <Grid container rowSpacing={3}>
          <Grid size={12}>
            <Grid container>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h5" gutterBottom>
                  {project?.name}
                </Typography>
                <Typography color="white">Project ID</Typography>
                <Copy
                  sx={{
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography color="textSecondary">{projectId}</Typography>
                </Copy>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} textAlign="right">
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  sx={{ mr: 2 }}
                >
                  Export Logs
                </Button>
                <Button variant="contained" startIcon={<SettingsIcon />}>
                  Settings
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={12}>
            <ErrorTable />
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
}
