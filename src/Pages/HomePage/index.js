import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RestaurantList from '../../components/RestaurantList';
import FullPageLoading from "../../components/FullPageLoading";

import { usePrivatePage } from "../../hooks";
import { RestaurantsContext } from '../../contexts';
import { getRestaurants } from '../../requests';
import { SearchOutIcon } from '../../icons';
import {
  PageContainer,
  FormFormControl,
  FormTextField,
  FormInputAdornment
} from '../../styles';

import {
  HomePageContainer,
  SearchContainer,
  HomeTab,
  HomeTabs,
  HomeAppBar
} from "./style";

const HomePage = () => {

  usePrivatePage();

  const history = useHistory();

  const { restaurantList, setRestaurantList } = useContext(RestaurantsContext);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getRests();
  }, [setRestaurantList]);

  const getRests = async () => {
    try {
      const response = await getRestaurants();
      setRestaurantList(response.restaurants);
    } catch (error) {
      console.error(error.response);
    }
  }

  const handleChange = (event, newCategory) => {
    if (newCategory !== category) {
      setCategory(newCategory);
    } else {
      setCategory(null);
    }
  };

  let categorizedList = restaurantList;

  switch (category) {
    case null:
      categorizedList = restaurantList;
      break;
    case "Hamburguer":
    case 'Asiática':
    case 'Sorvetes':
    case 'Baiana':
    case 'Petiscos':
    case 'Mexicana':
    case 'Carnes':
    case 'Italiana':
    case 'Árabe':
      categorizedList = restaurantList.filter(restaurant => (restaurant.category === category));
  }

  return (
    <PageContainer>
      <Header />
      <HomePageContainer>
        <SearchContainer>
          <FormFormControl>
            <FormTextField 
              placeholder='Restaurante' 
              onClick={() => history.push('/search')} 
              variant='outlined' 
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
        <HomeAppBar position="static" color="default">
          <HomeTabs
            value={category}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="off"
          >
            <HomeTab key={0} value="Hamburguer" label="Hamburguer" />
            <HomeTab key={1} value='Asiática' label="Asiática" />
            <HomeTab key={2} value='Italiana' label="Italiana" />
            <HomeTab key={3} value='Sorvetes' label="Sorvetes" />
            <HomeTab key={4} value='Carnes' label="Carnes" />
            <HomeTab key={5} value='Baiana' label="Baiana" />
            <HomeTab key={6} value='Petiscos' label="Petiscos" />
            <HomeTab key={7} value='Mexicana' label="Mexicana" />
          </HomeTabs>
        </HomeAppBar>
        {restaurantList ? (
          <RestaurantList restaurantList={categorizedList} />
        ) : (
          <><FullPageLoading/></>
        )}
      </HomePageContainer>
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
