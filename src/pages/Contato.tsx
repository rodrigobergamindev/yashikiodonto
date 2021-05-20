    import {Container, ContainerContato, ContainerBody, LateralCard} from '../styles/styles.contato'
    import {GlobalStyle} from  '../global'
    import {Navbar} from '../components/Navbar/index'
    import {Footer} from '../components/Footer/Footer'
    
    export default function Contato(){
    
        return (
            
            <Container>
                <Navbar/>
                <GlobalStyle/>
                <ContainerContato>
                <h1>ONDE ESTAMOS?</h1>
                <ContainerBody>
                    <LateralCard>
                        <div className="title">
                            <h4>Yashiki Odontologia</h4>

                            <h6>RUA ALFREDO MOREIRA PINTO, 138 - ITAIM PAULISTA - SÃO PAULO, SP</h6>

                        </div>
                        
                        <div className="contato">
                        <h6>Telefone: (11) 2561-3326</h6>
                        <h6>contato@dredermassashi.com.br</h6>

                        <ul className="socialMedia">
                            <li><img className="facebook" src="/img/socialMedia/facebookcolor.png"/></li>
                            <li><img src="/img/socialMedia/instagramcircular.png"/></li>
                        </ul>

                        </div>
            

                        <button type="button"><img src="/img/socialMedia/callwhite.png"/>LIGUE E AGENDE</button>
                    </LateralCard>

                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14635.539047600041!2d-46.4005213!3d-23.5006599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6286e0a120532f40!2sDentista%20-%20Dr.Eder%20Massashi!5e0!3m2!1spt-BR!2sbr!4v1621483896591!5m2!1spt-BR!2sbr" width="500" height="350" style={{border:0}}  loading="lazy"></iframe>
                    
                </ContainerBody>
                </ContainerContato>
                <Footer/>
            </Container>
    
        )
    
    
    }