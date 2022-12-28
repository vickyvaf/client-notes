import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notifySuccess = () => toast.success("Login Berhasil");
  const notifyError = () => toast.error("Login Gagal");

  const loginSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_LOGIN, {
        email,
        password,
      })
      .then((res) => {
        const token = res.data.data.token;
        Cookies.set("token", token);
        notifySuccess();
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch(() => {
        notifyError();
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={loginSubmit}
        className="flex flex-col gap-y-5 text-center w-96 border-2 border-slate-200 rounded-lg overflow-hidden py-8 px-5 shadow-lg"
      >
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="border-none outline-none py-2 px-4 bg-slate-50 focus:bg-slate-200"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="border-none outline-none py-2 px-4 bg-slate-50 focus:bg-slate-200"
        />
        <button
          type="submit"
          className="bg-slate-600 text-white rounded-sm py-2 px-4"
        >
          LOGIN
        </button>
        <p className="text-left text-sm text-slate-600">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-600 underline">
            Daftar
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
