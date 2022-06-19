import React from "react";
import { Navigate } from "react-router-dom";

interface IPrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
