import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginRoute = ({ children }) => {
  if (Cookies.get("token") === undefined) {
    return children;
  } else if (Cookies.get("token") !== undefined) {
    return <Navigate to={"/"} />;
  }
};

export default LoginRoute;
