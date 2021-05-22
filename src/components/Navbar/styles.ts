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
            width: 1.5rem;
            height: 1.5rem;
            
            cursor: pointer;
    
            &:hover  {
              transform: rotateZ(-360deg);
              transition: all 0.7s ease;
            }
          }
        }

`




export const Ul = styled.ul`

@keyframes rotateX {
  0% {
    opacity: 0;
    transform: rotateX(-90deg);
  }
  50% {
    transform: rotateX(-20deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
}

    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    flex: 7;
    
   


  @media(min-width: 931px){
    justify-content: center;
    
   
    li {
      color: var(--secondary);
      padding: 0.7rem;  
    }

    .submenu {
  
      
      .menuInferior {
        display: ${({ visible}) => visible ? 'flex' : 'none'};
        flex-direction: column;
        list-style: none;
        position: absolute;
        text-align: left;
        top: 3.4rem;
        transform-origin: top center;
        animation: rotateX 300ms ease-in-out forwards;
        background: var(--secondary);

        li {
          transition: 0.3s ease;
          font-size: 0.8rem;
          border-bottom: 1px solid #dcdde1;
          color: var(--primary);
         
          cursor: pointer;

          &:hover{
            background: var(--primary);
            
          }

          a{ 
            font-size: 0.9rem;
            letter-spacing: auto;
            color: var(--primary);

            &:hover {
              color: var(--secondary);
            }
          }
          
          &:last-child{
            border: none;
          }
        }
      }

      .arrow {
        cursor: pointer;
        width: 0.7rem;
        height: 0.7rem;
        position: relative;
        left: 5px;
        top: 1.5px;
        transition: all 0.4s ease;
        transform:${({ visible}) => visible ? 'rotateZ(180deg)' : 'rotateZ(0deg)'};
      }
    }
  
      a{ 
          padding: 10px;
          font-size: 1rem;
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



  .submenuContato {
  
      
  .menuInferiorContato {
    display: ${({ visibleContato}) => visibleContato ? 'flex' : 'none'};
    flex-direction: column;
    list-style: none;
    position: absolute;
    text-align: left;
    top: 3.4rem;
    transform-origin: top center;
    animation: rotateX 300ms ease-in-out forwards;
    background: var(--secondary);
    z-index:9999;

    li {
      transition: 0.3s ease;
      font-size: 0.8rem;
      border-bottom: 1px solid #dcdde1;
      color: var(--primary);
      padding: 0.7rem;
      cursor: pointer;

      &:hover{
        background: var(--primary);
        
      }

      a{ 
        font-size: 0.9rem;
        letter-spacing: auto;
        color: var(--primary);

        &:hover {
          color: var(--secondary);
        }
      }
      
      &:last-child{
        border: none;
      }
    }
  }

  .arrowContato {
    cursor: pointer;
    width: 0.7rem;
    height: 0.7rem;
    position: relative;
    left: 5px;
    top: 1.5px;
    transition: all 0.4s ease;
    transform:${({ visibleContato}) => visibleContato ? 'rotateZ(180deg)' : 'rotateZ(0deg)'};
  }
}

  a{ 
      padding: 10px;
      font-size: 1rem;
      letter-spacing: 0.21rem;
      transition: 0.5s linear;

      &:hover {
        color: var(--terciary);
    }
}

`;
