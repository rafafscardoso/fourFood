import React from 'react';

import ProductCard from '../../../../components/ProductCard';

import { ProductListContainer } from './style';

const ProductList = (props) => {

  const { products, showModal, remove } = props;

  return (
    <ProductListContainer>
      <p>Principais</p>
      {products.filter((item) => (item.category !== "Acompanhamento" && item.category !== "Bebida")).map(product => (
        <ProductCard key={product.id} product={product} showModal={showModal} remove={remove} />
      ))}
      <p>Acompanhamentos</p>
      {products.filter((item) => (item.category === 'Acompanhamento')).map(product => (
        <ProductCard key={product.id} product={product} showModal={showModal} remove={remove} />
      ))}
      <p>Bebidas</p>
      {products.filter((item) => (item.category === 'Bebida')).map(product => (
        <ProductCard key={product.id} product={product} showModal={showModal} remove={remove} />
      ))}
    </ProductListContainer>
  )
}

export default ProductList;