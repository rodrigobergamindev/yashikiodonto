import styled from 'styled-components';
import { InstagramFeed } from './InstagramFeed';
import { Slider } from './Slider';
import InstagramIcon from '@material-ui/icons/Instagram';



const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;



`


const FirstContent = styled.section`
    display: flex;
    flex-flow: row nowrap;
    align-items:center;
    justify-content: space-around;
    padding: 4rem;
    width:1200px;




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
            margin-top:1rem;
            margin-bottom:2rem;
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
            border-radius: 2px;

            


            &:hover{
                background-color: #fc5c65;
                color: white;
                transition: 0.3s ease-in-out;
            }
        }
    }

    img {
        max-width: 600px;
        max-height: 350px;
    }
`

const DisplaySocialMedia = styled.div`
    display:flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width:1200px;
    margin-bottom: 2rem;

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
                    <h1>Transformamos sua história em uma pulseira</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                        it to make a type specimen book. It has survived not only five centuries.</p>
                     <button>Consulte nossos catálogos</button>     
                </div>
                    <img src="/img/content.jpeg"/>

            </FirstContent>

            <Slider/>
        
           <DisplaySocialMedia>

            <div className="title">
                <h1>Visite nosso Instagram</h1>
                <p>Fique por dentro das nossas novidades, em primeira mão sempre no nosso feed!</p>
            </div>

            <InstagramFeed></InstagramFeed>

            <button><InstagramIcon style={{color:"white", fontSize:"0.95em", marginTop:'2px', marginRight:'2px'}}></InstagramIcon>@lojinha_da_mayumi</button>

           </DisplaySocialMedia>

        </Container>
    )
}

