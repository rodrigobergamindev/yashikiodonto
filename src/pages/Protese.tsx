import {Container, Description, DescHeader, ContainerBody, Desc, TextContainer, Bar,
    ContainerProfissionais, CardProfissional, ContainerCards} from '../styles/styles.tratamentos'
    import {GlobalStyle} from  '../global'
    import {Navbar} from '../components/Navbar/index'
    import {Footer} from '../components/Footer/Footer'
    
    export default function Protese(){
    
        return (
            
            <Container>
                <Navbar/>
                <GlobalStyle/>
    
                <Description>
                    <DescHeader>    
                        <h1>PRÓTESE DENTÁRIA</h1>
                        <h6>Prótese Dentária é a especialidade que tem como objetivo a reconstrução dos dentes parcialmente destruídos ou a reposição de dentes ausentes</h6>
                    </DescHeader>
                </Description>
    
    
                <ContainerBody>
                <Desc>
                    <h1>CONHEÇA O TRATAMENTO</h1>
                    <TextContainer>

                            <p>A prótese dentária é uma substituição dos dentes que foram perdidos devido à destruição coronária ou a 
                                restauração de dentes que foram submetidos a um tratamento de canal, conferindo maior resistência ao dente. 
                                A restauração através da prótese fixa dentária pode restabelecer apenas um dente, uma prótese fixa unitária, 
                                ou vários dentes, chamada de ponte fixa ou prótese parcial fixa.</p>
                            
                                <h4>A PRÓTESE DENTÁRIA É DURÁVEL?</h4>
                                <p>A durabilidade de uma prótese fixa dentária depende de inúmeros fatores, entre eles a experiência e a 
                                    habilidade do cirurgião dentista e o seu conhecimento da especialidade protética. Também deve ser considerada a 
                                    qualidade dos materiais de uso da clínica odontológica nas etapas de preparo, moldagem e cimentação da prótese fixa dentária. 
                                    Outro fator é a qualidade dos materiais utilizados na confecção da prótese fixa dentária pelo laboratório protético. 
                                    Esses fatores estão diretamente ligados ao profissional da área. Outros fatores como a higiene bucal do paciente e os seus cuidados, 
                                    e a frequência das consultas periódicas para a manutenção da prótese fixa dentária e dos tecidos que a apoiam devem ser levados em consideração. Nesses casos, uma prótese fixa dentária, seja ela parcial ou unitária, tem um prognostico de durabilidade muito boa, de no mínimo 10 anos.</p>


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