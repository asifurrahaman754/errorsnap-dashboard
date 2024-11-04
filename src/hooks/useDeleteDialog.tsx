import React, { useCallback, useState } from "react";
import { setFunction, zeroArgsFunction } from "types/function";
import DialogDelete from "components/DialogDelete";
import toast from "react-hot-toast";

export interface useDeleteDialogProps {
  title?: string;
  description?: string;
  successMessage?: string;
  isPending?: boolean;
  onAfterDelete?: zeroArgsFunction;
}

function useDeleteDialog<T1 = string | number>(
  onDelete: setFunction<T1>,
  {
    title,
    description,
    successMessage,
    isPending,
    onAfterDelete,
  }: useDeleteDialogProps
) {
  const [deleteId, setDeleteId] = useState<T1>(null);

  const handleDelete = useCallback((id: T1) => setDeleteId(id), []);

  const handleClose = useCallback(() => {
    setDeleteId(null);
  }, []);

  const handleConfirm = useCallback(async () => {
    if (!deleteId) {
      return;
    }

    try {
      await onDelete(deleteId);
      toast.success(successMessage || "Successfully deleted");

      if (onAfterDelete) {
        await onAfterDelete();
      }
    } catch (error) {
      toast.error(String(error));
    } finally {
      handleClose();
    }
  }, [onDelete, deleteId, handleClose, successMessage, onAfterDelete]);

  const component = (
    <DialogDelete
      open={!!deleteId}
      onSubmit={handleConfirm}
      onClose={handleClose}
      title={title}
      disabled={isPending}
    >
      {description}
    </DialogDelete>
  );

  return {
    component,
    handleDelete,
  };
}

export default useDeleteDialog;
