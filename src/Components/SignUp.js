import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const userName = useRef();
  const userEmail = useRef();
  const userPass = useRef();
  const userConfirmPass = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName.current.value);
    if (!userName.current.value) alert("Please enter name");
    const res = await createUserWithEmailAndPassword(
      auth,
      userEmail.current.value,
      userPass.current.value
    );
    console.log(res);
  };

  // useEffect(() => {
  //   if (loading) return;
  //   if (user) navigate("/login");
  // }, [user, loading]);
  return (
    <div className="container rounded-md  overflow-hidden lg:mx-auto mt-7 lg:w-1/2 lg:border     ">
      <h1 className="text-3xl mt-4 font-semibold  text-orange-400 ">
        Register
      </h1>
      <div className="m-4 container p-2 lg:mx-auto lg:w-1/2 ">
        <h2 className="text-left text-2xl my-2">Name</h2>
        <input
          className="border font-bold border-black block md:w-full rounded-sm h-10 px-2 outline-0 placeholder-indigo-600 placeholder:font-semibold"
          placeholder="Enter your name"
          ref={userName}
        ></input>

        <h2 className="text-left text-2xl my-2">Email</h2>
        <input
          className="border border-black block  md:w-full rounded-sm h-10 px-2 outline-0 placeholder-indigo-600"
          placeholder="Enter your Email"
          ref={userEmail}
        ></input>
        <h2 className="text-left text-2xl my-2">Password</h2>
        <input
          className="border border-black block  md:w-full rounded-sm h-10 px-2 outline-0 placeholder-indigo-600"
          placeholder="Enter your Password"
          type="password"
          ref={userPass}
        ></input>
        <h2 className="text-left text-2xl my-2">Confirm Password</h2>
        <input
          className="border border-black block md:w-full rounded-sm h-10 px-2 outline-0 placeholder-indigo-600"
          placeholder="Enter your Password again"
          type="password"
          ref={userConfirmPass}
        ></input>
        <button
          onClick={handleSubmit}
          className=" mt-5 border border-black px-3 py-1 rounded-md text-2xl hover:bg-yellow-400 hover:scale-105"
        >
          Register
        </button>

        <span className="flex text-xl my-3 gap-2">
          <h1>Do you have Account? </h1>
          <Link to="/login">
            <span className="text-blue-500 font-bold text-xl hover:hover:text-yellow-400">
              login
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
