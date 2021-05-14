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
    flex-flow: column nowrap;
    align-items:flex-start;
    justify-content: center;
    width:100%;
    margin-bottom: 4rem;

    height: 100vh;

    background-size: cover;
    transition: 0.6s ease;

    .backgroundSlider {
       
        width:100%;
        max-height: 100%;

        img{
            height: 100%;
            width: 100%;
            object-fit: cover;

            @media (max-width: 931px) {
                height: 250px;
              }
        }
    }



    .miniContainer{
        left: 40rem;
        position: absolute;
        @media (max-width: 931px) {
            display: none;
          }
        

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

const ContainerMobile = styled.div`

    display: none;
    max-width: 100%;
  
    
    @media (max-width: 931px) {
        display: flex;
      }

    div {
        display:flex;
        flex-flow: column nowrap;
        background-color:#fc5c65;
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
            border-bottom: 2px solid white;

            li {
                font-size: 1.4em;
                cursor: pointer;
                height:60px;
                text-align: center;
                display:flex;
                flex-flow: column nowrap;
                color: white;
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
            color: white;
            margin-bottom: 1rem;
            font-size: 2.2em;
            line-height: 0.9em;
            

        }

        p{  
            color: white;
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
        }
    }



`


export function Slider() {

    const[background, setBackground] = useState(initialState.url)
    const[description, setDescription] = useState(initialState.description)
    const[subtitle, setSubtitle] = useState(initialState.subtitle)

    return (
            <div style={{width:"100%"}}>
            <SecondContent>

            <ContainerMobile>
                <div>

                    <ul>
                    {SliderItems.map((item, index) => {
                    return (
                        <li key={index} style={{borderBottom: item.url === background? '4px solid white' : 'none'}} onClick={() => {
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
                    <a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20pe%C3%A7as%20da%20loja" target="_blank">
                        <button>Faça seu pedido</button></a>
                       
                </div>
                </div>
                </ContainerMobile>

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
                    <a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20pe%C3%A7as%20da%20loja" target="_blank">
                        <button>Faça seu pedido</button></a>
                       
                </div>
                </div>
                </div>
                <div className="backgroundSlider">
                    <img src={background}></img>
                </div>
            </SecondContent>
            </div>
    )
}
