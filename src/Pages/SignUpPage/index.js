import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import futureFoodLogo from '../../img/logo-future-eats-invert.png';
import { useForm } from '../../hooks';
import { signUp } from '../../requests';
import { VisibilityIcon, VisibilityOffIcon } from '../../icons';
import {
  PageContainer,
  FormFormControl,
  FormTextField,
  FormButton,
  FormInputAdornment,
  FormIconButton
} from '../../styles';

import {
  SignUpPageContainer,
  FormContainer
} from './style';


const SignUpPage = () => {

  const history = useHistory();

  const { form, onChange } = useForm({
    name: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(true);

  const { name, email, cpf, password, confirmPassword } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  const submitSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setIsPasswordConfirmed(false);
      return;
    }
    const body = { name, email, cpf, password };
    try {
      const response = await signUp(body);
      window.localStorage.setItem('token', response.token);
      history.push('/addaddress');
    } catch (error) {
      console.error(error.response);
    }
  }
    
  return (
    <PageContainer>
      <Header />
      <SignUpPageContainer>
        <div>
          <img src={futureFoodLogo} alt='future-food-logo'/>
        </div>
        <p>Cadastrar</p>
        <FormContainer onSubmit={submitSignUp}>
          <FormFormControl>
            <FormTextField
              required
              label="Nome"
              placeholder="Nome e sobrenome"
              variant="outlined"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
           </FormFormControl>
           <FormFormControl>
            <FormTextField
              required
              label="E-mail"
              placeholder="email@email.com"
              variant="outlined"
              name="email"
              value={email}
              onChange={handleInputChange}
              inputProps={{ pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+[.]?[a-z]{2,}$", title:"Insira um e-mail válido" }}
            />
           </FormFormControl>
           <FormFormControl>
            <FormTextField
              required
              label="CPF"
              placeholder="000.000.000-00"
              variant="outlined"
              name="cpf"
              value={cpf}
              onChange={handleInputChange}
              inputProps={{ pattern:"[0-9]{3}[.]{1}?[0-9]{3}[.]{1}?[0-9]{3}[-]{1}?[0-9]{2}", title:"Insira um CPF válido" }}
            />
           </FormFormControl>
           <FormFormControl>
            <FormTextField
              required
              label='Senha'
              placeholder='Mínimo 6 caracteres'
              type={showPassword ? 'text' : 'password'}
              variant='outlined'
              name="password"
              value={password}
              onChange={handleInputChange}
              inputProps={{ minLength: 6, title: 'Mínimo 6 caracteres' }}
              InputProps={{
                endAdornment: (
                  <FormInputAdornment position="end" >
                    <FormIconButton onClick={() => setShowPassword(!showPassword)} >
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </FormIconButton>
                  </FormInputAdornment>
                )
              }}
            />
          </FormFormControl>
           <FormFormControl>
            <FormTextField
              required
              label='Confirmar'
              placeholder='Confirme a senha anterior'
              type={showConfirmPassword ? 'text' : 'password'}
              variant='outlined'
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
              error={!isPasswordConfirmed}
              helperText={isPasswordConfirmed ? null : 'Senha deve ser igual a informada acima'}
              inputProps={{ minLength: 6, title: 'Mínimo 6 caracteres' }}
              InputProps={{
                endAdornment: (
                  <FormInputAdornment position="end" >
                    <FormIconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} >
                      {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </FormIconButton>
                  </FormInputAdornment>
                )
              }}
            />
          </FormFormControl>
           <FormButton 
            type="submit" 
            variant="contained" 
            color="primary" 
          >
            Criar
          </FormButton>
        </FormContainer>
      </SignUpPageContainer>
      <></>
    </PageContainer>
  )
}

export default SignUpPage;