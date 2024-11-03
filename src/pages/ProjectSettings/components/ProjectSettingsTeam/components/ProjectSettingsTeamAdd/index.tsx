import { TextField } from "@mui/material";
import { CustomDialog } from "components/CustomDialog";
import useHookForm from "hooks/useHookForm";
import EmailIcon from "icons/EmailIcon";
import { zeroArgsFunction } from "types/function";
import { z } from "zod";

export default function ProjectSettingsTeamAdd({
  onClose,
}: {
  onClose: zeroArgsFunction;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useHookForm({
    schema: z.object({
      email: z.string().email(),
    }),
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
