import React from "react";
import SignUpPages from "./SignUpPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import { AuthContexProvider } from "../Contex/AuthContex";

import HomeCom from "../Components/HomeCom";
import ProtectedRoute from "../Components/ProtectedRoute";
import NotFound from "../Components/NotFound";

const Home = () => {
  return (
    <Router>
      <AuthContexProvider>
        <Routes>
          <Route path="/" element={<SignUpPages />} />
          <Route path="/signup" element={<SignUpPages />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomeCom />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>{" "}
      </AuthContexProvider>
    </Router>
  );
};

export default Home;
