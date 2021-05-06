import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Nav = styled.nav`
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: center;
  align-items:center;
  
  .logo {
    display: flex;
    justify-content: flex-end;
    align-items:center;
    flex: 1;
    color: #fc5c65;
    font-size: 1.2em;

    @media (max-width: 931px) {
        justify-content: center;
     }

  }
`
const SocialMedia = styled.ul`
    flex:1;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;


    li{
        padding: 2rem;
        font-size: 1.2em;
    }

    @media (max-width: 931px) {
        display:none;
     }

`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        LOJINHA DA MAYUMI
      </div>
      <Burger />
    <SocialMedia>
        <li>
            Facebook
        </li>
        <li>
           Instagram
        </li>
        <li>
            WhatsApp
        </li>
    </SocialMedia>
    </Nav>
  )
}

export default Navbar