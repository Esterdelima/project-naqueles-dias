import React, { useState } from 'react';
import { FormControlLabel, TextField, Checkbox, IconButton, InputAdornment } from '@mui/material'; 
import { Container, FormWrapper, StyledForm, Title, ForgotPasswordButton, RememberMeLabel, StyledCheckbox, StyledTextField, CreateAccountButton } from './styles';
import { Register } from '../../components/Buttons/Register'; 
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Lógica de login aqui
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    // Lógica para "Esqueci minha senha" aqui
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Entrar</Title>
        <StyledForm>
          <StyledTextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '352px' }}>
            <FormControlLabel
              control={<StyledCheckbox checked={rememberMe} onChange={handleRememberMe} />}
              label={<RememberMeLabel>Lembrar-me</RememberMeLabel>}
            />
            <ForgotPasswordButton onClick={handleForgotPassword}>
              Esqueci minha senha
            </ForgotPasswordButton>
          </div>

          <Link to='/home'>
          <Register variant="contained" onClick={handleLogin}/> {/* Use o componente Register aqui */}
          </Link>
          
          <Link to="/cadastro">
            <CreateAccountButton>
              Criar conta
            </CreateAccountButton>
          </Link>
        </StyledForm>
      </FormWrapper>
    </Container>
  );
};

export default Login;
