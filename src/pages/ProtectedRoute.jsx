import { Navigate } from "react-router-dom";
import { useUserSlice } from "../features/user/userSlice";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserSlice();
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
