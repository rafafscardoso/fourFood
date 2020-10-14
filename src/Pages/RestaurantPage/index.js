import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom'; 

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FullPageLoading from '../../components/FullPageLoading';

import { usePrivatePage } from "../../hooks";
import { getRestaurantDetail } from "../../requests";
import { CartContext } from '../../contexts';
import { PageContainer } from '../../styles';

import RestaurantCard from './components/RestaurantCard';
import ProductList from './components/ProductList';
import ProductModal from './components/ProductModal';
import { RestaurantPageContainer } from "./style";

const RestaurantPage = () => {

  usePrivatePage();

  const pathParams = useParams();

  const [restaurantDetail, setRestaurantDetail] = useState(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productToCart, setProductToCart] = useState(undefined);

  const { cart, setCart, inputModal, setInputModal } = useContext(CartContext);

  useEffect(() => {
    getRestaurant();
  }, [setRestaurantDetail]);

  const getRestaurant = async () => {
    try {
      const response = await getRestaurantDetail(pathParams.restaurantId);
      let products = response.restaurant.products.map(product => ({ ...product, quantity: 0 }));
      if (cart && cart.products.length) {
        const newList = products.map(product => {
          let newProduct = product;
          cart.products.forEach(productInCart => {
            if (product.id === productInCart.id) {
              const { quantity } = productInCart;
              newProduct = { ...product, quantity };
            }
          });
          return newProduct
        });
        products = newList;
      }
      setRestaurantDetail({ ...response.restaurant, products });
    } catch (error) {
      console.error(error.response);
    }
  }

  const addToCart = (productToAdd) => {
    let cartList = cart ? cart.products : [];
    if (!cartList.length) {
      cartList = [].concat({ ...productToAdd, quantity: Number(inputModal) })
    } else if (cartList.findIndex(product => (product.id === productToAdd.id)) === -1) {
      cartList = [...cartList, { ...productToAdd, quantity: Number(inputModal) }]
    } else {
      cartList = cart.products.map(productInCart => {
        if (productInCart.id === productToAdd.id) {
          return { ...productInCart, quantity: productInCart.quantity + Number(inputModal) };
        }
        return productInCart;
      })
    }
    setCart({ ...restaurantDetail, products: cartList });
    const products = restaurantDetail.products.map(product => {
      let newProduct = product;
      cartList.forEach(productInCart => {
        if (product.id === productInCart.id) {
          const { quantity } = productInCart;
          newProduct = { ...product, quantity };
        }
      });
      return newProduct;
    });
    setRestaurantDetail({ ...restaurantDetail, products });
    setInputModal('');
    setIsModalVisible(false);
  }

  const showModal = (product) => {
    setProductToCart(product);
    setIsModalVisible(true);
  }

  const removeProduct = (productToRemove) => {
    const newCart = cart.products.filter(product => (
      product.id !== productToRemove.id
    ));
    setCart({ ...cart, products: newCart });
    let products = restaurantDetail.products.map(product => ({ ...product, quantity: 0 }));
    if (newCart.length) {
      products = products.map(product => {
        let newProduct = product;
        newCart.forEach(productInCart => {
          if (product.id === productInCart.id) {
            const { quantity } = productInCart;
            newProduct = { ...product, quantity };
          }
        });
        return newProduct;
      });
    } 
    setRestaurantDetail({ ...restaurantDetail, products });
  }

  return (
    <PageContainer>
      <Header/>
      {restaurantDetail ? (
        <RestaurantPageContainer>
          <RestaurantCard restaurantDetail={restaurantDetail} />
          <ProductList products={restaurantDetail.products} showModal={showModal} remove={removeProduct} />
          {isModalVisible && (
            <ProductModal cart={{ addToCart, productToCart }} />
          )}
        </RestaurantPageContainer>
      ) : <FullPageLoading />}
      <Footer />
    </PageContainer>
  );
};

export default RestaurantPage;
