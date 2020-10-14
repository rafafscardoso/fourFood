import React, { useContext } from 'react';

import { CartContext } from '../../../../contexts';
import { FormFormControl, FormTextField, FormMenuItem } from '../../../../styles';

import { Modal, ModalContainer } from './style';

const ProductModal = (props) => {
  
  const { addToCart, productToCart } = props.cart;
  const { inputModal, setInputModal } = useContext(CartContext);

  const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Modal>
      <ModalContainer>
        <p>Selecione a quantidade desejada</p>
        <FormFormControl>
          <FormTextField 
            select
            value={inputModal}
            onChange={(e) => setInputModal(e.target.value)}
            variant='outlined'
          >
            <FormMenuItem defaultValue={0} >0</FormMenuItem>
            {quantity.map(item => <FormMenuItem value={item} key={item} >{item}</FormMenuItem>)}
          </FormTextField>
        </FormFormControl>
        <span onClick={() => addToCart(productToCart)} >ADICIONAR AO CARRINHO</span>
      </ModalContainer>
    </Modal>
  )
}

export default ProductModal;