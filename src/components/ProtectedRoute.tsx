import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  hasAccess: boolean | undefined;
}

const ProtectedRoute: FC<Props> = ({ hasAccess }) => {
  if (hasAccess) return <Outlet />;

  return <Navigate to="/" />;
};

export default ProtectedRoute;
