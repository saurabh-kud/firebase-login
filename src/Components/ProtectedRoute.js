import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Contex/AuthContex";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useUserAuth();
  if (!user) {
    return navigate("/login");
  }
  return children;
};

export default ProtectedRoute;
