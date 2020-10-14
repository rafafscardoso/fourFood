import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import { ArrowBackIcon } from '../../icons';
import { FormIconButton } from '../../styles';

import { HeaderContainer } from "./style";

const Header = () => {

  const history = useHistory();
  const [currentPage, setCurrentPage] = useState("");
  const [hasBackButton, setHasBackButton] = useState(false);

  useEffect(() => {
    switch (history.location.pathname) {
      case "/home":
        setCurrentPage("Ifuture");
        break;
      case "/cart":
        setCurrentPage("Meu carrinho");
        break;
      case "/profile":
        setCurrentPage("Meu perfil");
        break;
      case "/restaurant":
        setCurrentPage("Restaurante");
        setHasBackButton(true);
        break;
      case "/profile/updateprofile":
        setCurrentPage("Editar");
        setHasBackButton(true);
        break;
      case "/profile/updateaddress":
        setCurrentPage("Endereço");
        setHasBackButton(true);
        break;
      case "/search":
        setCurrentPage("Buscar");
        setHasBackButton(true);
        break;
      case "/signup":
      case "/addaddress":
        setCurrentPage(" ");
        setHasBackButton(true);
        break;
      case "/":
        setCurrentPage(" ");
        break;
      default:
        if (history.location.pathname.includes("/restaurant")) {
          setCurrentPage("Restaurante");
          setHasBackButton(true);
          break;
        }
        setCurrentPage("Sem registro");
    }
  }, [history.location.pathname]);

  return (
    <HeaderContainer>
      <div>
        <div>
          {hasBackButton && 
            <FormIconButton onClick={() => history.goBack()} size='small' >
              <ArrowBackIcon />
            </FormIconButton>
          }
        </div>
        <div>
          <p>{currentPage}</p>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
