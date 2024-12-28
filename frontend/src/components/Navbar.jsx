import {useNavigate} from 'react-router-dom'
import profile from '../assets/images/profile.svg'

const Navbar = () => {
    const navigate=useNavigate()
    const handleLogout=()=>{
        navigate('/login')

    }


  return (
    <>
      <div className="navbar bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-500 shadow-lg">
        <div className="flex-1">
          <a className="text-xl font-extrabold text-white hover:text-gray-800 transition duration-300">
            Note'App
          </a>
        </div>
        <div className="flex-none gap-4">
          <div className="form-control hidden sm:block">
            <input
              type="text"
              placeholder="Search notes..."
              className="input w-32 md:w-64 bg-white rounded-full border-2 border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
            />
          </div>

          {/* Dropdown Menu */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border-2 border-white">
                <img
                  alt="User Avatar"
                  src={profile}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-gray-700 rounded-box z-[1] mt-3 w-52 shadow-md"
            >
           
              <li>
                <a  onClick={handleLogout}
                className="hover:bg-gray-100">Logout</a>
              </li>
              <li>
                <a href="">
                  user Info
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sm:hidden mt-3 px-4">
        <input
          type="text"
          placeholder="Search notes..."
          className="input w-full bg-white rounded-full border-2 border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
        />
      </div>
    </>
  );
};

export default Navbar;
