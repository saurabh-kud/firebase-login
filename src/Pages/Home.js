import React from "react";
import SignUpPages from "./SignUpPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPages />} />
        <Route path="/signup" element={<SignUpPages />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default Home;
