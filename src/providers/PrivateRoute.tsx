import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: any) => {
  const username = localStorage.getItem("username");
  if (!username) {
    return <Navigate to="/" />;
  }
  return children;
};
