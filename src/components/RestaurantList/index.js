import React, { useState, useEffect } from "react";

import RestaurantCard from "../RestaurantCard";

import { RestaurantListContainer } from "./style";

const RestaurantList = (props) => {

  const [receivedList, setReceivedList] = useState(undefined);

  useEffect(() => {
    setReceivedList(props.restaurantList);
  }, [props.restaurantList]);

  return (
    <RestaurantListContainer>
      {receivedList ? (
        receivedList.map((restaurant) => (<RestaurantCard restaurant={restaurant} />))
      ) : (
        <p>Carregando...</p>
      )}
    </RestaurantListContainer>
  );
};

export default RestaurantList;