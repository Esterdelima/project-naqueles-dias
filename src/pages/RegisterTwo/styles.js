// styles.js

import styled from 'styled-components';
import { Paper, TextField, Button } from '@mui/material';
import backgroundImg from "../../assents/image/backgroungRegister.svg";

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
  padding: 20px;
  width: 868px;
  height: 688px;
  background-color: #D9D9D9;
  margin-top: -20px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Poppins';
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
  color: #32264D;
`;

export const SubTitle = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 300;
  margin-top: -20px;
  color: #32264D;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
  gap: 25px; 
  margin-bottom: 40px;
  margin-top: 40px;
  margin-left: 30px;
  align-items: flex-end; 
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 352px;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const CalendarWrapper = styled.div`
  width: calc(50% - 10px);
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 352px;
`;

