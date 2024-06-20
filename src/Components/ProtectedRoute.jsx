/* eslint-disable react/prop-types */
import useAuth from "../hooks/useAuth";
import { Outlet, Navigate, useLocation } from "react-router-dom";
const ProtectedRoute = ({ allowedList }) => {
  const { user } = useAuth();
  console.log(user);
  const location = useLocation();
  if (user && user.roles.find((item) => allowedList.includes(item))) {
    return <Outlet />;
  } else if (user) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
