import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { teamMember } from "types/team";
import { apiClient } from "utils/axios";

export const key = "team-members";

const useProjectTeamList = (initialized = true) => {
  const { projectId } = useParams();

  const data = useQuery({
    queryKey: [key, projectId],
    queryFn: async (): Promise<teamMember[]> => {
      const response = await apiClient.get(`/team-members/${projectId}`);
      return response.data?.data;
    },
    enabled: initialized,
  });

  return data;
};

export default useProjectTeamList;
