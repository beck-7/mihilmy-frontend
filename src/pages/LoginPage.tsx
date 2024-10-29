import { FC } from "react";
import { Navigate } from "react-router-dom";

interface LoginPageProps {
  isAuthenticated: boolean;
}

const LoginPage: FC<LoginPageProps> = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/upload" replace />;
  }

  return <div>LoginPage</div>;
};

export default LoginPage;
