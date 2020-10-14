import styled from "styled-components";
import { 
  Card,
  CardMedia
} from "@material-ui/core";

export const RestCard = styled(Card)`
  && {
    margin-bottom: .5em;
    height: 11.75em;
    border-radius: .5em;
    border: solid 1px #b8b8b8;
    box-shadow: none;
  }
  > div {
    padding: 1em;
    padding-top: .75em;
    > p {
      margin: 0;
      margin-bottom: .25em;
      color: #e8222e;
    }
    > div {
      display: flex;
      justify-content: space-between;
      color: #b8b8b8;
    }
  }
`
export const RestCardMedia = styled(CardMedia)`
  && {
    height: 7.5em;
  }
`
