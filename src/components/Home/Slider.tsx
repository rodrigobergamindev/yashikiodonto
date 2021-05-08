import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import {useState} from 'react';

import {SliderItems} from './SliderItems'

const initialState = {
    title: 'Berloques',
    url: '/img/slider01.jpeg',
    subtitle: 'Cada berloque é um pedaço da sua história',
    description: 'Berloques e separadores com ou sem strass, envernizados, banhados em prata e níquel. Peças de altíssima qualidade e com banho nacional.',
  }



const SecondContent = styled.section`

    display: flex;
    flex-flow: row nowrap;
    align-items:center;
    justify-content: center;
    padding: 4rem;
    width:100%;
   

    height:100vh;
    background-image: url(${props => props.background || "red"});

    background-size: cover;
    transition: 0.6s ease-in-out;

    .miniContainer{
        width: 1200px;
        
        

        div {
            display:flex;
            flex-flow: column nowrap;
            background-color:white;
            max-width: 450px;
            max-height: 400px;
            align-items: flex-start;
            opacity: 0.92;
            z-index: 1;
    
            ul{
                margin-top: 1rem;
                display:flex;
                flex-flow: row nowrap;
                list-style: none;
                justify-content: space-around;
                width: 100%;
                border-bottom: 2px solid #f1f1f1;
    
                li {
                    font-size: 1.4em;
                    cursor: pointer;
                    height:60px;
                    text-align: center;
                    display:flex;
                    flex-flow: column nowrap;
                    
                    }
    
                }
            }

    }

        .description {
            display: flex;
            flex-flow: column nowrap;
            max-width: 600px;
            padding: 2rem;
            justify-content: space-between;
          
    
            h1 {
                margin-bottom: 1rem;
                font-size: 2.2em;
                line-height: 0.9em;
                
    
            }
    
            p{  
                font-size: 1.2em;
                text-align: left;
                line-height: 1.2em;
                margin-bottom: 2rem;
            }
    
            button {
                max-width:200px;
                border: none;
                padding:10px;
                background-color: #dfe6e9;
                color: black;
                cursor: pointer;   
                font-size: 1.04em;
                opacity: 1; 
                border-radius: 2px;
    
                &:hover{
                    background-color: #fc5c65;
                    transition: 0.3s ease-in-out;
                    color: white;
                }
            }
        }
    }

`


export function Slider() {

    const[background, setBackground] = useState(initialState.url)
    const[description, setDescription] = useState(initialState.description)
    const[subtitle, setSubtitle] = useState(initialState.subtitle)

    return (
    
            <SecondContent background={background}>
                <div className="miniContainer">
                <div>

                    <ul>
                    {SliderItems.map((item, index) => {
                    return (
                        <li key={index} style={{borderBottom: item.url === background? '2px solid black' : 'none'}} onClick={() => {
                            setBackground(item.url)
                            setDescription(item.description)
                            setSubtitle(item.subtitle)
                        }}>
                            {item.title}
                            <div/>
                            </li>
                    )
                    })}
                    </ul>

                    <div className="description">
                    <h1>{subtitle}</h1>
                    <p>{description}</p>
                     <button>Faça seu pedido</button>
                       
                </div>
                </div>
                </div>
            </SecondContent>
       
    )
}
