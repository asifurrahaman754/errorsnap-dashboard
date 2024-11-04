import React from "react";
import { Box, IconButton, ListItem, ListItemText } from "@mui/material";
import { teamMember } from "types/team";
import DeleteIcon from "icons/DeleteIcon";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useDeleteDialog from "hooks/useDeleteDialog";
import { apiClient } from "utils/axios";
import { key } from "hooks/useProjectTeamList";

export default function ProjectSettingsTeamListRow({
  member,
}: {
  member: teamMember;
}) {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (memberId: number) => {
      return await apiClient.post(`/remove-member/${memberId}`);
    },
  });

  const { component, handleDelete } = useDeleteDialog(mutateAsync, {
    isPending,
    onAfterDelete: () => queryClient.invalidateQueries({ queryKey: [key] }),
  });

  return (
    <>
      {component}
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            sx={{ color: "error.main" }}
            onClick={() => handleDelete(member?.id)}
          >
            <DeleteIcon fontSize={18} />
          </IconButton>
        }
      >
        <ListItemText
          primary={
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {member.username}
              {/* <Chip
                        label={member.role}
                        size="small"
                        color={member.role === "owner" ? "primary" : "default"}
                      /> */}
            </Box>
          }
          secondary={member.email}
        />
      </ListItem>
    </>
  );
}
