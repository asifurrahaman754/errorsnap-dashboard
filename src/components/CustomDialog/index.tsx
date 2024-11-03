import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  Button,
  DialogProps,
} from "@mui/material";
import CloseIcon from "icons/CloseIcon";
import { zeroArgsFunction } from "types/function";
import { cssColor } from "utils/colors";

interface CustomDialogProps extends Omit<DialogProps, "title"> {
  open: boolean;
  disabled?: boolean;
  title: string;
  submitText?: string;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  onClose: zeroArgsFunction;
  onSubmit?: zeroArgsFunction;
}

export const CustomDialog = ({
  open,
  onClose,
  disabled = false,
  submitText = "",
  title,
  startIcon,
  onSubmit,
  children,
  ...rest
}: CustomDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "12px",
          bgcolor: "background.paper",
        },
      }}
      {...rest}
    >
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" component="span">
            {title}
          </Typography>
          <IconButton onClick={onClose} size="small" edge="end">
            <CloseIcon color={cssColor("white")} fontSize={20} />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button
          disabled={disabled}
          onClick={onClose}
          variant="outlined"
          color="inherit"
        >
          Cancel
        </Button>
        <Button
          startIcon={startIcon || null}
          disabled={disabled}
          onClick={onSubmit}
          variant="contained"
        >
          {submitText || "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
