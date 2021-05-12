import React from "react";
import Navbar from "../components/Navbar/Navbar";
import styled from 'styled-components';
import Footer from "../components/Footer/Footer";

const ContainerProduct = styled.div`
        margin-top: 4rem;
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
        margin-bottom: 5rem;
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
        display:flex;
        align-items: flex-start;
        flex-flow: column nowrap;

        

`

const ImgAvatar = styled.img`
        width: 380px;
        height: 350px;
        z-index:1;

        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        border-radius: 3px;
        transition: all 0.3s ease;
        transform: scale(1.0);

        &:hover {
            transform: scale(1.05);
            transition: all 0.3s ease;
                }
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
`

const Description = styled.div`
        height:100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
                
        h1 {
            font-size: 2.2em;
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

export default function Produtos() {
    return (
        <div>
           <Navbar/>
           <ContainerProduct>

                <ContainerContent>

                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/catalogs/envernizados.jpeg'}/>
                            <BackgroundImageProduct/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>Berloques Envernizados</h1>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <a href="https://drive.google.com/file/d/1DdEQARLv6uqQQJPGncpHA_7Y_PupTPgf/view?usp=sharing" target="_blank"><button>Consulte o catálogo</button></a>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>



                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/catalogs/banhado.jpeg'}/>
                            <BackgroundImageProduct/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>Berloques Banhados</h1>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <a href="https://drive.google.com/file/d/1RpPC1TR_Dq99QCyPf8Bb2MYouXXlsLzm/view?usp=sharing" target="_blank"><button>Consulte o catálogo</button></a>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>



                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/catalogs/niquel.jpeg'}/>
                            <BackgroundImageProduct/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>Berloques em Níquel</h1>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <a href="https://drive.google.com/file/d/1He2SG7yrH_APBWKfLQ8sbp46nitvbY5T/view?usp=sharing" target="_blank"><button>Consulte o catálogo</button></a>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>




                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/catalogs/pulseiras.jpeg'}/>
                            <BackgroundImageProduct/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>Pulseiras, Braceletes e Travas</h1>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <a href="https://drive.google.com/file/d/1Au_1vcOvM_DSm686KKpyBsvuuAg93qyY/view?usp=sharing" target="_blank"><button>Consulte o catálogo</button></a>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>



                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/catalogs/muranos.jpeg'}/>
                            <BackgroundImageProduct/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>Muranos</h1>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <a href="https://drive.google.com/file/d/1WEDmwG9UwfQn3B5OJb8X6gKewbQ08W-v/view?usp=sharing" target="_blank"><button>Consulte o catálogo</button></a>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>

                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/catalogs/argolas.jpeg'}/>
                            <BackgroundImageProduct/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>Argolas</h1>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <a href="https://drive.google.com/file/d/14Qts8zYV_0S_lbeXEzH02PD1iXfdXQZm/view?usp=sharing" target="_blank"><button>Consulte o catálogo</button></a>
                            </Description>        

                        </ContainerDesc>


                        </ContentProduct>

                </ContainerContent>
                

           </ContainerProduct>

           <Footer/>
        </div>
    )
}
