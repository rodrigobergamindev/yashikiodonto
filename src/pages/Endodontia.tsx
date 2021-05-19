import {Container, Description, DescHeader, ContainerBody, Desc, TextContainer, Bar,
ContainerProfissionais, CardProfissional, ContainerCards} from '../styles/styles.endodontia'
import {GlobalStyle} from  '../global'
import {Navbar} from '../components/Navbar/index'
import {Footer} from '../components/Footer/Footer'

export default function Endodontia(){

    return (
        
        <Container>
            <Navbar/>
            <GlobalStyle/>

            <Description>
                <DescHeader>    
                    <h1>ENDODONTIA</h1>
                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h6>
                </DescHeader>
            </Description>


            <ContainerBody>
            <Desc>
                <h1>CONHEÇA O TRATAMENTO</h1>
                <TextContainer>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of 
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of 
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </TextContainer>

                <Bar/>

                <ContainerProfissionais>
                   
                        <h1>PROFISSIONAIS</h1>
                
                    <ContainerCards>

                    
                    <CardProfissional>
                        <img src="/img/avatar/eder.jpg"/>
                        <div className="descAvatar">

                        
                        <h4>EDER MASSASHI YASHIKI</h4>
                        <h6>CRO.SP - 67976</h6>

                        </div>
                    </CardProfissional>

                    <CardProfissional>
                        <img src="/img/avatar/beatriz.jpg"/>
                        <div className="descAvatar">

                        
                        <h4>BEATRIZ MAYUMI YASHIKI</h4>
                        <h6>CRO.SP - 9999</h6>

                        </div>
                    </CardProfissional>
                    </ContainerCards>
                </ContainerProfissionais>
            </Desc>
            </ContainerBody>
            <Footer/>
        </Container>

    )


}