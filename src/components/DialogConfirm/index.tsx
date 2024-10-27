import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from "@mui/material";
import { ReactNode } from "react";
import { zeroArgsFunction } from "types/function";

export interface DialogConfirmProps extends Omit<DialogProps, "title"> {
  open: boolean;
  disabled?: boolean;
  submitting?: boolean;
  onClose: zeroArgsFunction;
  onSubmit?: zeroArgsFunction;
  children: ReactNode;
  title?: ReactNode;
}

export default function DialogConfirm({
  open,
  onClose,
  children,
  disabled = false,
  submitting = false,
  onSubmit,
  title,
  ...props
}: DialogConfirmProps) {
  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth="xs" {...props}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ pt: "8px !important" }}>{children}</DialogContent>
      <DialogActions>
        <Button disabled={disabled} onClick={onClose} color={"secondary"}>
          Cancel
        </Button>
        <Button
          disabled={disabled}
          onClick={onSubmit}
          color={"secondary"}
          endIcon={
            submitting ? <CircularProgress size={18} color="primary" /> : null
          }
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
