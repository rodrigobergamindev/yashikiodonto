import styled from 'styled-components';
import Burger from './Burger';
import Image from 'next/image';


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


const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      <Image src="/img/logo.png" width={40} height={20} />
        <h1>LOJINHA DA MAYUMI</h1>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar