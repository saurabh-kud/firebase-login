import React from "react";
import SignUpPages from "./SignUpPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import { AuthContexProvider } from "../Contex/AuthContex";
const Home = () => {
  return (
    <Router>
      <AuthContexProvider>
        <Routes>
          <Route path="/signup" element={<SignUpPages />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthContexProvider>
    </Router>
  );
};

export default Home;
