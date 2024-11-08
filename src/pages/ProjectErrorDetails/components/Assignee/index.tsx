import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { key } from "hooks/useError";
import useProjectTeamList from "hooks/useProjectTeamList";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { teamMember } from "types/team";
import { apiClient } from "utils/axios";

type postAssignMember = {
  userId: number;
  errorId: string;
};

export default function Assignee({ assignee }: { assignee: number }) {
  const [selectedAssignee, setSelectedAssignee] = useState(assignee);
  const queryClient = useQueryClient();
  const { errorId } = useParams();
  const [open, setOpen] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: async (projectData: postAssignMember) => {
      return await apiClient.post("/assign-error", projectData);
    },
  });
  const { isLoading, data } = useProjectTeamList(true, {
    refetchOnWindowFocus: false,
  });

  const assigneeUser = data?.find((team) => team.user_id === selectedAssignee);

  const handleChangeAssignee = (_event, selectedItem: teamMember) => {
    const data = {
      userId: selectedItem?.user_id,
      errorId: errorId,
    };

    mutate(data, {
      onSuccess: () => {
        toast.success("Assigned user successfully");
        queryClient.invalidateQueries({ queryKey: [key] });
        setSelectedAssignee(selectedItem?.user_id);
      },
      onError: () => {
        toast.error("Error assigning member!");
      },
    });
  };

  return (
    <Autocomplete
      open={open}
      disabled={isPending}
      value={assigneeUser || null}
      onChange={handleChangeAssignee}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) =>
        option?.user_id === value?.user_id
      }
      getOptionLabel={(option) => option?.username}
      options={data || []}
      loading={isLoading || isPending}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          label="Assign to"
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isLoading || isPending ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            },
          }}
        />
      )}
    />
  );
}
