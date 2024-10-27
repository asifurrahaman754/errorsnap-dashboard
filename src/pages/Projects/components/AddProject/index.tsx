import { Grid2 as Grid, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useHookForm from "hooks/useHookForm";
import DialogConfirm from "components/DialogConfirm";
import { zeroArgsFunction } from "types/function";
import toast from "react-hot-toast";
import { apiClient } from "utils/axios";

const schema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().optional(),
});

export default function AddProject({ onClose }: { onClose: zeroArgsFunction }) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (projectData: z.infer<typeof schema>) => {
      return await apiClient.post("/project", projectData);
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useHookForm({
    schema,
    defaultValues: {
      name: "",
      description: "",
    },
    onSubmit: async (data) => {
      mutate(data, {
        onSuccess: () => {
          toast.success("Project added successfully");
          queryClient.invalidateQueries({ queryKey: ["user-projects"] });
          onClose();
        },
        onError: (error) => {
          console.error("Error adding project:", error);
          toast.error("Error adding project!");
        },
      });
    },
  });

  return (
    <DialogConfirm
      onSubmit={handleSubmit}
      title="Add new project"
      open={true}
      disabled={isPending}
      submitting={isPending}
      onClose={onClose}
    >
      <Grid container rowSpacing={2}>
        <Grid size={12}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Project Name"
                placeholder="Enter project name"
                fullWidth
                error={!!errors?.name}
                helperText={errors?.name?.message}
              />
            )}
          />
        </Grid>
        <Grid size={12}>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Description"
                placeholder="Enter project description"
                fullWidth
                error={!!errors?.description}
                helperText={errors?.description?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </DialogConfirm>
  );
}
