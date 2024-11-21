import { Box, Button, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import SlackIcon from "icons/SlackIcon";
import React from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { apiClient } from "utils/axios";
import { cssColor } from "utils/colors";

export default function ProjectSettingsSlackIntegrationAdd() {
  const { projectId } = useParams();

  const { mutate } = useMutation({
    mutationFn: async (projectId: string) => {
      const result = await apiClient.get(
        `/slack/oauth/start?projectId=${projectId}`
      );
      return result?.data;
    },
  });

  const connectToSlack = () => {
    mutate(projectId, {
      onSuccess: ({ data }) => {
        window.open(data, "_self", "noopener,noreferrer");
      },
      onError: () => {
        toast.error("Something went wrong!");
      },
    });
  };

  return (
    <Box
      sx={{
        height: "100px",
        borderRadius: 2,
        p: 2,
        display: "flex",
        alignItems: "center",
        gap: 1,
        justifyContent: "space-between",
        backgroundColor: cssColor("backgroundShade"),
      }}
    >
      <Box>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <SlackIcon />
          <Typography variant="h5">Slack</Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">
          connect your slack workspace to get your project error messages <br />{" "}
          directly in your slack workspace
        </Typography>
      </Box>
      <Button onClick={connectToSlack} variant="contained" color="white">
        Connect to slack
      </Button>
    </Box>
  );
}
