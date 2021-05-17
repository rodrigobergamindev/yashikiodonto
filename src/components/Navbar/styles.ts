import styled from 'styled-components';



export const Nav = styled.nav`

    z-index: 9999; 
    position: fixed; 
    left: 0; 
    top: 0;

    padding: 1rem;
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    background: var(--primary);
    

.logo {
  flex:1;
  height: 10rem;
  border: 2px solid var(--primary);
  background: var(--secondary);
  display: flex;
  align-items: center;
  justify-content:center;

  h1 {
      color: var(--primary);
  }
}

`

export const SocialMediaList = styled.ul`
        display:flex;
        list-style: none;
        padding: 0.5rem;
        justify-content: flex-end;
        position: relative;
        top: 5px;
        flex: 1;

        li {
          padding: 0.5rem;
          

          img {
            width: 30px;
            height: 30px;
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


export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    flex: 5;
 


  @media(min-width: 931px){
    justify-content: center;
    
   
    li {
      color: var(--secondary);
      padding: 0.7rem;
    }
  
      a{ 
          padding: 10px;
          font-size: 0.9em;
          letter-spacing: 0.21rem;
          transition: 0.5s linear;

          &:hover {
            color: var(--terciary);
        }
  }




  }
  @media (max-width: 931px) {

    flex-flow: column nowrap;
    background-color: white;
    color: #FC5C65;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-150%)'};
    top: ${({ open }) => open ? '55px' : '10px'};
    right: 0;
    width: 100%;
    height: 100vh;
    transition: transform 0.3s ease-in-out;



    li {
      padding: 0.7rem;
      width: 100%;
      text-align: center;
      
      a {
        font-size: 2em;

      }

    }
  }
`;

