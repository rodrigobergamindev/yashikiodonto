import React from "react";
import Navbar from "../components/Navbar/Navbar";
import styled from 'styled-components';
import Footer from "../components/Footer/Footer";
import Head from 'next/head'

const ContainerProduct = styled.div`
        margin-top: 4rem;
        display:flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 931px) {
            
            flex-flow: column wrap;
            
          }


`

const ContainerContent = styled.div`

           
        padding:2rem;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-flow: column nowrap;

        @media (max-width: 931px) {
            flex-flow: column wrap;
            
          }
        

`

const ContentProduct = styled.div`
        
        padding: 2rem;
        display:flex;
        align-items: flex-start;
   
        justify-content: space-between;

        @media (max-width: 931px) {
            padding:0;
            margin-bottom: 4rem;
            
            flex-flow: column wrap;
            
          }
`


const ContainerDesc = styled.div`
        width: 600px;
        height: 450px;
        display:flex;
        align-items: flex-start;
        flex-flow: column nowrap;
        padding: 2rem;

        @media (max-width: 931px) {
            padding:0;
            margin: 0;
            width: auto;
            height: auto;
            flex-flow: column wrap;
          }

`

const ContainerAvatar = styled.div`

      
        width: 450px;
        height: 450px;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-flow: column nowrap;

        @media (max-width: 931px) {
            display: none;
          }

        

`

const ImgAvatar = styled.img`
        width: 300px;
        height: 300px;
        z-index:1;

        @media (max-width: 931px) {
            display: none;
          }    
`

const BarDesc = styled.div`
        width: 100px;
        height: 10px;
        background: #fc5c65;
        margin-bottom: 1rem;
`

const Description = styled.div`
        height:300px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;

        @media (max-width: 931px) {
            flex-flow: column wrap;
            height: auto;
          }
                
        h1 {
            font-size: 2em;
            
        }

        img {
            display: none;
            @media (max-width: 931px) {
                display: flex;
                width: 100%;
                height: 310px;
                margin-bottom: 2rem;
              }
            
        }


        p {
           
            font-size: 1.2em;
            line-height: 1.3em;
            text-align: justify;

            ul {
                list-style-type: square;
                padding: 2rem;
            }
        }

        button {
            width:200px;
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
            <Head>
            <title>Pagamentos</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
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

                            <p>Prezamos muito pela sua experiência, por isso prestamos um atendimento personalizado e individual para cada cliente,
                                entendemos que cada uma de vocês pensa de uma forma diferente e por isso estamos a sua disposição para te ajudar no processo de escolha das peças.
                            </p>
                            <img src={'/img/pagamento/comopedir.png'}/>
                            <a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1!%20Me%20ajuda%20a%20fazer%20meu%20pedido%3F" target="_blank"><button>Faça seu Pedido</button></a>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>



                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/pagamento/pagamentos2.png'}/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>FORMAS DE PAGAMENTO</h1>

                            <p>Trabalhamos com as seguintes formas de pagamento:

                            <ul>
                                <li>Boleto (à vista ou parcelado)</li>
                                <li>Cartão de Crédito</li>
                                <li>Pix</li>
                                <li>Transferência Bancária</li>
                                <li>PicPay</li>
                            </ul>

                            </p>
                            <img src={'/img/pagamento/pagamentos2.png'}/>
                            <a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20meios%20de%20pagamento." target="_blank"><button>Dúvidas</button></a>
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

                            <p>Se você já confirmou seu pedido e realizou o pagamento, pode ficar tranquila! Agora seu pedido será separado e enviado, o que pode levar
                                até um dia útil a depender do horário do pedido, para pedidos feitos aos domingos, serão enviados na segunda. Caso queira rastrear seu pedido,
                                é só me chamar!</p>
                                <img src={'/img/pagamento/pacote.png'}/>
                            <a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20rastreio%20do%20meu%20pedido." target="_blank"><button>Onde está meu pedido?</button></a>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>

                </ContainerContent>
                

           </ContainerProduct>

           <Footer/>
        </div>
    )
}
