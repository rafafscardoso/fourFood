import React from 'react';

import { RestCard, RestCardMedia, RestCardContent } from './style';

const RestaurantCard = (props) => {

  const { name, category, logoUrl, deliveryTime, shipping, address } = props.restaurantDetail;

  return (
    <RestCard>
      <RestCardMedia
        image={logoUrl}
        title='Restaurant Image'
        component='img'
      />
      <RestCardContent>
        <p>{name}</p>
        <p>{category}</p>
        <span>
          <p>{deliveryTime} min</p>
          <p>{`Frete R$${shipping.toFixed(2)}`}</p>
        </span>
        <p>{address}</p>
      </RestCardContent>
    </RestCard>
  )
}

export default RestaurantCard;