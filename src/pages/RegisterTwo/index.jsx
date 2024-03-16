import React, { useState } from 'react';
import { Container, FormWrapper, Title, SubTitle, GridWrapper, InputWrapper, StyledTextField, SelectWrapper } from './styles';
import { IconButton, InputAdornment, Typography } from '@mui/material';
import { TextField, Select, MenuItem } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Continue } from '../../components/Buttons/Continue';
import { Link } from 'react-router-dom';

const RegisterTwo = () => {
  const [sex, setSex] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  return (
    <Container>
      <FormWrapper>
        <Title>Cadastro</Title>
        <SubTitle>Preencha os dados abaixo para continuar.</SubTitle>
        <GridWrapper>
          <InputWrapper>
            <SelectWrapper>
              <Typography variant="subtitle2">Sexo</Typography>
              <Select
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                variant="outlined"
                fullWidth
                label="Sexo"
              >
                <MenuItem value={'male'}>Masculino</MenuItem>
                <MenuItem value={'female'}>Feminino</MenuItem>
                <MenuItem value={'other'}>Outro</MenuItem>
              </Select>
            </SelectWrapper>
            <SelectWrapper>
              <Typography variant="subtitle2">Gênero</Typography>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                variant="outlined"
                fullWidth
                label="Gênero"
              >
                <MenuItem value={'cisgender'}>Cisgênero</MenuItem>
                <MenuItem value={'transgender'}>Transgênero</MenuItem>
                <MenuItem value={'non-binary'}>Não binário</MenuItem>
                <MenuItem value={'other'}>Outro</MenuItem>
              </Select>
            </SelectWrapper>
            <SelectWrapper>
              <Typography variant="subtitle2">Endereço</Typography>
              <TextField label="Endereço" variant="outlined" fullWidth value={address} onChange={(e) => setAddress(e.target.value)} />
            </SelectWrapper>
            <Link to="/feito">
            <Continue />
            </Link>
            
          </InputWrapper>
        </GridWrapper>
        
      </FormWrapper>
    </Container>
  );
};

export default RegisterTwo;
