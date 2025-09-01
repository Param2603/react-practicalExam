import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/feature/authSlice";
import { Link } from "react-router";

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow-md">
      <Link className="text-xl font-bold" to="/">
         Student
      </Link>
      <div className="flex space-x-3">
        <Link to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Students
        </Link>
        <Link to="/add"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg" >
          Add Student
        </Link>
        {auth ? (
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            onClick={() => dispatch(logout())}>
            Logout
          </button>
        ) : (
          <Link to="/login"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
