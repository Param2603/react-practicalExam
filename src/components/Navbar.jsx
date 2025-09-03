import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { clearUser } from "../redux/feature/authSlice";
import { auth } from "../config/firebase";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    dispatch(clearUser());
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
    
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Student Project
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-1 rounded-lg transition duration-200 " >
            Student Details
          </Link>

          {user && (
            <Link to="/add" className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-1 rounded-lg transition duration-200">
              Add Student
            </Link>
          )}

          {user ? (
            <div className="flex items-center space-x-3">
              <img src="https://www.transparentpng.com/thumb/user/blak-frame-user-profile-png-icon--cupR3D.png" alt="" className="w-8 h-8 rounded-full border-2 bg-white"></img>
              
              <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded-lg transition duration-200 cursor-pointer">
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login" className=" cursor-pointer bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-lg transition duration-200" >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
