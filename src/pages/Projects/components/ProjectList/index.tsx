import { Grid2 as Grid } from "@mui/material";
import Project from "../Project";
import { apiClient } from "utils/axios";
import { useQuery } from "@tanstack/react-query";
import ListContainer from "components/ListContainer";
import { project } from "types/project";
import { useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { queryStringParse } from "utils/querystring";

export default function ProjectList() {
  const location = useLocation();
  const queryString = useMemo(
    () => queryStringParse(location.search),
    [location.search]
  );

  const {
    data: projects,
    isFetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ["user-projects"],
    queryFn: async (): Promise<project[]> => {
      const response = await apiClient.get(
        `/user-projects?filterBy=${queryString?.filterBy}`
      );
      return response.data?.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [queryString.filterBy, refetch]);

  return (
    <ListContainer loading={isFetching} error={error?.message}>
      <Grid container spacing={2}>
        {projects?.map((project) => (
          <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 4 }}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </ListContainer>
  );
}
