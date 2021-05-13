import {MenuItems} from './MenuItems'

import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;


  @media(min-width: 931px){
    justify-content: center;
    
   
    li {
      color: #fc5c65;
      padding: 0.7rem;

        
    }
  
      a{ 
          padding: 10px;
          font-size: 1.2em;

          &:hover{ 
            border-bottom: 2px solid #fc5c65;
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



const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
       {MenuItems.map((item, index) => {
                    return (
                        <li key={index}><a href={item.url}>
                            {item.title}
                            </a>
                            </li>
                    )
                })}
    </Ul>
  )
}

export default RightNav
