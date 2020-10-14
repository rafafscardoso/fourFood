import React from 'react';

import { AddressContainer } from './style';

const ShowAddress = (props) => {

  return (
    <AddressContainer>
      <div>
        <p>Endereço de entrega</p>
        <p>{props.address}</p>
      </div>
    </AddressContainer>
  )
}

export default ShowAddress;