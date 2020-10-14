import React from 'react';

import {
  ProdCard,
  ProdCardMedia,
  ProdCardContent,
  Qty,
  AddButton,
  RemoveButton
} from './style';

const ProductCard = (props) => {

  const { product, showModal, remove } = props;
  const { name, description, photoUrl, quantity, price } = product;

  return (
    <ProdCard>
      <ProdCardMedia
        image={photoUrl}
        title='Product Image'
        component='img'
      />
      <ProdCardContent>
        <span>
          <p>{name}</p>
        </span>
        <span>
          <p>{description}</p>
        </span>
        <span>
          <p>{`R$${price.toFixed(2)}`}</p>
        </span>
        {quantity ? <Qty>{quantity}</Qty> : null}
        {quantity ? (
          <RemoveButton onClick={() => remove(product)} >
            remover
          </RemoveButton>
        ) : (
          <AddButton onClick={() => showModal(product)} >
            adicionar
          </AddButton>)
        }
      </ProdCardContent>
    </ProdCard>
  )
}

export default ProductCard;