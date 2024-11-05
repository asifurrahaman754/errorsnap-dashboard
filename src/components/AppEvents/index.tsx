import { useEffect } from "react";
import Cookies from "js-cookie";
import useAuthUser from "hooks/useAuthUser";

const savedUserToken = Cookies.get("token");

export default function AppEvents() {
  const { user } = useAuthUser();

  useEffect(() => {
    if (savedUserToken && !user) {
    }
  }, [savedUserToken]);
  return null;
}
