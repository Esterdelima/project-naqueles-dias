import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterTwo from "../pages/RegisterTwo";
import RegisterOk from "../components/RegisteOk";
import Welcome from "../components/Welcome";
import Calendario from "../components/Calendario";
import CalendarioSelect from "../components/CalenderioSelect"
import Maps from "../components/Maps";
import MapsSelect from "../components/MapsSelect";
import Notifica from "../components/Notificar";
import Action from "../components/Action";
import Perfil from "../components/Perfil";


const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Register/>} />
          <Route path="/cadastro2" element={<RegisterTwo/>} />
          <Route path="/feito" element={<RegisterOk/>} />
          <Route path="/home" element={<Welcome/>} />
          <Route path="/calendario" element={<Calendario/>} />
          <Route path="/calendarioSelect" element={<CalendarioSelect/>} />
          <Route path="/maps" element={<Maps/>} />
          <Route path="/mapsSelect" element={<MapsSelect/>} />
          <Route path="/notifica" element={<Notifica/>} />
          <Route path="/action" element={<Action/>} />
          <Route path="/home" element={<Welcome/>} />
          <Route path="/perfil" element={<Perfil/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRoutes;