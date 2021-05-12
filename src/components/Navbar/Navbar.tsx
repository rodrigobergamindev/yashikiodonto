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
      <li><a href="https://vm.tiktok.com/ZMegKPN55/" target="_blank"><img src="/img/instagram.png"/></a></li>
      <li><a href="https://www.instagram.com/lojinha_da_mayumi/" target="_blank"><img src="/img/tiktok.png"/></a></li>
      <li><a href="https://www.facebook.com/lojinhadamayumi/" target="_blank"><img src="/img/facebook.png"/></a></li>
      <li><a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20pe%C3%A7as%20da%20loja" target="_blank"><img src="/img/whatsapp.png"/></a></li>
    </SocialMediaList>
    </Nav>
  )
}

export default Navbar