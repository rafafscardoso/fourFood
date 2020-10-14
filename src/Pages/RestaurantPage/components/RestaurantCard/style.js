import styled from 'styled-components';
import {
  Card,
  CardMedia,
  CardContent
} from '@material-ui/core';

export const RestCard = styled(Card)`
  && {
    height: 15.5em;
    border-radius: .5em;
    border: none;
    box-shadow: none;
  }
`
export const RestCardMedia = styled(CardMedia)`
  && {
    height: 7.5em;
  }
`
export const RestCardContent = styled(CardContent)`
  && {
    padding: 0;
    padding-top: .25em;
    p {
      color: #b8b8b8;
    }
    > p:first-of-type {
      color: #e8222e;
    }
    > p {
      margin: .5em 0;
    }
    > span {
      display: flex;
      justify-content: flex-start;
      > p {
        margin: 0;
        margin-right: 1em;
      }
    }
  }
`