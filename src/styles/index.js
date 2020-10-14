import styled from 'styled-components';
import {
  FormControl,
  TextField,
  MenuItem,
  Button,
  IconButton,
  InputAdornment
} from '@material-ui/core';

export const PageContainer = styled.div`
  max-width: 420px;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 4rem 1fr 4rem;
  grid-template-columns: 1fr;
`
export const FormFormControl = styled(FormControl)`
  && {
    margin: .5em 0;
  }
`
export const FormTextField = styled(TextField)`
`
export const FormMenuItem = styled(MenuItem)`
`
export const FormButton = styled(Button)`
  && {
    margin: .5em 0;
  }
`
export const FormIconButton = styled(IconButton)`
`
export const FormInputAdornment = styled(InputAdornment)`
`