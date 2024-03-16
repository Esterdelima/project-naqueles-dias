import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterTwo from "../pages/RegisterTwo";
import RegisterOk from "../components/RegisteOk"


const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Register/>} />
          <Route path="/cadastro2" element={<RegisterTwo/>} />
          <Route path="/feito" element={<RegisterOk/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRoutes;