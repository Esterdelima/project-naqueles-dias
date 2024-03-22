import React from 'react';
import { Link } from 'react-router-dom'; 
import backgroundImg from "../../assents/image/action.svg"; 

const BackgroundScreen = () => {
  const redirectToLogin = () => {
    window.location.href = '/perfil'; 
  };

  return (
    <body
      style={{
        backgroundImage: `url(${backgroundImg})`, 
        backgroundSize: '96.5% auto',
        backgroundPosition: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif', 
        color: '#ffffff', 
        cursor: 'pointer', 
        margin: 0, 
        padding: 0, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={redirectToLogin} 
    >
    </body>
  );
};

export default BackgroundScreen;
