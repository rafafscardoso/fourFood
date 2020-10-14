import React, { useContext } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RestaurantList from '../../components/RestaurantList';

import { usePrivatePage, useForm } from "../../hooks";
import { RestaurantsContext } from '../../contexts';
import { SearchOutIcon } from '../../icons';
import {
  PageContainer,
  FormFormControl,
  FormTextField,
  FormInputAdornment
} from '../../styles';

import {
  SearchPageContainer,
  SearchContainer,
  EmptySearch,
} from "./style";

const SearchPage = () => {

  usePrivatePage();

  const { form, onChange } = useForm({
    search: ''
  });

  const { search } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const { restaurantList } = useContext(RestaurantsContext);

  let filteredList = undefined;

  if (search !== '') {
    filteredList = restaurantList.filter(restaurant => (restaurant.name.toLowerCase().includes(search.toLowerCase())));
  }

  return (
    <PageContainer>
      <Header />
      <SearchPageContainer>
        <SearchContainer>
          <FormFormControl>
            <FormTextField
              autoFocus
              value={search}
              name='search'
              onChange={handleInputChange}
              placeholder="Restaurante"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <FormInputAdornment position="start">
                    <SearchOutIcon />
                  </FormInputAdornment>
                )
              }}
            />
          </FormFormControl>
        </SearchContainer>
        {(filteredList && !filteredList.length) ? <EmptySearch>Não encontramos :(</EmptySearch> : <></>}
        {search === "" ? (
          <EmptySearch>Busque por nome de restaurante</EmptySearch>
        ) : (
          <RestaurantList restaurantList={filteredList} />
        )}
      </SearchPageContainer>
      <Footer />
    </PageContainer>
  );
};

export default SearchPage;
