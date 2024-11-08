import { useQuery } from "@tanstack/react-query";
import { apiClient } from "utils/axios";
import { useDispatch } from "react-redux";
import { setUser, setUserLoading } from "store/features/auth";
import Cookies from "js-cookie";

const prevToken = Cookies.get("token");

export default function AppEvents() {
  const dispatch = useDispatch();
  useQuery({
    queryKey: ["logged-in-user"],
    queryFn: async () => {
      dispatch(setUserLoading());

      try {
        const response = await apiClient.get(`/auth/get-loggedIn-user`);
        dispatch(setUser(response.data?.data));
      } catch (_error) {
        dispatch(setUser(null));
      }
    },
    refetchOnWindowFocus: false,
    enabled: !!prevToken,
  });

  return null;
}
