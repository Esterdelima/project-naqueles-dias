import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link para navegação
import backgroundImg from "../../assents/image/cadastroSucesso.svg"; // Importe a imagem de plano de fundo

const BackgroundScreen = () => {
  const redirectToLogin = () => {
    window.location.href = '/login'; // Redireciona para a rota /login
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`, // Use a imagem de plano de fundo importada
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif', // Altere a fonte conforme necessário
        color: '#ffffff', // Cor do texto
        cursor: 'pointer', // Mude o cursor para indicar que é clicável
      }}
      onClick={redirectToLogin} // Adiciona o evento onClick para redirecionamento
    >

    </div>
  );
};

export default BackgroundScreen;
