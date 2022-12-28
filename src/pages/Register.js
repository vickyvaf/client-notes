import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const notifySuccess = () => toast.success("Register Berhasil");
  const notifyError = () => toast.error("Register Gagal");

  const registerSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_REGISTER, {
        name,
        username,
        email,
        password,
        confirmPassword,
      })
      .then(() => {
        notifySuccess();
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch(() => {
        notifyError();
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={registerSubmit}
        className="flex flex-col gap-y-5 text-center w-96 border-2 border-slate-200 rounded-lg overflow-hidden py-8 px-5 shadow-lg"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          className="border-none outline-none py-2 px-4 bg-slate-50 focus:bg-slate-200"
          required
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          className="border-none outline-none py-2 px-4 bg-slate-50 focus:bg-slate-200"
          required
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="border-none outline-none py-2 px-4 bg-slate-50 focus:bg-slate-200"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="border-none outline-none py-2 px-4 bg-slate-50 focus:bg-slate-200"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="confirm password"
          className="border-none outline-none py-2 px-4 bg-slate-50 focus:bg-slate-200"
        />
        <button
          type="submit"
          className="bg-slate-600 text-white rounded-sm py-2 px-4"
        >
          Register
        </button>
        <p className="text-left text-sm text-slate-600">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Masuk
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
