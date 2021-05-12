import Navbar from '../components/Navbar/Navbar'
import styled from 'styled-components';
import FooterAbout from '../components/Footer/FooterAbout';


const ContainerAbout = styled.section`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    align-items: center;


    margin-top: 5rem;

    .headerAbout {
        height:30vh;
        
        
        display: flex;
        flex-flow: row nowrap;
        width: 1200px;
        justify-content: flex-start;
        align-items: flex-start;

    

        .titleAbout {
            flex: 1;
            font-size: 2.2em;
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
            padding: 2rem;

            

            h1 {
                font-weight: 400;
                margin-top: 1rem;
            }

            .barAbout {
                
                width: 100px;
                height: 10px;
                background-color:#fc5c65;
            }
        }

        .descriptionAbout {
            font-size: 1.2em;
            
            padding: 4rem;
            margin-top: 1rem;
            flex:1;

            p{
                line-height: 1.5em;
                text-align: justify;
            }
        }
    }

    .bodyAbout {
        height: 62vh;
        background-color:#fc5c65;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
      

        align-items: center;
        justify-content: center;

        .containerBodyAbout {
            width: 1200px;
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-start;
            justify-content: space-between;
            height: 62vh;
           


            .avatarAbout {
              
                img {
                    width: 550px;
                    height: 640px;
                    position:absolute;
                    top: 320px;
                    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                    border-radius: 2px;
                    transition: all 0.3s ease;
                    transform: scale(1.0);

                    &:hover {
                        transform: scale(1.05);
                        transition: all 0.3s ease;
                    }
                }
            }
    
    
            .bodyAboutDescription {
                height: 30vh;
                margin-top: 5rem;
                width: 600px;
               
                display: flex;
                flex-flow: column nowrap;

                color: white;

                h1{
                    font-weight: 400;
                    font-size: 2.2em;
                    margin-bottom: 2rem;
                }
                p {
                    font-size: 1.2em;
                    text-align: justify;
                    line-height: 1.5em;
                }
            }
        }
        

    
    }
`


export default function Sobre() {
    return (
        <div>
            <Navbar/>

            <ContainerAbout>
                <div className="headerAbout">

                    <div className="titleAbout">
                        <div className="barAbout">

                        </div>
                        <h1>SOBRE MIM</h1>
                    </div>

                    <div className="descriptionAbout">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>

                <div className="bodyAbout">
                    <div className="containerBodyAbout">

                    <div className="avatarAbout">
                        <img src={"/img/about.jpeg"} alt="avatar"/>
                    </div>

                    <div className="bodyAboutDescription">
                        <h1>QUEM É A MAYUMI?</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                </div>
            </ContainerAbout>

            <FooterAbout/>
        </div>
    )
}
