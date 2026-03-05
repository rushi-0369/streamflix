import React, { useEffect, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player.jsx";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    const isLoginPage = location.pathname.startsWith("/login");

    if (!user && !isLoginPage) {
      toast.info("You have been logged out", { toastId: "logout-toast" });
      navigate("/login");
    } else if (user && isLoginPage) {
      navigate("/");
    }
  
  });

  return () => unsubscribe();
}, [navigate, location]);


  return (
    <>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
};

export default App;
