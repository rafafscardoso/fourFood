import styled from 'styled-components';
import {
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  grid-row: 1 / span 1;
  grid-column: 3 / span 1;
  height: 4rem;
  width: 100%;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  @media screen and (max-width: 420px) {
    width: 100vw;
  }
  @media screen and (min-width: 420px) {
    width: 420px;
  }
`
export const FooterBottomNavigation = styled(BottomNavigation)`
  && {
    height: 100%;
  }
`
export const FooterBottomNavigationAction = styled(BottomNavigationAction)`
`