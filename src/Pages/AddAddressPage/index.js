import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import { useForm } from '../../hooks';
import { addAddress } from '../../requests';
import {
  PageContainer,
  FormFormControl,
  FormTextField,
  FormButton
} from '../../styles';

import {
  AddAddressPageContainer,
  FormContainer
} from './style';

const AddAddressPage = () => {

  const { form, onChange } = useForm({
    street: '',
    number: '',
    complement:'',
    neighbourhood: '',
    city: '',
    state: ''
  });

  const { street, number, complement, neighbourhood, city, state } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  const history = useHistory();

  const submitAddAddress = async (event) => {
    event.preventDefault();
    const body = form;
    try {
      const response = await addAddress(body);
      window.localStorage.setItem('token', response.token);
      history.push('/home');
    } catch (error) {
      console.error(error.response);
    }
  }
  
  return (
    <PageContainer>
      <Header />
      <AddAddressPageContainer>
        <p>Meu endereço</p>
        <FormContainer onSubmit={submitAddAddress} >
          <FormFormControl>
            <FormTextField 
              name='street'
              value={street}
              label='Logradouro'
              placeholder='Rua / Av.'
              type='text'
              onChange={handleInputChange}
              variant='outlined'
              required
            />
          </FormFormControl>
          <FormFormControl>
            <FormTextField 
              name='number'
              value={number}
              label='Número'
              placeholder='Número'
              type='number'
              onChange={handleInputChange}
              variant='outlined'
              required
            />
          </FormFormControl>
          <FormFormControl>
            <FormTextField 
              name='complement'
              value={complement}
              label='Complemento'
              placeholder='Apto / Bloco'
              type='text'
              onChange={handleInputChange}
              variant='outlined'
            />
          </FormFormControl>
          <FormFormControl>
            <FormTextField 
              name='neighbourhood'
              value={neighbourhood}
              label='Bairro'
              placeholder='Bairro'
              type='text'
              onChange={handleInputChange}
              variant='outlined'
              required
            />
          </FormFormControl>
          <FormFormControl>
            <FormTextField 
              name='city'
              value={city}
              label='Cidade'
              placeholder='Cidade'
              type='text'
              onChange={handleInputChange}
              variant='outlined'
              required
            />
          </FormFormControl>
          <FormFormControl>
            <FormTextField 
              name='state'
              value={state}
              label='Estado'
              placeholder='Estado'
              type='text'
              onChange={handleInputChange}
              variant='outlined'
              required
            />
          </FormFormControl>
          <FormButton 
            type='submit' 
            variant='contained'
            color='primary' 
          >
            Salvar
          </FormButton>
        </FormContainer>
      </AddAddressPageContainer>
      <></>
    </PageContainer>
  )
}

export default AddAddressPage;