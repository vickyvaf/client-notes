import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  if (Cookies.get("token") !== undefined) {
    return children;
  } else if (Cookies.get("token") === undefined) {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRoute;
