import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Login from "./pages/Login";

const App = () => {
  const AuthRoute = ({ children }) => {
    if (Cookies.get("token") !== undefined) {
      return children;
    } else if (Cookies.get("token") === undefined) {
      return <Navigate to={"/login"} />;
    }
  };

  return (
    <div>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
          <Route path="/add" element={<Add />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
