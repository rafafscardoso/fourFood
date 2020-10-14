import styled from 'styled-components';
import {
} from '@material-ui/core';

export const ProfilePageContainer = styled.div`
  grid-row: 2 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const ProfileContainer = styled.div`
  padding: .5em 0;
`
export const AddressContainer = styled.div`
  background-color: #eee;
  padding: .5em 0;
`
export const OrdersContainer = styled.div`
  padding: 1em;
  > p {
    margin: 0;
  }
  > p:first-of-type {
    padding-bottom: .5em;
    border-bottom: 1px solid black;
  }
  > p:last-of-type {
    padding-top: 1.75em;
    text-align: center;
  }
`