import styled from 'styled-components';

export const HeaderContainer = styled.div`
  grid-row: 1 / span 1;
  height: 100%;
  width: 100%;
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  > div {
    padding: 0 1em;
    height: 100%;
    display: grid;
    grid-template-columns: 4em 1fr 4em;
    > div {
      display: flex;
      align-items: center;
    }
    > div:first-of-type {
      grid-column: 1 / span 1;
      justify-self: flex-start;
    }
    > div:nth-of-type(2) {
      grid-column: 2 / span 1;
      justify-self: center;
    }
  }
  @media screen and (max-width: 420px) {
    width: 100vw;
  }
  @media screen and (min-width: 420px) {
    width: 420px;
  }
`