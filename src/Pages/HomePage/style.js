import styled from 'styled-components';
import {
  Tab, 
  AppBar, 
  Tabs
} from '@material-ui/core';

export const HomePageContainer = styled.div`
  grid-row: 2 / span 1;
  @media screen and (max-width: 420px) {
    width: 100vw;
  }
  @media screen and (min-width: 420px) {
    width: 420px;
  }
`
export const SearchContainer = styled.div`
  padding: 0 1em;
  display: flex;
  flex-direction: column;
`
export const HomeTab = styled(Tab)`
  && {
    text-transform: none;
    color: black;
    background-color: #fff;
    outline: none;
  }
`
export const HomeAppBar = styled(AppBar)`
  && {
    outline: none;
    box-shadow: none;
  }
`
export const HomeTabs = styled(Tabs)`
`