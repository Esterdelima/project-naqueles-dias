import styled from 'styled-components';
import { Paper, Checkbox, TextField, Button } from '@mui/material'; // Importe os componentes necessários do Material UI
import backgroundImg from "../../assents/image/backgroungLogin.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundImg}); 
  background-size: cover;
  background-position: center;
`;

export const FormWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 416px;
  height: 539px;
  background-color: #D9D9D9;
 margin-top: -20px; 
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 352px;
  margin-top: 60px; 
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Poppins';
  font-size: 36px;
  font-weight: 600;
  margin-top: -20px; 
  margin-bottom: 20px;
`;

export const ForgotPasswordButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #6A6180;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

export const CreateAccountButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #6A6180;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  text-decoration: underline; 
`;


export const RememberMeLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #6A6180;
`;

export const StyledCheckbox = styled(Checkbox)`
  color: #6A6180 !important;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  max-width: 352px;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  max-width: 352px;
  
`;
