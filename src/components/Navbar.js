import Cookies from "js-cookie"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const logout = () => {
    Cookies.remove("token")
    navigate("/login")
  }

  return (
    <div className="navbar bg-base-100 absolute z-10 px-5 font-poppins py-3 shadow-md">
      <div className="hidden sm:flex w-full">
        <Link to={'/'} className="btn btn-ghost normal-case text-lg font-semibold hover:bg-teal-300">My Notes</Link>
      </div>
      <div className="flex-none gap-2 w-full sm:w-fit">
        <div className="form-control w-full">
          <input type="text" placeholder="Search" className="input input-bordered border-transparent bg-slate-100 focus:outline-none focus:border-teal-300 border-2" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li><Link to={'/'} className="hover:bg-teal-300 sm:hidden">Home</Link></li>
            <li><Link to={'/add'} className="hover:bg-teal-300">Add Notes</Link></li>
            <li><Link to={'/profile'} className="hover:bg-teal-300">Profile</Link></li>
            <li><button className=" hover:bg-teal-300" onClick={logout}>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar