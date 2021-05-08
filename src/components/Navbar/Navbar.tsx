import styled from 'styled-components';
import Burger from './Burger';
import Image from 'next/image';


const Nav = styled.nav`
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items:center;
  
  .logo {
    flex: 1;
    padding: 1rem;
    display: flex;
    align-items:center;

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

const SocialMediaList = styled.ul`

        display:flex;
        list-style: none;

        padding: 0.5rem;
        flex: 1;
        justify-content: flex-end;
        position: relative;
        top: 5px;
        li {
          padding: 0.5rem;

          img {
            width: 20px;
            height: 20px;
          }
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
    <SocialMediaList>
      <li><img src="/img/instagram-color.svg"/></li>
      <li><img src="/img/tiktok-color.svg"/></li>
      <li><img src="/img/facebook-color.svg"/></li>
      <li><img src="/img/whatsapp-color.svg"/></li>
    </SocialMediaList>
    </Nav>
  )
}

export default Navbar