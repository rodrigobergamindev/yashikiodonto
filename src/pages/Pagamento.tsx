import React from "react";
import Navbar from "../components/Navbar/Navbar";
import styled from 'styled-components';
import Footer from "../components/Footer/Footer";

const ContainerProduct = styled.div`

        width: 100%;
        display:flex;
        align-items: center;
        justify-content: center;


`

const ContainerContent = styled.div`

        width: 100%;    
        padding:2rem;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-flow: column nowrap;

        

`

const ContentProduct = styled.div`
        width: 1200px;
        padding: 2rem;
        display:flex;
        align-items: flex-start;
        margin-bottom: 3rem;
        justify-content: space-between;

`


const ContainerDesc = styled.div`
        width: 600px;
        height: 350px;
        display:flex;
        align-items: flex-start;
        flex-flow: column nowrap;
        padding: 2rem;

`

const ContainerAvatar = styled.div`

      
        width: 450px;
        height: 350px;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-flow: column nowrap;

        

`

const ImgAvatar = styled.img`
        width: 300px;
        height: 300px;
        z-index:1;
`

const BackgroundImageProduct = styled.div`
        width: 390px;
        height: 350px;
        position: absolute;
        margin-top: 20px;
        margin-left: 10px;

        background-color: #fc5c65;

`


const BarDesc = styled.div`
        width: 100px;
        height: 10px;
        background: #fc5c65;
        margin-bottom: 1rem;
`

const Description = styled.div`
        height:100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
                
        h1 {
            font-size: 2em;
            font-weight: 400;
            
            
        }

        p {
            color:#fc5c65;
            font-size: 1.2em;
            line-height: 1.5em;
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
            transition: 0.3s ease;

            &:hover{
                background-color: #fc5c65;
                transition: 0.3s ease;
                color: white;
            }
        }
`

export default function Pagamento() {
    return (
        <div>
           <Navbar/>
           <ContainerProduct>

                <ContainerContent>

                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/pagamento/comopedir.png'}/>
                            
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>COMO FAZER MEU PEDIDO?</h1>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <button>Faça seu Pedido</button>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>



                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/pagamento/pagamentos.png'}/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>FORMAS DE PAGAMENTO</h1>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <button>Dúvidas</button>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>

                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/pagamento/pacote.png'}/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>AGORA É COM A GENTE!</h1>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <button>Onde está meu pedido?</button>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>

                </ContainerContent>
                

           </ContainerProduct>

           <Footer/>
        </div>
    )
}
