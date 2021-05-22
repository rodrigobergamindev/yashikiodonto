import {StyledFooter} from './styles'

export function Footer() {
    return (
        <StyledFooter>
            <div className="containerFooter">
            <div className="titleFooter">
            <div className="logo">
      
      <img src="/img/logo.png"/>
      <div className="headerlogo">

     
      <h4>YASHIKI</h4>
      <h6>ODONTOLOGIA ESPECIALIZADA</h6>
      </div>
      </div>
                </div>
            <div className="containerItems">
                

                <div className="columnFooter">
                    <h3>RESPONSÁVEL TÉCNICO</h3>

                    <ul>
                        <li>DR. EDER MASSASHI YASHIKI</li>
                        <li>CRO SP - 67976</li>
                    </ul>
                </div>

                <div className="columnFooter">
                    <h3>TRATAMENTOS</h3>
                    <ul>
                        <li><a href="/Implantodontia">IMPLANTODONTIA</a></li>
                        <li><a href="/Extracao">EXTRAÇÃO</a></li>
                        <li><a href="/Restauracao">RESTAURAÇÃO</a></li>
                        <li><a href="/Clareamento">CLAREAMENTO</a></li>
                        <li><a href="/Protese">PRÓTESE</a></li>
                        <li><a href="/Limpeza">LIMPEZA</a></li>
                        <li><a href="/Canal">CANAL</a></li>
                        <li><a href="/Periodontia">PERIODONTIA</a></li>
                    </ul>
                </div>

                <div className="columnFooter">
                    <h3>SIGA-NOS</h3>

                    <ul>
                        <li><a href="https://www.instagram.com/lojinha_da_mayumi/" target="_blank">Instagram</a></li>
                        <li><a href="https://www.facebook.com/lojinhadamayumi/" target="_blank">Facebook</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" target="_blank">WhatsApp</a></li>
                    </ul>
                </div>

                <div className="columnFooter">
                    <h3>ATENDIMENTO</h3>
                    <p>Seg à Sex das 09:00 - 17:00</p>
                    <p>Sáb das 09:00 - 17:00</p>

                    <h3 style={{marginTop:'40px'}}>LOCALIZAÇÃO</h3>
                    <p>RUA ALFREDO MOREIRA PINTO, 138 - ITAIM PAULISTA - SÃO PAULO, SP</p>
                </div>
            </div>
            </div>
            
            
    
        </StyledFooter>
    )
}
