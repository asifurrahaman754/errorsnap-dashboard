import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { cssColor } from "utils/colors";
import { apiClient } from "utils/axios";
import { Link, useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ListContainer from "components/ListContainer";
import { errorStatus } from "types/logs";
import { getTimeAgo } from "utils/time";
import { errorLog } from "types/errorLog";

export default function ErrorTable() {
  const location = useLocation();
  const { projectId } = useParams();

  const {
    data: errorLogs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects-errors"],
    queryFn: async (): Promise<errorLog[]> => {
      const response = await apiClient.get(`/error-logs/${projectId}`);
      return response.data?.data;
    },
  });

  return (
    <ListContainer
      loading={isLoading}
      error={error?.message}
      count={errorLogs?.length}
    >
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#22252B",
          mt: 3,
        }}
      >
        <Table sx={{ minWidth: 650, "& td, & th": { border: 0 } }}>
          <TableHead>
            <TableRow>
              <TableCell>Details</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>First seen</TableCell>
              <TableCell>Assigned</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {errorLogs?.map((error) => (
              <TableRow
                sx={{
                  "&:nth-of-type(odd)": {
                    backgroundColor: cssColor("background"),
                  },
                }}
                key={error?.id}
              >
                <TableCell component="th" scope="row">
                  <Link
                    to={`${location.pathname}/${error?.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography>{error?.message}</Typography>
                  </Link>
                </TableCell>
                <TableCell>{errorStatus[error?.status]}</TableCell>
                <TableCell>{getTimeAgo(error?.created_at)}</TableCell>
                <TableCell>{error?.assignee_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ListContainer>
  );
}
