import React from "react";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { setUser } from "../redux/feature/authSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = {
        name: result.user.displayName,
        email: result.user.email,
        uid: result.user.uid,
      };
      dispatch(setUser(user));
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button onClick={handleGoogleLogin} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
