import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto w-1/2 mt-6">
      <h1 className="font-bold text-3xl mb-2">Sorry this page not found </h1>
      <Link to="/">
        <span className="text-blue-400 ">Go to Home</span>{" "}
      </Link>
    </div>
  );
};

export default NotFound;
