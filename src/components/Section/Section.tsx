import styled from 'styled-components';
import Image from 'next/image';
import {useState} from 'react';

import {SliderItems} from './SliderItems'



const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    div {
        height: 70vh;
        width: 100%;
        &:nth-child(3) {
            background-color:grey;
          }
        
        &:nth-child(4) {
            background-color:green;
          }
    }

`


const FirstContent = styled.section`
    display: flex;
    flex-flow: row nowrap;
    align-items:center;
    justify-content: space-around;
    padding: 4rem;
    max-width:1200px;

    .description {
        margin-right: 3rem;
        max-height:350px;
        max-width: 600px;
        display: flex;
        flex-flow: column nowrap;
        max-width: 600px;
        padding: 1rem;
        justify-content: space-between;
      

        h1 {
            max-width: 450px;
            font-size: 2.5em;
            line-height: 1.2em;

        }

        p{  
            max-width: 400px;
            font-size: 1.2em;
            text-align: left;
            line-height: 1.2em;
        }

        button {
            max-width:200px;
            border: none;
            padding:10px;
            background-color: #dfe6e9;
            color: #34495e;
            cursor: pointer;   
            font-size: 1.04em; 

            &:hover{
                background-color: #bdc3c7;
            }
        }
    }

    img {
        max-width: 600px;
        max-height: 350px;
    }
`

const SecondContent = styled.section`

  
    display: flex;
    flex-flow: row nowrap;
    align-items:center;
    justify-content: flex-start;
    padding: 4rem;
    width:100%;

    height:100vh;
    background-image: url(${props => props.background || "red"});


    background-size: cover;
    transition: 0.6s ease-in-out;

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
                &:hover{
                    border-bottom: 2px solid #fc5c65;
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

                font-size: 2.2em;
                line-height: 0.9em;
    
            }
    
            p{  
                font-size: 1.2em;
                text-align: left;
                line-height: 1.2em;
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
    
                &:hover{
                    background-color: #fc5c65;
                    transition: 0.3s ease-in-out;
                    color: white;
                }
            }
        }
    }

`



export function Section() {

    const[background, setBackground] = useState('#000')
    const[description, setDescription] = useState('Berloques e separadores com ou sem strass, envernizados, banhados em prata e níquel. Peças de altíssima qualidade e com banho nacional.')
    const[subtitle, setSubtitle] = useState('Cada berloque é um pedaço da sua história')



    return (
        <Container>
            <FirstContent>
                <div className="description">
                    <h1>Transformamos sua história em uma pulseira</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                        it to make a type specimen book. It has survived not only five centuries.</p>
                     <button>Consulte nossos catálogos</button>
                       
                </div>

                    
                    <img src="/img/content.jpeg"/>

            </FirstContent>
            <SecondContent background={background}>
                <div>

                    <ul>
                    {SliderItems.map((item, index) => {
                    return (
                        <li key={index}  onClick={() => {
                            setBackground(item.url)
                            setDescription(item.description)
                            setSubtitle(item.subtitle)

                        }}>
                            {item.title}
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
            </SecondContent>
            <div></div>
            <div></div>
        </Container>
    )
}
