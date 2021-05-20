import {Container, Description, DescHeader, ContainerBody, Desc, Bar,
   ContainerTratamentos, CardTratamento} from '../styles/styles.corpoclinico'
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
    
    
                <ContainerBody style={{maxWidth:'80rem'}}>
                <Desc>
                    <h1 style={{marginBottom: '1rem', alignSelf:'center', color:'var(--primary)'}}>NOSSOS PROFISSIONAIS</h1>
                    <Bar style={{marginBottom: '2rem', height: '0.5rem', alignSelf:'center', background:'var(--primary)'}}/>
                    
                    <ContainerTratamentos>
                        
                        <a href="/DrEder">
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
                                <h3 className="especialidade">
                                    Especialidade
                                </h3>

                                <ul>
                                <li>Especialização em Endodontia pela Faculdade FAOA</li>
                                <li>Especialização em Harmonização Orofacial pela faculdade</li>
                                </ul>
                            </div>
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