import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { SkeletonLoader } from "../components/utils/Loader";
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("userId")) ?? 8
  );
  const [datas, setDatas] = useState([]);
  const [detail, setDetail] = useState({});
  const [detailId, setDetailId] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(false);

  const notify = () => toast.success(`Delete successully 😲`);

  const fetchData = async () => {
    const result = await axios.get(`http://localhost:9000/api/v1/notes`, {
      headers: { Authorization: "Bearer " + Cookies.get("token") },
    });
    // console.log(result.data.data);
    setDatas(result.data.data);
  };

  const fetchOneData = () => {
    if (detailId) {
      axios
        .get(
          `http://localhost:9000/api/v1/cms/notesId/${detailId ? detailId : ""}`
        )
        .then((result) => {
          setDetail(result.data.notes);
        });
    }
  };

  const handleDetail = (e) => {
    let id = parseInt(e.target.value);

    setDetailId(id);
  };

  const handleDelete = (e) => {
    let id = parseInt(e.target.value);

    axios.delete(`http://localhost:9000/api/v1/cms/notes/${id}`).then(() => {
      setFetchStatus(!fetchStatus);
      notify();
    });
  };

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  // useEffect(() => {
  //   fetchOneData();
  // }, [detailId]);

  useEffect(() => {
    fetchData();
  }, [fetchStatus]);

  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex">
        <div className="mt-[77px] py-2 w-[400px] px-5 flex flex-col max-h-screen overflow-y-auto">
          {datas.map((data, i) => {
              return (
                <div
                  key={i}
                  className="bg-slate-100 w-full my-1 rounded-lg py-3 px-5"
                >
                  <h1 className="font-semibold text-base">{truncateString(data.title, 10)}</h1>
                  <p className="font-normal text-sm">
                    {truncateString(data.notes, 20)}
                  </p>
                  <div className="flex items-center  mt-3 flex-row-reverse">
                    <button
                      value={data.id}
                      onClick={handleDelete}
                      className="hover:bg-slate-200 transition-all duration-200 flex items-center gap-x-1 py-1 px-2 rounded-md text-sm text-red-500"
                    >
                      Delete
                      <AiFillDelete className="text-red-500" />
                    </button>
                    <button
                      value={data.id}
                      onClick={handleDetail}
                      className="hover:bg-slate-200 transition-all duration-200  flex items-center gap-x-1 py-1 px-2 rounded-lg text-sm text-teal-500"
                    >
                      Detail
                      <AiFillEye className="text-teal-500" />
                    </button>
                  </div>
                </div>
              );
            })
          }
        </div>

        <div className="mt-[77px] py-2 w-full max-h-screen bg-slate-100 px-5 overflow-y-scroll">
          <h1 className="pt-1 pb-5 font-semibold text-2xl">{detail.title}</h1>
          <p className="text-base">{detail.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
