import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const ProtectedRoute = ({ children }) => {
    if (Cookies.get("token") !== undefined) {
      return children;
    } else if (Cookies.get("token") === undefined) {
      return <Navigate to={"/login"} />;
    }
  };

  const LoginRoute = ({ children }) => {
    if (Cookies.get("token") === undefined) {
      return children;
    } else if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/"} />;
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

        {/* Protected Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <Add />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/login"
            element={
              <LoginRoute>
                <Login />
              </LoginRoute>
            }
          />

          <Route
            path="/register"
            element={
              <LoginRoute>
                <Register />
              </LoginRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
