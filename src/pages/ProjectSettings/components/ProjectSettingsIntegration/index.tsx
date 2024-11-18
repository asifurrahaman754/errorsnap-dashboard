import { Box, CircularProgress } from "@mui/material";
import useSlackDetails from "hooks/useSlackDetails";
import React from "react";
import { useParams } from "react-router-dom";
import ProjectSettingsSlackIntegrationAdd from "./components/ProjectSettingsSlackIntegrationAdd";
import ProjectSettingsSlackIntegrationDetails from "./components/ProjectSettingsSlackIntegrationDetails";

export default function ProjectSettingsIntegration() {
  const { projectId } = useParams();
  const { data, isLoading } = useSlackDetails(projectId);

  if (isLoading) {
    return (
      <Box textAlign="center">
        <CircularProgress size={25} />
      </Box>
    );
  }

  return data ? (
    <ProjectSettingsSlackIntegrationDetails data={data} />
  ) : (
    <ProjectSettingsSlackIntegrationAdd />
  );
}
