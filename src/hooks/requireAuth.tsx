import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const RequireAuth = ({ children }: any) => {
  const username = useAuth();
  if (!username) {
    return <Navigate to="/" />;
  }
  return children;
}
