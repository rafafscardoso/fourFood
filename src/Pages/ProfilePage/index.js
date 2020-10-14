import React, { useState, useEffect, useContext } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FullPageLoading from '../../components/FullPageLoading';

import { usePrivatePage } from '../../hooks';
import { FullAddressContext, ProfileContext } from '../../contexts';
import { getProfile, getOrdersHistory, getFullAddress } from '../../requests';
import {
  PageContainer
} from '../../styles';

import ShowProfile from './components/ShowProfile';
import ShowAddress from './components/ShowAddress';
import OrderCard from './components/OrderCard';
import {
  ProfilePageContainer,
  ProfileContainer,
  AddressContainer,
  OrdersContainer
} from './style';

const ProfilePage = () => {

  usePrivatePage();

  const { setFullAddress } = useContext(FullAddressContext);

  const { profile, setProfile } = useContext(ProfileContext);

  const [ordersHistory, setOrdersHistory] = useState(undefined);

  useEffect(() => {
    getProf();
  }, [setProfile]);

  useEffect(() => {
    getAddress();
  }, [setFullAddress]);

  useEffect(() => {
    getOrder();
  }, [setOrdersHistory]);

  const getProf = async () => {
    try {
      const response = await getProfile();
      setProfile(response.user);
    } catch (error) {
      console.error(error.response);
    }
  }

  const getAddress = async () => {
    try {
      const response = await getFullAddress();
      if (response.address.complement) {
        setFullAddress(response.address);
      } else {
        setFullAddress({ ...response.address, complement: '' });
      }
    } catch (error) {
      console.error(error.response);
    }
  }

  const getOrder = async () => {
    try {
      const response = await getOrdersHistory();
      setOrdersHistory(response.orders);
    } catch (error) {
      console.error(error.response);
    }
  }

  return (
    <PageContainer>
      <Header />
      {(profile && ordersHistory) ? (
        <ProfilePageContainer>
          <ProfileContainer>
            {profile && <ShowProfile profile={profile} />}
          </ProfileContainer>
          <AddressContainer>
            {profile && <ShowAddress address={profile.address} />}
          </AddressContainer>
          <OrdersContainer>
            <p>Histórico de pedidos</p>
            {ordersHistory && (
              ordersHistory.length > 0 ? (
                ordersHistory.map(order => (
                  <OrderCard order={order} key={order.expiresAt} />
                ))
              ) : <p>Você não realizou nenhum pedido</p>
            )}
          </OrdersContainer>
        </ProfilePageContainer>
      ) : <><FullPageLoading/></> }
      <Footer />
    </PageContainer>
  )
}

export default ProfilePage;