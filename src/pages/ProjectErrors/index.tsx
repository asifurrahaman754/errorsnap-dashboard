import { Grid2 as Grid } from "@mui/material";
import ErrorTable from "./components/ErrorTable";
import { useParams } from "react-router-dom";
import PageContainer from "components/PageContainer";
import ErrorFilters from "./components/ErrorFilters";
import ListContainer from "components/ListContainer";
import ProjectErrorsHeader from "./components/ProjectErrorsHeader";
import useProject from "hooks/useProject";

export default function ProjectErrors() {
  const { projectId } = useParams();
  const {
    data: project,
    isLoading,
    error,
  } = useProject(projectId, true, {
    retry: false,
  });

  return (
    <>
      <PageContainer>
        <ListContainer loading={isLoading} error={error}>
          <Grid container rowSpacing={2}>
            <Grid size={12}>
              <ProjectErrorsHeader projectName={project?.name} />
            </Grid>

            <Grid size={12}>
              <ErrorFilters />
            </Grid>
            <Grid size={12}>
              <ErrorTable />
            </Grid>
          </Grid>
        </ListContainer>
      </PageContainer>
    </>
  );
}
