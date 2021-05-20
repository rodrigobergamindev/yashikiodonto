import {Container, Description, DescHeader, ContainerBody, Desc, TextContainer, Bar,
    ContainerProfissionais, CardProfissional, ContainerCards} from '../styles/styles.tratamentos'
    import {GlobalStyle} from  '../global'
    import {Navbar} from '../components/Navbar/index'
    import {Footer} from '../components/Footer/Footer'
    
    export default function Limpeza(){
    
        return (
            
            <Container>
                <Navbar/>
                <GlobalStyle/>
    
                <Description>
                    <DescHeader>    
                        <h1>LIMPEZA DENTAL</h1>
                        <h6>A limpeza dental auxilia na remoção da placa e do tártaro sobre os dentes, por meio de escovas rotatórias e pasta profilática.</h6>
                    </DescHeader>
                </Description>
    
    
                <ContainerBody>
                <Desc>
                    <h1>CONHEÇA O TRATAMENTO</h1>
                    <TextContainer>

                            <p>O processo da limpeza no consultório consiste na remoção da placa e do tártaro sobre os dentes, por meio de escovas rotatórias e pasta profilática, instrumentos manuais ou por meio do aparelho de ultrassom odontológico. É sempre importante comunicar o dentista de seu histórico médico, pois apesar de ser um procedimento seguro, dependendo do caso, se faz necessário a utilização de uma profilaxia antibiótica prévia em caso de histórico de endocardite bacteriana, para evitar a disseminação das bactérias por via circulatória. Outras situações importantes são os casos de uso de marcapasso, quando é melhor optar pela raspagem com instrumentos manuais porque o ultrassom causa a despolarização do dispositivo.</p>
                            
                                <p>Em geral, por melhor que seja sua higiene bucal, é importante um acompanhamento odontológico para detectar a presença de tártaro e cáries. A limpeza dental no dentista deve ser feita com uma frequência de seis meses, nos casos em que há um bom controle de placa dental por parte do paciente. Já nos casos de doença periodontal, o paciente precisa conversar com o dentista para realizar as raspagens do tártaro com uma frequência maior, como a cada três meses, para que o problema se estabilize, sem que haja mais perdas ósseas.</p>
                            
            
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