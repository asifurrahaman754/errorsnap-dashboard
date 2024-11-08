import React, { useEffect, ReactNode } from "react";
import useAuthUser from "hooks/useAuthUser";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children = null }: { children: ReactNode }) => {
  const { user, isInitialized } = useAuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && isInitialized) {
      navigate("/login");
    }
  }, [user, navigate, isInitialized]);

  return user && isInitialized ? <>{children}</> : null;
};

export default AuthGuard;
