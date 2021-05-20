import {Container, Description, DescHeader, ContainerBody, Desc, Bar,
   ContainerTratamentos, CardTratamento} from '../styles/styles.tratamentos'
    import {GlobalStyle} from  '../global'
    import {Navbar} from '../components/Navbar/index'
    import {Footer} from '../components/Footer/Footer'
    import Typical from "react-typical";

    
    export default function Tratamentos(){

        const frase = 'Possuimos um corpo clínico especializado e pronto para atender as suas necessidades.'
    
        return (
            
            <Container>
                <Navbar/>
                <GlobalStyle/>
    
                <Description>
                    <DescHeader>    
                        <h1>TRATAMENTOS</h1>
                        <Typical
                    steps={[frase, 5000]}
                    loop={Infinity}
                    wrapper="h4"
                    />
                       
                    </DescHeader>
                </Description>
    
    
                <ContainerBody style={{maxWidth:'70rem'}}>
                <Desc>
                    <h1 style={{marginBottom: '1rem', alignSelf:'center', color:'var(--primary)'}}>NOSSOS TRATAMENTOS</h1>
                    <Bar style={{marginBottom: '2rem', height: '0.5rem', alignSelf:'center', background:'var(--primary)'}}/>
                    
                    <ContainerTratamentos>
                        <a href="/Implantodontia">
                            <CardTratamento>
                            <img src="/img/icons/implante.png"/>

                            <div className="descTratamento">
    
                            
                            <h3>Implantodontia</h3>
                            <h6>Implantodontia é a especialidade da odontologia que restabelece a função de mastigação e estética perdidas, devido à ausência de um ou mais dentes.</h6>
    
                            </div>
                        </CardTratamento>
                        </a>
                        
                        <a href="/Canal">
                        <CardTratamento>
                            <img src="/img/icons/canal.png"/>

                            <div className="descTratamento">
    
                            
                            <h3>Tratamento de Canal</h3>
                            <h6>O tratamento de canal é realizado para eliminar bactérias do canal infectado, impedir a reinfecção do dente e salvar o dente natural.</h6>
    
                            </div>
                        </CardTratamento>
                        </a>


                        <a href="/Periodontia">
                        <CardTratamento>
                            <img src="/img/icons/dentalmirror.png"/>

                            <div className="descTratamento">
    
                            
                            <h3>Periodontia</h3>
                            <h6>Periodontia é uma especialidade da Odontologia que cuida de tudo que fica ao redor dos dentes. Gengivas, osso e ligamento periodontal são as estruturas nobres da Periodontia.</h6>
    
                            </div>
                        </CardTratamento>
                        </a>


                        <a href="/Protese">
                        <CardTratamento>
                            <img src="/img/icons/protese.png"/>

                            <div className="descTratamento">
    
                            
                            <h3>Protese Dentária</h3>
                            <h6>Prótese Dentária é a especialidade que tem como objetivo a reconstrução dos dentes parcialmente destruídos ou a reposição de dentes ausentes.</h6>
    
                            </div>
                        </CardTratamento>
                        </a>


                        <a href="/Extracao">
                        <CardTratamento>
                            <img src="/img/icons/tooth.png"/>

                            <div className="descTratamento">
    
                            
                            <h3>Extração</h3>
                            <h6>O procedimento de extração de dentes se trata da remoção de um ou mais dentes.</h6>
    
                            </div>
                        </CardTratamento>
                        </a>

                        <a href="/Clareamento">
                        <CardTratamento>
                            <img src="/img/icons/clareamento.png"/>

                            <div className="descTratamento">
    
                            
                            <h3>Clareamento</h3>
                            <h6>Procedimento odontológico que visa recuperar ou melhorar a pigmentação dos dentes.</h6>
    
                            </div>
                        </CardTratamento>
                        </a>


                        <a href="/Restauracao">
                        <CardTratamento>
                            <img src="/img/icons/equip.png"/>

                            <div className="descTratamento">
    
                            
                            <h3>Restauração</h3>
                            <h6>O procedimento de extração de dentes se trata da remoção de um ou mais dentes.</h6>
    
                            </div>
                        </CardTratamento>
                        </a>

                        <a href="/Limpeza">
                        <CardTratamento>
                            <img src="/img/icons/limpeza.png"/>

                            <div className="descTratamento">
    
                            
                            <h3>Limpeza</h3>
                            <h6>A limpeza dental auxilia na remoção da placa e do tártaro sobre os dentes, por meio de escovas rotatórias e pasta profilática.</h6>
    
                            </div>
                        </CardTratamento>
                        </a>

                    </ContainerTratamentos>
                </Desc>
                </ContainerBody>
                <Footer/>
            </Container>
    
        )
    
    
    }