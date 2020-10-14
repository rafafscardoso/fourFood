import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import ActiveOrder from '../ActiveOrder';

import { HomeOutIcon, CartOutIcon, ProfileOutIcon } from '../../icons';

import { 
  FooterContainer, 
  FooterBottomNavigation,
  FooterBottomNavigationAction
} from "./style";


const Footer = () => {

  const history = useHistory();

  const [currentPage, setCurrentPage] = useState(history.location.pathname);

  const handleChange = (event, newValue) => {
    setCurrentPage(newValue);
    history.push(newValue);
  }

  return (
    <FooterContainer>
      <ActiveOrder />
      <FooterBottomNavigation value={currentPage} onChange={handleChange} >
        <FooterBottomNavigationAction value='/home' icon={<HomeOutIcon />} />
        <FooterBottomNavigationAction value='/cart' icon={<CartOutIcon />} />
        <FooterBottomNavigationAction value='/profile' icon={<ProfileOutIcon />} />
      </FooterBottomNavigation>
    </FooterContainer>
  );
};

export default Footer;
