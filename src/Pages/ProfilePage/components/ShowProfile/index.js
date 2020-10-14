import React from 'react';
import { useHistory } from 'react-router-dom';

import { EditOutIcon } from '../../../../icons';

import {
  ProfileContainer,
  ProfileIconButton
} from './style';

const ShowProfile = (props) => {

  const history = useHistory();

  const { name, email, cpf } = props.profile;

  return (
    <ProfileContainer>
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{cpf}</p>
      </div>
      <ProfileIconButton onClick={() => history.push('/profile/updateprofile')} size='small' >
        <EditOutIcon color='secondary' />
      </ProfileIconButton>
    </ProfileContainer>
  )
}

export default ShowProfile;