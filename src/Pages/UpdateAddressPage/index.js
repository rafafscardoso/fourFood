import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useForm, usePrivatePage } from '../../hooks';
import { FullAddressContext } from '../../contexts';
import { addAddress } from '../../requests';
import {
  PageContainer,
  FormFormControl,
  FormTextField,
  FormButton
} from '../../styles';

import { 
  UpdateAddressPageContainer 
} from './style';


const UpdateAddressPage = () => {

  usePrivatePage();

  const history = useHistory();

  const { fullAddress } = useContext(FullAddressContext);
  
  const { form, onChange } = useForm(fullAddress);

  const { street, number, complement, neighbourhood, city, state } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  const submitUpdateAddress = async (event) => {
    event.preventDefault();
    const body = form;
    try {
      const response = await addAddress(body);
      window.localStorage.setItem('token', response.token);
      history.push('/profile');
    } catch (error) {
      console.error(error.response);
    }
  }

  return (
    <PageContainer>
      <Header />
      <UpdateAddressPageContainer onSubmit={submitUpdateAddress} >
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
            type='Estado'
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
      </UpdateAddressPageContainer>
      <Footer />
    </PageContainer>
  )
}

export default UpdateAddressPage;