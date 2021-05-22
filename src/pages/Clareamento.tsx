import {Container, Description, DescHeader, ContainerBody, Desc, TextContainer, Bar,
    ContainerProfissionais, CardProfissional, ContainerCards} from '../styles/styles.tratamentos'
    import {GlobalStyle} from  '../global'
    import {Navbar} from '../components/Navbar/index'
    import {Footer} from '../components/Footer/Footer'
    
    export default function Clareamento(){
    
        return (
            
            <Container>
                <Navbar/>
                <GlobalStyle/>
    
                <Description>
                    <DescHeader>    
                        <h1>CLAREAMENTO</h1>
                        <h6>Procedimento odontológico que visa recuperar ou melhorar a pigmentação dos dentes</h6>
                    </DescHeader>
                </Description>
    
    
                <ContainerBody>
                <Desc>
                    <h1>CONHEÇA O TRATAMENTO</h1>
                    <TextContainer>

                            <h4>O QUE É O CLAREAMENTO DENTAL?</h4>
    
                            <p>É a técnica que utiliza agentes clareadores para recuperar a cor original dos dentes, perdida em algum momento 
                                durante a vida em decorrência de diferentes fatores. Promove também o clareamento dos dentes originalmente mais escurecidos..</p>
                            
                                <h4>QUAIS OS TIPOS DE CLAREAMENTO?</h4>
                                <p>Existem basicamente dois tipos de clareamento dental:</p>

                            <p><strong>Clareamento Caseiro:</strong> a maior parte do tratamento é realizada pelo próprio paciente, 
                            o qual utiliza o agente químico dentro de uma moldeira adaptável aos dentes. Estes materiais são fornecidos 
                            pelo cirurgião-dentista, que irá supervisionar o tratamento através de visitas periódicas do paciente ao consultório..</p>
                            
                            <p><strong>Clareamento realizado no consultório:</strong> o dentista irá aplicar sobre os dentes um agente químico oxidante bem mais potente. 
                            Durante a aplicação, a gengiva, lábios e bochechas são protegidos de forma que o clareador não provoque queimaduras. Sobre o clareador é aplicada uma 
                            fonte de energia ativadora que pode ser luz halógena ou determinados tipos de laser que intensificarão o clareamento. Dessa forma, o clareamento é realizado 
                            em apenas uma sessão..</p>

                            <h4>EM QUAIS CASOS O PROCEDIMENTO É INDICADO ?</h4>

                            <p>A busca pela estética é um fator de muita influência sobre o comportamento das 
                                pessoas nos dias de hoje. Técnicas restauradoras e protéticas mais modernas visam, além da 
                                reabilitação da função mastigatória, a recuperação do fator estético. 
                                Nessa perspectiva, o clareamento dental se torna um importante instrumento a fim de proporcionar a satisfação do paciente em seu tratamento.</p>
                            
            
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
    
                        <CardProfissional>
                        <img className="avatar" src="/img/avatar/beatriz.jpg"/>
                        <div className="descAvatar">

                        
                        <h4>BEATRIZ MAYUMI YASHIKI</h4>
                        <h6>CRO.SP - 124820</h6>
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