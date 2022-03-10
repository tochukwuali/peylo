import { useScrollHeight } from "../hooks/useScrollHeight";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { reset, logout } from "../features/auth/authSlice";

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  const scroll = useScrollHeight()

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <div
      className={`${
        scroll
          ? "bg-gray-800 fixed top-0 w-full z-30 text-gray-50"
          : "bg-gray-50 text-gray-800"
      } flex justify-between items-center px-24 h-20`}
    >
      <div className="relative">
        <a href="/" className="font-bold text-3xl">
          Peylo
        </a>
      </div>
      <div className="flex space-x-4">
        <p className="font-bold text-xl">Toggle</p>
        {user && <p className="font-bold text-xl cursor-pointer" onClick={handleLogout}>Logout</p>}
      </div>
    </div>
  );
};

export default Header;
