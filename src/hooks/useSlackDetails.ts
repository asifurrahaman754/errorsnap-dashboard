import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { slackDetails } from "types/slack";
import { apiClient } from "utils/axios";

export const key = "slack-details";

const useSlackDetails = (
  projectId,
  initialized = true,
  options?: Partial<UseQueryOptions<slackDetails>>
) => {
  const data = useQuery({
    queryKey: [key, projectId],
    queryFn: async (): Promise<slackDetails> => {
      const response = await apiClient.get(`/slack/details/${projectId}`);
      return response.data?.data;
    },
    enabled: initialized,
    ...options,
  });

  return data;
};

export default useSlackDetails;