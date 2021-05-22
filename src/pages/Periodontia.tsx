import {Container, Description, DescHeader, ContainerBody, Desc, TextContainer, Bar,
    ContainerProfissionais, CardProfissional, ContainerCards} from '../styles/styles.tratamentos'
    import {GlobalStyle} from  '../global'
    import {Navbar} from '../components/Navbar/index'
    import {Footer} from '../components/Footer/Footer'
    
    export default function Periodontia(){
    
        return (
            
            <Container>
                <Navbar/>
                <GlobalStyle/>
    
                <Description>
                    <DescHeader>    
                        <h1>PERIODONTIA</h1>
                        <h6>Periodontia é uma especialidade da Odontologia que cuida de tudo que fica ao redor dos dentes. Gengivas, osso e ligamento periodontal são as estruturas nobres da Periodontia.</h6>
                    </DescHeader>
                </Description>
    
    
                <ContainerBody>
                <Desc>
                    <h1>CONHEÇA O TRATAMENTO</h1>
                    <TextContainer>

                            <p>Periodontia ou periodontologia (peri: em volta de, Odonto: dente) é a ciência que estuda e trata as doenças do sistema de implantação e suporte dos dentes. Este aparelho é formado por osso alveolar, 
                                ligamento periodontal e cemento. As alterações patológicas do periodonto são chamadas doenças periodontais, como, placa bacteriana, gengivite, periodontite.</p>
                            
                                <p>A função do periodonto é a inserção do dente ao tecido ósseo dos maxilares e conservar a superfície da mucosa mastigatória da cavidade bucal. O periodonto também é chamado de aparato de inserção ou de tecido suporte do dente e estabelece uma unidade funcional biológica e evolutiva que sofre modificações com a idade e com relação às modificações do meio bucal.</p>
                            
            
                    </TextContainer>
    
                    <Bar/>
    
                    <ContainerProfissionais>
                       
                            <h1>PROFISSIONAIS</h1>
                    
                        <ContainerCards>
    
                        
                        <CardProfissional>
                        <img className="avatar" src="/img/avatar/eder.jpg"/>
                        <div className="descAvatar">

                        
                        <h4>DR. EDER MASSASHI YASHIKI</h4>
                        <h6>CRO.SP - 69976</h6>
                        <button type="button"><img src="/img/socialMedia/callwhite.png"/>LIGUE E AGENDE</button>

                        </div>
                        </CardProfissional>
    
                        </ContainerCards>
                    </ContainerProfissionais>
                </Desc>
                </ContainerBody>
                <Footer/>
                <img src="/img/socialMedia/whatsappfloat.png" className="iconFloat"/>
            </Container>
    
        )
    
    
    }