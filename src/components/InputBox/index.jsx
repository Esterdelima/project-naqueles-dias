import React from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 352px;
  margin-top: 60px;
  height: 72px;
  background-color: #E6E6F0;
  padding: 0 20px; /* Adicionei padding para evitar que o texto fique colado nas bordas */
`;

const InputBoxComponent = ({ children }) => {
  return (
    <InputBox>
      {children}
    </InputBox>
  );
};

export default InputBoxComponent;
