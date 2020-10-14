import React from 'react';
import { useHistory } from 'react-router-dom';

import futureFoodLogo from '../../img/logo-future-eats-invert.png';
import { useForm } from '../../hooks';
import { login } from '../../requests';
import {
  PageContainer,
  FormFormControl,
  FormTextField,
  FormButton
} from '../../styles';

import { LoginPageContainer, FormContainer } from './style';

const LoginPage = () => {

  const history = useHistory();

  const { form, onChange, resetForm } = useForm({
    email: '',
    password: ''
  });

  const { email, password } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const submitLogin = async (event) => {
    event.preventDefault();
    const body = form;
    try {
      const response = await login(body);
      window.localStorage.setItem('token', response.token);
      response.user.hasAddress ? history.push('/home') : history.push('/addaddress');
      resetForm();
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <PageContainer>
      <></>
      <LoginPageContainer>
        <div>
          <img src={futureFoodLogo} alt='future-food-logo'/>
        </div>
        <p>Entrar</p>
        <FormContainer onSubmit={submitLogin} >
          <FormFormControl>
            <FormTextField
              value={email}
              type='email'
              name='email'
              required
              label="E-mail"
              variant="outlined"
              placeholder="email@email.com"
              onChange={handleInputChange}
            />
          </FormFormControl>
          <FormFormControl>
            <FormTextField
              value={password}
              name='password'
              required
              label="Senha"
              type="password"
              variant="outlined"
              placeholder="Mínimo 6 caracteres"
              inputProps={{ minLength: 6 }}
              inputProps={{ maxLength: 20 }}
              onChange={handleInputChange}
            />
          </FormFormControl>
          <FormButton
            type='submit'
            variant="contained"
            color="primary"  
          >
            Entrar
          </FormButton>
        </FormContainer>
        <p>Não possui cadastro? <span onClick={() => history.push('/signup')}>Clique aqui.</span></p>
      </LoginPageContainer>
      <></>
    </PageContainer>
  )
}

export default LoginPage;