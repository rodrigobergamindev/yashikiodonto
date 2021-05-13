import styled from 'styled-components';
import { InstagramFeed } from './InstagramFeed';
import { Slider } from './Slider';
import InstagramIcon from '@material-ui/icons/Instagram';



const Container = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
   

    @media (max-width: 931px) {
        flex-flow: column wrap;
        max-width: 100%;
        align-self: center;
      }
`


const FirstContent = styled.section`
    display: flex;
    flex-flow: row nowrap;
    align-items:center;
    justify-content: space-around;
    padding: 4rem;
    


    @media (max-width: 931px) {
        margin-top: 2rem;
        flex-flow: column wrap;
        max-width: 340px;
        padding:0;
        margin-bottom: 5rem;
        
      }
   
    .description {
        margin-right: 3rem;
    
        max-width: 600px;
        display: flex;
        flex-flow: column nowrap;
        padding: 1rem;
        justify-content: space-between;

        @media (max-width: 931px) {
            
            flex-flow: column wrap;
            width: 100%;
            margin: 0;
            padding: 0;
            justify-content: flex-start;
            align-items: flex-start;
          }

        

        .imgMobile {

            display: none;

            @media (max-width: 931px) {
                display: flex;
                width: 100%;
                max-height: 250px;
                margin-bottom: 2rem;
              }
        }

        @media (max-width: 931px) {
            flex-flow: column wrap;
            max-width: 340px;
            padding: 0;
          }
       
      
            
        h1 {
            max-width: 450px;
            font-size: 2.5em;
            line-height: 1.2em;

            @media (max-width: 931px) {
                max-width: 340px;
                font-size: 1.8em;
                color: #fc5c65;
              }

        }

        p{  
            margin-top:1rem;
            margin-bottom:2rem;
            max-width: 400px;
            font-size: 1.2em;
            text-align: left;
            line-height: 1.2em;

            @media (max-width: 931px) {
                
                max-width: 340px;
                text-align: justify;
              }
        }

        button {
            
            border: none;
            padding:10px;
            background-color: #dfe6e9;
            color: #34495e;
            cursor: pointer;   
            font-size: 1.04em; 
            border-radius: 2px;

            


            &:hover{
                background-color: #fc5c65;
                color: white;
                transition: 0.3s ease-in-out;
            }

            @media (max-width: 931px) {
                width: 340px;
               
              }
        }
    }

    .imgPC {
        max-width: 600px;
        max-height: 350px;

        @media (max-width: 931px) {
            display: none;
          }
    }
`

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
          }
       
        

        p {
            line-height:0.9em;
            font-size: 1.2em;
        }

        h1 {
            font-size:2.5em; 
            font-weight: 400;
        }
        

    }

`


export function Section() {

    return (
        <Container>
            <FirstContent>
                <div className="description">
                <img className="imgMobile" src="/img/content.jpeg"/>
                    <h1>Transformamos sua história em uma pulseira</h1>
                    <p>
                        
                        Quando pensamos na nossa história de vida, nos remetemos a situações, pessoas, coisas que participaram desse processo.
                        Nossa missão é moldar a sua história em uma pulseira linda e cheia amor.</p>

                     <a href="/Produtos"><button>Consulte nossos catálogos</button></a>    
                </div>
                    <img className="imgPC" src="/img/content.jpeg"/>

            </FirstContent>
            <Slider/>
        
            <DisplaySocialMedia>

                    <div className="title">
                        <h1>Visite nosso Instagram</h1>
                        <p>Fique por dentro das nossas novidades, em primeira mão sempre no nosso feed!</p>
                    </div>

                    <InstagramFeed></InstagramFeed>

                    <a href="https://www.instagram.com/lojinha_da_mayumi/" target="_blank"><button><InstagramIcon style={{color:"white", fontSize:"0.95em", marginTop:'2px', marginRight:'2px'}}></InstagramIcon>@lojinha_da_mayumi</button></a>

            </DisplaySocialMedia>
        </Container>
    )
}

