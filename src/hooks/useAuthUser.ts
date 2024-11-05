import { useSelector } from "react-redux";
import { RootState } from "store/index";

const useAuthUser = () => {
  const user = useSelector((state: RootState) => state.authUser.user);

  return { user };
};

export default useAuthUser;
