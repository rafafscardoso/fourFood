import React from 'react';
import { useHistory } from 'react-router-dom';

import { 
  RestCard, 
  RestCardMedia
} from './style';

const RestaurantCard = (props) => {

  const history = useHistory();

  const { id, name, shipping, logoUrl, deliveryTime } = props.restaurant;
  
  return (
    <RestCard onClick={() => history.push(`/restaurant/${id}`)} >
      <RestCardMedia 
        image={logoUrl} 
        title='Restaurant Image'
        component='img'
      />
      <div>
        <p>{name}</p>
        <div>
          <span>{deliveryTime} min</span>
          <span>Frete R${shipping},00</span>
        </div>
      </div>
    </RestCard>
  )
}

export default RestaurantCard;