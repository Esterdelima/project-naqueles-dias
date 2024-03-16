import React, { useState } from 'react';
import { Container, FormWrapper, Title, SubTitle, GridWrapper, InputWrapper, StyledTextField, CalendarWrapper } from './styles';
import { IconButton, InputAdornment } from '@mui/material';
import { TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Continue } from '../../components/Buttons/Continue';
import calendarImage from '../../assents/image/calendar.svg'; 
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Cadastro</Title>
        <SubTitle>Preencha os dados abaixo para começar.</SubTitle>
        <GridWrapper>
          <InputWrapper>
            <TextField label="Nome" variant="outlined" fullWidth />
            <TextField label="Sobrenome" variant="outlined" fullWidth />
            <TextField label="Email" variant="outlined" fullWidth />
            <StyledTextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </InputWrapper>
          <CalendarWrapper>
            <img src={calendarImage} alt="Calendar" />
          </CalendarWrapper>
        </GridWrapper>
        <Link to="/cadastro2">
        <Continue />
        </Link>
        
      </FormWrapper>
    </Container>
  );
};

export default Register;

