import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/v1/auth/login", {
        email,
        password,
      })
      .then((res) => {
        const token = res.data.data.token
        Cookies.set("token", token)
        navigate("/")
      });
  };

  return (
    <div>
      <div>Login</div>
      <form onSubmit={loginSubmit} className="flex flex-col text-center">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
