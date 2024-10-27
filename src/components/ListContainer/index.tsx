import { Box, CircularProgress, Typography } from "@mui/material";
import { ReactNode } from "react";
import { cssColor } from "utils/colors";

interface ListContainerProps {
  error?: string;
  loading?: boolean;
  children: ReactNode;
}

export default function ListContainer({
  children,
  error,
  loading,
}: ListContainerProps) {
  if (loading) {
    return (
      <Box width="100%" textAlign="center" p={4}>
        <CircularProgress size={30} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box width="100%" textAlign="center" p={4}>
        <Typography color={cssColor("error")}>{error}</Typography>
      </Box>
    );
  }

  return <>{children}</>;
}
