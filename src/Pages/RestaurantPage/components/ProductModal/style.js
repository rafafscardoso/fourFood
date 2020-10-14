import styled from 'styled-components';
import {} from '@material-ui/core';

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
`
export const ModalContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1em;
  margin-left: 1em; 
  margin-right: 1em;
  width: calc(100% - 4em);
  height: 13.5em;
  color: black;
  display: flex;
  flex-direction: column;
  > span {
    color: #4f81a8;
    align-self: flex-end;
  }
`