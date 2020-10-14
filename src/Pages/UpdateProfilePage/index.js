import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { usePrivatePage, useForm } from "../../hooks";
import { ProfileContext } from '../../contexts';
import { updateProfile } from "../../requests";
import {
  PageContainer,
  FormFormControl,
  FormTextField,
  FormButton
} from "../../styles";

import {
  UpdateProfilePageContainer,
} from "./style";

const UpdateProfilePage = () => {

  usePrivatePage();

  const history = useHistory();

  const { profile } = useContext(ProfileContext);

  const { form, onChange } = useForm(profile);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const { name, email, cpf } = form;

  const submitUpdateProfile = async (event) => {
    event.preventDefault();
    const body = form;
    try {
      await updateProfile(body);
      history.push('/profile');
    } catch (error) {
      console.error(error.response);
    }
  }

  return (
    <PageContainer>
      <Header />
      <UpdateProfilePageContainer>
        <FormFormControl onSubmit={submitUpdateProfile} >
          <FormTextField
            value={name}
            type="text"
            name="name"
            required
            label="Nome"
            variant="outlined"
            placeholder="Nome Sobrenome"
            onChange={handleInputChange}
          />
        </FormFormControl>
        <FormFormControl>
          <FormTextField
            value={email}
            name="email"
            required
            label="E-mail"
            type="text"
            variant="outlined"
            placeholder="email@email.com"
            onChange={handleInputChange}
          />
        </FormFormControl>
        <FormFormControl>
          <FormTextField
            value={cpf}
            name="cpf"
            required
            label="CPF"
            type="text"
            variant="outlined"
            placeholder="000.000.000-00"
            onChange={handleInputChange}
          />
        </FormFormControl>
        <FormButton 
          type='submit' 
          variant="contained" 
          color="primary"
        >
          Salvar
        </FormButton>
      </UpdateProfilePageContainer>
      <Footer />
    </PageContainer>
  );
};

export default UpdateProfilePage;
