import {Container, Description, DescHeader, ContainerBody, Bar,
   ContainerTratamentos, CardTratamento, ContainerAbout} from '../styles/styles.corpoclinico'
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
                        <h1>CORPO CLÍNICO</h1>
                        <Typical
                    steps={[frase, 5000]}
                    loop={Infinity}
                    wrapper="h4"
                    />
                       
                    </DescHeader>
                </Description>
    
    
                <ContainerBody>
               
                    <h1 style={{marginBottom: '1rem', alignSelf:'center', color:'var(--primary)'}}>NOSSOS PROFISSIONAIS</h1>
                    <Bar style={{width: '10rem', marginBottom: '2rem', height: '0.5rem', alignSelf:'center', background:'var(--primary)'}}/>
                    
                    <ContainerTratamentos>
                        
                            <CardTratamento>
                                <div className="avatar">
                                    <img src="/img/avatar/eder.jpg"/>
                                </div>
                            

                            <div className="descTratamento">
    
                            <div className="titleCard">
                            <h3>DR. EDER MASSASHI YASHIKI</h3>
                            <h6>CRO.SP - 67976</h6>
                            </div>

                            <div className="descCurriculo">
                                <h3>Formação Profissional</h3>
                                <ul>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing </li>
                                </ul>

                                <div className="especialidade">
                                <h3>
                                    Especialidade
                                </h3>

                                <ul>
                                <li>Lorem Ipsum is simply dummy text of the printing</li>
                                <li>Lorem Ipsum is simply dummy text of the printing,simply  </li>
                                </ul>
                                </div>
                                
                            </div>
                            </div>

                                <div className="rodape">

                                
                                <ul className="socialMedia">
                                    <li><img src="/img/socialMedia/instagramcircular.png"/></li>
                                    <li><img src="/img/socialMedia/facebookcolor.png"/></li>
                                    <li><img src="/img/socialMedia/whatsappcolor.png"/></li>
                                </ul>

                                <button type="button"><img src="/img/socialMedia/callwhite.png"/>AGENDE SUA CONSULTA</button>
                            </div>
                        </CardTratamento>

                        <CardTratamento>
                                <div className="avatar">
                                    <img src="/img/avatar/beatriz.jpg"/>
                                </div>
                            

                            <div className="descTratamento">
    
                            <div className="titleCard">
                            <h3>DRA. BEATRIZ MAYUMI YASHIKI</h3>
                            <h6>CRO.SP - 124820</h6>
                            </div>

                            <div className="descCurriculo">
                                <h3>Formação Profissional</h3>
                                <ul>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing </li>
                                    <li>Lorem Ipsum is simply dummy text of the printing </li>
                                    <li>Lorem Ipsum is simply dummy text of the printing </li>
                                </ul>

                                <div className="especialidade">
                                <h3>
                                    Especialidade
                                </h3>

                                <ul>
                                <li>Especialização em Endodontia pela Faculdade FAOA</li>
                                <li>Especialização em Harmonização Orofacial pelo instituto IBOP</li>
                                </ul>
                                </div>
                                
                            </div>
                            </div>

                                <div className="rodape">

                                
                                <ul className="socialMedia">
                                    <li><img src="/img/socialMedia/instagramcircular.png"/></li>
                                    <li><img src="/img/socialMedia/facebookcolor.png"/></li>
                                    <li><img src="/img/socialMedia/whatsappcolor.png"/></li>
                                </ul>

                                <button type="button"><img src="/img/socialMedia/callwhite.png"/>AGENDE SUA CONSULTA</button>
                            </div>
                        </CardTratamento>
                    </ContainerTratamentos>


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