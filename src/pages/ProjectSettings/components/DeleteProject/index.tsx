import { Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useConfirmDialog from "hooks/useConfirmDialog";
import { key } from "hooks/useProjects";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiClient } from "utils/axios";
import { cssColor } from "utils/colors";

export default function DeleteProject() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (projectId: string) => {
      return await apiClient.post(`/delete-project/${projectId}`);
    },
  });

  const handleAfterDelete = () => {
    queryClient.removeQueries({ queryKey: [key] });
    navigate("/projects");
  };

  const { component, handleDelete: handleCancel } = useConfirmDialog(
    mutateAsync,
    {
      onAfterDelete: handleAfterDelete,
      description:
        "Are you sure you want to remove this project? All the team members and the errors will be gone after deleting the project.",
      title: "Remove Project",
      successMessage: "Project deleted successfully",
    }
  );

  return (
    <>
      {component}
      <Button
        onClick={() => handleCancel(projectId)}
        sx={{
          backgroundColor: cssColor("red"),
          color: "white",

          "&:hover": {
            backgroundColor: cssColor("red"),
          },
        }}
        variant="contained"
        fullWidth
      >
        Delete project
      </Button>
    </>
  );
}
