import React from 'react';
import { useHistory } from 'react-router-dom';

import { EditOutIcon } from '../../../../icons';

import { AddressContainer, AddressIconButton } from './style';

const ShowAddress = (props) => {

  const history = useHistory();

  const { address } = props;

  return (
    <AddressContainer>
      <div>
        <p>Endereço cadastrado</p>
        <p>{address}</p>
      </div>
      <AddressIconButton onClick={() => history.push('/profile/updateaddress')} size='small' >
        <EditOutIcon color='secondary' />
      </AddressIconButton>
    </AddressContainer>
  )
}

export default ShowAddress;