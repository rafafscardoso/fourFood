import React, { useState, useEffect, useContext } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import FullPageLoading from '../../components/FullPageLoading';

import { usePrivatePage } from '../../hooks';
import { CartContext } from '../../contexts';
import { getProfile, placeOrder } from '../../requests';
import { PageContainer, FormButton } from '../../styles';

import ShowAddress from './components/ShowAddress';
import PaymentMethod from './components/PaymentMethod';
import {
  CartPageContainer,
  AddressContainer,
  RestaurantContainer,
  OrderContainer,
  TotalContainer,
  PaymentContainer
} from './style';

const CartPage = () => {

  usePrivatePage();

  const { cart, setCart } = useContext(CartContext);

  const [shippingAddress, setShippingAddress] = useState(undefined);

  const [paymentMethod, setPaymentMethod] = useState('creditcard');

  const payment = [paymentMethod, setPaymentMethod];

  useEffect(() => {
    getShippingAddress()
  }, [setShippingAddress]);

  const getShippingAddress = async () => {
    try {
      const response = await getProfile();
      setShippingAddress(response.user.address);
    } catch (error) {
      console.error(error.response);
    }
  }

  const getSubtotal = () => {
    let subtotal = 0;
    (cart ? cart.products : []).forEach(product => {
      subtotal += product.quantity * product.price;
    })
    return subtotal
  }

  const subtotal = getSubtotal();

  const removeProduct = (productToRemove) => {
    const newCart = cart.products.filter(product => (
      product.id !== productToRemove.id
    ));
    setCart({ ...cart, products: newCart });
  }

  const submitOrder = async (event) => {
    event.preventDefault();
    const products = (cart ? cart.products : []).map(product => (
      { id: product.id, quantity: product.quantity }
    ));
    const body = { products, paymentMethod }
    try {
      await placeOrder(body, cart.id);
      setCart(undefined);
    } catch (error) {
      console.error(error.response);
    }
  }

  return (
    <PageContainer>
      <Header />
      {shippingAddress ? (
        <CartPageContainer onSubmit={submitOrder} >
          <AddressContainer>
            <ShowAddress address={shippingAddress} />
          </AddressContainer>
          <OrderContainer>
            {(cart ? ((cart.products || []).length ? (
              <RestaurantContainer>
                <p>{cart.name}</p>
                <p>{cart.address}</p>
                <p>{`${cart.deliveryTime} min`}</p>
              </RestaurantContainer>
            ) : null) : null)}
            {(cart ? cart.products : []).length ? cart.products.map(product => (
              <ProductCard key={product.id} product={product} showModal={() => null} remove={removeProduct} />
            )) : <p>Carrinho vazio</p>}
            <TotalContainer>
              <p>SUBTOTAL</p>
              <div>
                <p>{`Frete R$${(cart ? (cart.products.length ? cart.shipping.toFixed(2) : '0,00') : '0,00')}`}</p>
                <p>{`R$${(cart? (cart.products.length ? (subtotal + cart.shipping).toFixed(2) : '00,00') : '00,00')}`}</p>
              </div>
            </TotalContainer>
          </OrderContainer>
          <PaymentContainer>
            <PaymentMethod payment={payment} />
            <FormButton 
              type='submit'
              color='primary' 
              variant='contained' 
              disabled={(cart ? (cart.products.length ? false : true) : true)}
            >
              Confirmar
            </FormButton>
          </PaymentContainer>
        </CartPageContainer>
      ) : <FullPageLoading />}
      <Footer />
    </PageContainer>
  )
}

export default CartPage;