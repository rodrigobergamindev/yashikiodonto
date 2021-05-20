    import {Container} from '../styles/styles.contato'
    import {GlobalStyle} from  '../global'
    import {Navbar} from '../components/Navbar/index'
    import {Footer} from '../components/Footer/Footer'
    
    export default function Contato(){
    
        return (
            
            <Container>
                
                <GlobalStyle/>
    
                <div className="containerBody">
                    <div className="lateralCard">
                        <h4>Yashiki Odontologia</h4>

                        <h6>RUA ALFREDO MOREIRA PINTO, 138 - ITAIM PAULISTA - SÃO PAULO, SP</h6>

                        <h6>(11) 2561-3326</h6>
                        <h6>contato@dredermassashi.com.br</h6>

                        <ul className="socialMedia">
                            <li>Facebook</li>
                            <li>Instagram</li>
                        </ul>

                        <button type="button">Ligue e agende</button>
                    </div>

                    <div className="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14635.539047600041!2d-46.4005213!3d-23.5006599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6286e0a120532f40!2sDentista%20-%20Dr.Eder%20Massashi!5e0!3m2!1spt-BR!2sbr!4v1621483896591!5m2!1spt-BR!2sbr" width="500" height="350" style={{border:0}}  loading="lazy"></iframe>
                    </div>
                </div>
                <Footer/>
            </Container>
    
        )
    
    
    }