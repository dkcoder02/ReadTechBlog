import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.setItem("is_login", false);
    authService.logout().then(() => {
      dispatch(logout());
      window.location.reload();
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-orange-500 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
