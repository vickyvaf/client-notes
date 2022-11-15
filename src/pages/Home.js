import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../components/Navbar"
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SkeletonLoader } from "../components/utils/Loader";

const Home = () => {
  const [datas, setDatas] = useState(null)
  const [detail, setDetail] = useState([])
  const [detailId, setDetailId] = useState(92)
  const [fetchStatus, setFetchStatus] = useState(true)

  const notify = () => toast.success(`Delete successully 😲`);

  const fetchData = async () => {
    const result = await axios.get('http://localhost:9000/api/v1/cms/notes')
    setDatas(result.data.data)
  }

  const fetchOneData = async () => {
    const result = await axios.get(`http://localhost:9000/api/v1/cms/notes/${detailId}`)
    setDetail(result.data.data)
  }

  const handleDetail = (e) => {
    let id = parseInt(e.target.value)

    console.log("id: ", id)
    setDetailId(id)
  }

  const handleDelete = (e) => {
    let id = parseInt(e.target.value)

    axios.delete(`http://localhost:9000/api/v1/cms/notes/${id}`)
      .then(() => {
        setFetchStatus(true)
        notify()
      })
  }

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }

  useEffect(() => {
    fetchOneData()
  }, [fetchOneData, setDetailId])

  useEffect(() => {
    fetchData()
  }, [fetchData, fetchStatus, setFetchStatus,])

  return (
    <div>
      <Navbar />
      <div className="w-full flex">
        <div className='pt-24 pb-10 w-[400px] px-5 flex flex-col max-h-screen overflow-y-auto'>

          {datas === null ? (
            <div className="flex flex-col gap-y-2 w-full">
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
            </div>
          ) : (
            datas.map((data, i) => {
              return (
                <>
                  <div key={i} className='bg-slate-100 w-full my-1 rounded-lg py-3 px-5'>
                    <h1 className="font-semibold text-base">{data.title}</h1>
                    <p className="font-normal text-sm">{truncateString(data.notes, 50)}</p>
                    <div className="flex items-center  mt-3 flex-row-reverse">
                      {/* <button
                        value={data.id}
                        onClick={handleDelete}
                        className='hover:bg-slate-200 transition-all duration-200 flex items-center gap-x-1 py-1 px-2 rounded-md text-sm text-red-500'
                      >
                        Delete
                        <AiFillDelete className="text-red-500" />
                      </button> */}
                      <button
                        value={data.id}
                        onClick={handleDetail}
                        className='hover:bg-slate-200 transition-all duration-200  flex items-center gap-x-1 py-1 px-2 rounded-lg text-sm text-teal-500'
                      >
                        Detail
                        <AiFillEye className="text-teal-500" />
                      </button>
                    </div>
                  </div>
                </>
              )
            })
          )}
        </div>

        <div className="pt-20 pb-10 w-full h-screen bg-slate-100 px-5 overflow-y-scroll">
          <h1 className="py-5 font-semibold text-2xl">{detail.title}</h1>
          <p className="text-base">{detail.notes}</p>
        </div>
      </div>
    </div>
  )
}

export default Home