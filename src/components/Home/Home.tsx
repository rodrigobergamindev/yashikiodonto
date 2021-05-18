import styled from 'styled-components';
import { InstagramFeed } from './InstagramFeed';
import { Slider } from './Slider';
import {Container } from './styles'
import {Cards} from './Cards'
import {Card} from './Card'


const DisplaySocialMedia = styled.div`
    display:flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width:1200px;
    margin-bottom: 2rem;
    
  

    @media (max-width: 931px) {
        flex-flow: column wrap;
        max-width: 340px;
        margin-top: 2rem;
        margin-bottom: 0;
      }

    button {
        margin-top: 2rem;    
        display:flex;
        align-items: center;
        max-width:200px;
        border: none;
        padding:5px;
        background-color: #fc5c65;
        color: black;
        cursor: pointer;   
        font-size: 1.04em;
        opacity: 1; 
        color: white;
        border-radius:2px;

        &:hover {
            opacity: 0.9;
        }

    }

    .title {
        padding: 2rem;
        margin-left: 5rem;
        display:flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-self: flex-start;
        width: 100%;
        
        @media (max-width: 931px) {
            flex-flow: column wrap;
            padding: 0;
            margin: 0;
            justify-content: center;
            align-items: center;
            
          }
       
        

        p {
            line-height:1.2em;
            font-size: 1.2em;

            @media (max-width: 931px) {
                
                padding: 1rem;
                text-align: center;
                margin-bottom: 1rem;
                
              }
        }

        h1 {
            font-size:2.5em; 
            font-weight: 400;
            
            @media (max-width: 931px) {
                font-size: 2.2em;
                font-weight: bold;
                color: #fc5c65;
              }
        }
        

    }

`


export function Home() {

    return (
        <Container>
            <div className="firstContent">
                <h1>Dr. Eder Massashi Yashiki</h1>
                <h2>abordagem que associa saúde e <strong>estética</strong></h2>
            </div>

            <div className="secondContent">
                <div className="title">
                    <h1>Saúde bucal com quem realmente entende</h1>
                    <h6>Atuamos a mais de 20 anos  no segmento de Odontologia, nosso objetivo
é proporcionar aos nossos clientes a excêlencia dos nossos serviços</h6>
                </div>

                <div className="cardContainer">
                    {Cards.map((card,index) => {
                        return (
                            <Card key={index} title={card.title} url={card.url} description={card.description}/>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

