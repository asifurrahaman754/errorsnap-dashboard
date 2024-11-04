import { TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CustomDialog } from "components/CustomDialog";
import useHookForm from "hooks/useHookForm";
import { key } from "hooks/useProjectTeamList";
import EmailIcon from "icons/EmailIcon";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { zeroArgsFunction } from "types/function";
import { apiClient } from "utils/axios";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export default function ProjectSettingsTeamAdd({
  onClose,
}: {
  onClose: zeroArgsFunction;
}) {
  const queryClient = useQueryClient();
  const { projectId } = useParams();
  const { mutate, isPending } = useMutation({
    mutationFn: async (projectData: z.infer<typeof schema>) => {
      return await apiClient.post("/invite-member", {
        email: projectData.email,
        projectId,
      });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useHookForm({
    schema,
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: () => {
          toast.success("Invitation sent successfully");
          queryClient.invalidateQueries({ queryKey: [key] });
          onClose();
        },
        onError: (error) => {
          console.error("Error adding project:", error);
          toast.error("Error sending invitation!");
        },
      });
    },
  });

  return (
    <CustomDialog
      submitText="Send Invitation"
      startIcon={<EmailIcon />}
      title="Invite Team Member"
      onClose={onClose}
      open={true}
      maxWidth="xs"
      onSubmit={handleSubmit}
      disabled={isPending}
    >
      <TextField
        fullWidth
        label="Email Address"
        placeholder="colleague@company.com"
        type="email"
        error={!!errors?.email}
        helperText={errors?.email?.message}
        {...register("email")}
      />
    </CustomDialog>
  );
}
