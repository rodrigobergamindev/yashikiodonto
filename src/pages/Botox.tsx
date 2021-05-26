import {Container, Description, DescHeader, ContainerBody, Desc, TextContainer, Bar,
    ContainerProfissionais, CardProfissional, ContainerCards, DisplaySocialMedia} from '../styles/styles.harmonizacao'
    import {GlobalStyle} from  '../global'
    import {Navbar} from '../components/Navbar/index'
    import {Footer} from '../components/Footer/Footer'
    import { FeedHarmonizacao } from '../components/FeedHarmonizacao'
    
    export default function Botox(){
    
        return (
            
            <Container>
                <Navbar/>
                <GlobalStyle/>
    
                <Description>
                    <DescHeader>    
                        <h1>BOTOX</h1>
                        <h6>O tratamento de canal é realizado para eliminar bactérias do canal infectado, impedir a reinfecção do dente e salvar o dente natural.</h6>
                    </DescHeader>
                </Description>
    
    
                <ContainerBody>
                <Desc>
                    <h1>CONHEÇA O TRATAMENTO</h1>
                    <TextContainer>
                        <p>A polpa dentária é o tecido mole que contém nervos, vasos sanguíneos e tecido conjuntivo. 
                            Ela está localizada no interior do dente e se estende da coroa dentária à ponta da raiz dentária. 
                            A raiz dentária está inserida dentro do osso da maxila ou mandíbula. </p>
    
                            <p>Quando a polpa está doente ou sofreu lesões e não consegue se recuperar sozinha, ela necrosa. 
                                As causas mais comuns de necrose pulpar são fratura dentária ou cárie dentária profunda. 
                                Esses dois problemas podem permitir que bactérias entrem na polpa, causando uma infecção dentro do dente.</p>
    
                        <p>Se o problema não for tratado, forma-se uma coleção purulenta (pus) na ponta da raiz dentro do osso maxilar ou mandibular, 
                            chamada de abscesso. Um abscesso pode causar danos no osso ao redor do dente. Quando a polpa infectada não é removida, 
                            podem resultar dor e edema (inchaço). Alguns subprodutos da infecção podem causar lesões nos ossos maxilares. Sem tratamento, 
                            seu dente pode precisar ser extraído.</p>
    
    
                            <p>
                            O tratamento de canal, geralmente, requer de uma a três visitas. Durante o tratamento, um dentista clínico geral ou endodontista 
                            (dentista especializado em problemas da polpa) remove a polpa comprometida. A câmara pulpar e o canal radicular do dente são desinfetados e obturados.
                            </p>
    
                            <p>
                            Um dente restaurado pode durar a vida toda se você continuar a cuidar dos dentes e gengiva. Entretanto, 
                            check-ups regulares são necessários. Uma vez que a raiz dentária de um dente tratado é nutrida pelos tecidos ao seu redor, 
                            seu dente permanecerá saudável.
                            </p>
                    </TextContainer>
    
                    <Bar/>
    
                    <ContainerProfissionais>
                       
                            <h1>PROFISSIONAIS</h1>
                    
                        <ContainerCards>
    
                        
    
    
                        <CardProfissional>
                            <img className="avatar" src="/img/avatar/beatriz.jpg"/>
                            <div className="descAvatar">
    
                            
                            <h4>DRA. BEATRIZ MAYUMI YASHIKI</h4>
                            <h6>CRO.SP - 124820</h6>
                            <button type="button"><img src="/img/socialMedia/callwhite.png"/>LIGUE E AGENDE</button>
    
                            </div>
                        </CardProfissional>
                        </ContainerCards>
                    </ContainerProfissionais>
                </Desc>
                </ContainerBody>

                <DisplaySocialMedia>

                    <div className="title">
                        <a href="https://www.instagram.com/dr_edermassashi/?hl=pt-br" target="_blank"><img src="/img/socialMedia/instagramcolor.png"/></a>
                        <a href="https://www.instagram.com/dr_edermassashi/?hl=pt-br" target="_blank"><p>@dr_edermassashi</p></a>
                        <h1>ALGUNS DOS NOSSOS CASOS</h1>
                    </div>

                    <FeedHarmonizacao/>

            </DisplaySocialMedia>
                <Footer/>
                <img src="/img/socialMedia/whatsappfloat.png" className="iconFloat"/>
            </Container>
    
        )
    
    
    }