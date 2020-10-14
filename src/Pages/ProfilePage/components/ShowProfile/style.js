import styled from 'styled-components';
import {
  IconButton
} from '@material-ui/core';

export const ProfileContainer = styled.div`
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  div > p {
    margin: 0;
    padding: .5em 0;
  }
`
export const ProfileIconButton = styled(IconButton)`
  align-self: flex-start;
  width: 24px;
`