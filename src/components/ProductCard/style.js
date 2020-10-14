import styled from "styled-components";
import { 
  Card, 
  CardMedia,
  CardContent
} from "@material-ui/core";

export const ProdCard = styled(Card)`
  && {
    margin: .5em 0;
    height: 7em;
    display: grid;
    box-shadow: none;
    grid-template-columns: 30% 1fr;
    grid-gap: 1em;
    border-radius: .5em;
    border: solid 1px #b8b8b8;
  }
`
export const ProdCardMedia = styled(CardMedia)`
  && {
    height: 7em;
    width: 100%;
  }
`
export const ProdCardContent = styled(CardContent)`
  && {
    margin: 0;
    padding: 0;
    height: 100%;
    display: grid;
    grid-template-rows: 2fr 3fr 2fr;
    grid-template-columns: 1fr 3.625em 2em;
    p {
      margin: 0;
    }
    span:first-of-type {
      color: #e8222e;
      grid-row: 1 / span 1;
      grid-column: 1 / span 1;
      display: flex;
      align-items: flex-end;
    }
    span:nth-of-type(2) {
      font-size: 0.75em;
      color: #b8b8b8;
      grid-row: 2 / span 1;
      grid-column: 1 / span 2;
      display: flex;
      align-items: center;
    }
    span:nth-of-type(3) {
      grid-row: 3 / span 1;
      grid-column: 1 / span 1;
      display: flex;
      align-items: flex-start;
    }
  }
`
export const Qty = styled.span`
  grid-row: 1 / span 1;
  grid-column: 3 / span 1;
  border: 1px solid #e8222e;
  border-radius: 0 0.5em;
  color: #e8222e;
  display: grid;
  place-items: center;
  background-color: white;
  outline: none;
  text-transform: none;
`
export const AddButton = styled.button`
  cursor: pointer;
  grid-row: 3 / span 1;
  grid-column: 2 / span 2;
  border: 1px solid black;
  border-radius: .5em 0;
  color: black;
  display: grid;
  place-items: center;
  background-color: white;
  outline: none;
  text-transform: none;
`
export const RemoveButton = styled.button`
  cursor: pointer;
  grid-row: 3 / span 1;
  grid-column: 2 / span 2;
  border: 1px solid #e8222e;
  border-radius: 0.5em 0;
  color: #e8222e;
  display: grid;
  place-items: center;
  background-color: white;
  outline: none;
  text-transform: none;
`