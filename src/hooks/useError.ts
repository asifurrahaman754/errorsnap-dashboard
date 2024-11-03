import { useQuery } from "@tanstack/react-query";
import { errorLog } from "types/errorLog";
import { apiClient } from "utils/axios";

export const key = "single-error";

const useError = (id, initialized = true) => {
  const data = useQuery({
    queryKey: [key, id],
    queryFn: async (): Promise<errorLog> => {
      const response = await apiClient.get(`/errors/${id}`);
      return response.data?.data;
    },
    enabled: initialized,
  });

  return data;
};

export default useError;
