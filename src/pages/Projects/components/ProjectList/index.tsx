import { Grid2 as Grid } from "@mui/material";
import Project from "../Project";
import { apiClient } from "utils/axios";
import { useQuery } from "@tanstack/react-query";
import ListContainer from "components/ListContainer";
import { project } from "types/project";

export default function ProjectList() {
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user-projects"],
    queryFn: async (): Promise<project[]> => {
      const response = await apiClient.get("/user-projects");
      return response.data?.data;
    },
  });

  return (
    <ListContainer loading={isLoading} error={error?.message}>
      <Grid container spacing={2}>
        {projects?.map((project) => (
          <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </ListContainer>
  );
}
