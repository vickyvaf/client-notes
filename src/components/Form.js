import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export const Form = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    title: "",
    notes: "",
  });

  const notifySuccess = () => toast.success(`Tambah Berhasil`);
  const notifyError = () => toast.success(`Tambah Gagal`);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "title") {
      setInput({ ...input, title: value });
    } else if (name === "notes") {
      setInput({ ...input, notes: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, notes } = input;

    await axios
      .post(
        process.env.REACT_APP_NOTES,
        {
          title,
          notes,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      )
      .then(() => {
        notifySuccess();
        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch(() => {
        notifyError();
      })
      .finally(() =>
        setInput({
          title: "",
          notes: "",
        })
      );
  };

  return (
    <div className="w-full h-screen inline-flex justify-center items-center bg-teal-200 px-5 font-poppins">
      <ToastContainer />
      <form
        className="w-96 bg-white rounded-lg px-5 shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center my-7 font-semibold text-2xl uppercase">
          New Notes
        </h1>
        <div className="flex flex-col gap-y-5">
          <input
            value={input.title}
            onChange={handleInput}
            type="text"
            name="title"
            placeholder="Title"
            className="bg-slate-100 rounded-lg py-2 px-4 focus:outline-teal-400 font-normal text-sm"
          />
          <textarea
            value={input.notes}
            onChange={handleInput}
            rows={6}
            name="notes"
            placeholder="Notes"
            className="bg-slate-100 rounded-lg py-2 px-4 focus:outline-teal-400 font-normal text-sm"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-400 text-white rounded-full py-2 my-5"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};
