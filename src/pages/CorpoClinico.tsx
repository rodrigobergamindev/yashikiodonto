import {Container, Description, DescHeader, ContainerBody, Bar,
   ContainerProfissionais, ContainerAbout, Card} from '../styles/styles.corpoclinico'
    import {GlobalStyle} from  '../global'
    import {Navbar} from '../components/Navbar/index'
    import {Footer} from '../components/Footer/Footer'
    import Typical from "react-typical";
    import CallIcon from '@material-ui/icons/Call';
    
    export default function CorpoClinico(){

        const frase = 'Possuimos um corpo clínico especializado e pronto para atender as suas necessidades.'
    
        return (
            
            <Container>
                <Navbar/>
                <GlobalStyle/>
    
                <Description>
                    <DescHeader>    
                        <h1>CORPO CLÍNICO</h1>
                        <Typical
                    steps={[frase, 5000]}
                    loop={Infinity}
                    wrapper="h4"
                    />
                       
                    </DescHeader>
                </Description>
    
    
                <ContainerBody>
               
                    <h1 className="titleHeader">NOSSOS PROFISSIONAIS</h1>
                    
                    <ContainerProfissionais>

                        <Card>
                            <div className="avatar">
                                <img src="/img/avatar/eder.jpg"/>
                            </div>

                            <div className="description">

                                <div className="title">
                                    <h2>DR. EDER MASSASHI YASHIKI</h2>
                                    <h6>CRO.SP - 69976</h6>
                                </div>

                                <div className="about">
                                    <h3>FORMAÇÃO ACADÊMICA</h3>
                                    <ul>
                                        <li>ODONTOLOGIA PELA FACULDADE DE PRESIDENTE PRUDENTE</li>
                                        <li>CURSO DE IMPLANTODONTIA PELA INSTITUIÇÃO XXXX</li>
                                    </ul>
                                    
                                    <h3>ESPECIALIDADE</h3>
                                    <ul>
                                        <li>IMPLANTODONTIA</li>
                                    </ul>
                                </div>
                                
                                <div className="contato">
                                    <button type="button"><CallIcon className="icon"/>LIGUE E AGENDE</button>

                                    <ul className="socialMedia">
                                        <li><img src="/img/socialMedia/instagram.png"/></li>
                                        <li><img src="/img/socialMedia/whatsapp.png"/></li>
                                        <li><img src="/img/socialMedia/facebook.png"/></li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="avatar">
                                <img src="/img/avatar/beatriz.jpg"/>
                            </div>

                            <div className="description">

                                <div className="title">
                                    <h2>DRA. BEATRIZ MAYUMI YASHIKI</h2>
                                    <h6>CRO.SP - 69976</h6>
                                </div>

                                <div className="about">
                                    <h3>FORMAÇÃO ACADÊMICA</h3>
                                    <ul>
                                        <li>ODONTOLOGIA PELA UNIVERSIDADE DE MOGI DAS CRUZES</li>
                                        <li>CURSO DE HOF PELA INSTITUIÇÃO XXXX</li>
                                        <li>ESPECIALIZAÇÃO EM ENDODONTIA PELA FAOA</li>
                                        <li>ESPECIALIZAÇÃO EM HOF PELA IBOP</li>
                                    </ul>
                                    
                                    <h3>ESPECIALIDADE</h3>
                                    <ul>
                                        <li>ENDODONTIA</li>
                                        <li>HARMONIZAÇÃO OROFACIAL</li>
                                    </ul>
                                </div>
                                
                                <div className="contato">
                                <button type="button"><CallIcon className="icon"/>LIGUE E AGENDE</button>

                                    <ul className="socialMedia">
                                        <li><img src="/img/socialMedia/instagram.png"/></li>
                                        <li><img src="/img/socialMedia/whatsapp.png"/></li>
                                        <li><img src="/img/socialMedia/facebook.png"/></li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                        
                            
                    </ContainerProfissionais>


                    <ContainerAbout>

                        <h1>YASHIKI ODONTOLOGIA</h1>
                      

                        <div className="aboutDescription">

                            <img src="/img/fachada.jpg"/>


                            <div className="containerText">

                                <h4>Um pouco sobre a nossa história</h4>
                                
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                
                                </p>

                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                                
                                </p>
                            </div>  
                        </div>

                    </ContainerAbout>
                
                </ContainerBody>
                <Footer/>
            </Container>
    
        )
    
    
    }