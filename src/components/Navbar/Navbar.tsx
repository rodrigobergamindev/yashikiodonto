import styled from 'styled-components';
import Burger from './Burger';
import Image from 'next/image';

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
    justify-content: center;
    align-items:center;
    flex: 1;
    cursor: pointer;
    flex-flow: row nowrap;
    
    h1 {
      font-family:'Jaldi';
      padding: 12px;
      color: #121214;
      font-size: 1.3em;

      &:hover{
        color: #e74c3c;
      }
    }

    @media (max-width: 931px) {
        
     }

  }
`
const SocialMedia = styled.ul`
    flex:1;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    flex-flow: row nowrap;
    position:relative;
    right: 20px;
    top: 5px;

    li{
        padding: 0.7rem;
        cursor: pointer;

    }

    @media (max-width: 931px) {
        display:none;
     }

`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      <Image src="/img/logo.png" width={40} height={20} />
        <h1>LOJINHA DA MAYUMI</h1>
      </div>
      <Burger />

      <SocialMedia>
        <li><FacebookIcon style={{color:'#121214'}} fontSize="small"></FacebookIcon></li>
        <li><InstagramIcon style={{color:'#333'}} fontSize="small"></InstagramIcon></li>
        <li><WhatsAppIcon style={{color:'#333'}} fontSize="small"></WhatsAppIcon></li>
      </SocialMedia>

    </Nav>
  )
}

export default Navbar