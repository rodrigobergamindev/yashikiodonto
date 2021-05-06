import {MenuItems} from './MenuItems'

import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  flex: 1;
  align-items: center;
  justify-content: center;

  @media(min-width: 931px){
    li {
      color: #fc5c65;
      padding: 0.7rem;
  
      &:hover{
        border-bottom: 1px solid #fc5c65;
        transition: 0.3s ease-in-out;
        
    }
  
      a{ 
          padding: 5px;
          font-size: 1.2em;
          border-radius: 9px;
      }
  }




  }
  @media (max-width: 931px) {

      
    
    flex-flow: column nowrap;
    background-color: #fc5c65;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;

    li {
      color: white;
      padding: 0.7rem;
      width: 100%;
      &:hover{
          color:#fc5c65;
          background-color: white;
          transition: 0.3s ease-in-out;
          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      }

      a{

        &:hover{
            color:#fc5c65;
            background-color: white;
            transition: 0.3s ease-in-out;
            
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
