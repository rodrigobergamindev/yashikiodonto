import styled from 'styled-components';
import Burger from './Burger';
import Image from 'next/image';


const Nav = styled.nav`

z-index: 9999; 
position: fixed; 
left: 0; 
top: 0;
width: 100%;





  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items:center;
  background-color: white;
  
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
      transition: 0.3s ease;

      &:hover{
        color: #e74c3c;
        transition: 0.3s ease;
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
            width: 25px;
            height: 25px;
            transform: scale(1.0);
            transition: all 0.3s ease;
            cursor: pointer;
    

            &:hover  {
              transform: scale(1.5);
              transition: all 0.3s ease;
            }
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
      <li><img src="/img/instagram.svg"/></li>
      <li><img src="/img/tiktok.svg"/></li>
      <li><img src="/img/facebook.svg"/></li>
      <li><img src="/img/whatsapp.svg"/></li>
    </SocialMediaList>
    </Nav>
  )
}

export default Navbar