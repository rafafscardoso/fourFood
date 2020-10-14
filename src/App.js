import React, { useState } from 'react';

import Router from './Router';
import { MyTheme } from './themes';
import { CartContext, FullAddressContext, ProfileContext, RestaurantsContext } from './contexts';

import { MuiThemeProvider } from "@material-ui/core";

const App = () => {

  const [cart, setCart] = useState(undefined);
  const [inputModal, setInputModal] = useState('');
  const [fullAddress, setFullAddress] = useState(undefined);
  const [profile, setProfile] = useState(undefined);
  const [restaurantList, setRestaurantList] = useState(undefined);
  
  const cartValue = { cart, setCart, inputModal, setInputModal };

  return (
    <CartContext.Provider value={cartValue} >
      <FullAddressContext.Provider value={{ fullAddress, setFullAddress }} >
        <ProfileContext.Provider value={{ profile, setProfile }} >
          <RestaurantsContext.Provider value={{ restaurantList, setRestaurantList }} >
            <MuiThemeProvider theme={MyTheme} >
              <Router />
            </MuiThemeProvider>
          </RestaurantsContext.Provider>
        </ProfileContext.Provider>
      </FullAddressContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
