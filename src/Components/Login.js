import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const userPass = useRef();
  const userEmail = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userEmail.current.value);
    console.log(userPass.current.value);
    if (userEmail.current.value && userPass.current.value) {
    } else {
      alert("all field mandotory");
    }
  };

  return (
    <div className="container rounded-md  border border-slate-400 mx-auto mt-5   lg:w-1/2 w-full ">
      <h1 className="text-3xl mt-3 font-semibold p-4 text-orange-400 ">
        Login
      </h1>
      <form className="m-4 container mx-auto lg:w-1/2">
        <h2 className="text-left text-2xl my-2">Email</h2>
        <input
          className="border border-black block w-full rounded-sm h-10 px-2 outline-0 placeholder-indigo-600"
          placeholder="Enter your Email"
          type="email"
          ref={userEmail}
        ></input>
        <h2 className="text-left text-2xl my-2">Password</h2>
        <input
          className="border border-black block w-full rounded-sm h-10 px-2 outline-0 placeholder-indigo-600"
          placeholder="Enter your Password"
          type="password"
          ref={userPass}
        ></input>

        <button
          onClick={handleSubmit}
          className=" mt-5 border border-black px-3 py-1 rounded-md text-2xl hover:bg-yellow-400 hover:scale-105"
        >
          Login
        </button>

        <span className="flex text-xl my-3 gap-2">
          <h1>New User ? </h1>
          <Link to="/signup">
            <span className="text-blue-500 font-bold text-xl hover:text-red-300">
              SignUp
            </span>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
