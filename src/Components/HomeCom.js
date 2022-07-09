import React from "react";
import { useUserAuth } from "../Contex/AuthContex";

const HomeCom = () => {
  const { user, LogOut } = useUserAuth();
  const handleLogout = () => {
    console.log("logouting user");
    LogOut();
  };
  return (
    <div className=" border border-black container mx-auto w-1/2 mt-10 py-10">
      <h1>Welcome </h1>
      {user.email}
      <br />
      <button
        onClick={handleLogout}
        className="bg-sky-400 font-bold px-2 py-1 hover:bg-sky-600 rounded-sm mt-3"
      >
        Logout
      </button>
    </div>
  );
};

export default HomeCom;
