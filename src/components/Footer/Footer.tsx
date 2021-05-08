import styled from 'styled-components';




const StyledFooter = styled.footer`

    height: 80vh;
    background-color:#fc5c65;

    display:flex;
    align-items: center;
    justify-content: center;
    color: white;


    .containerFooter {
        display:flex;
        align-items: flex-start;
        justify-content: center;
        flex-flow: column nowrap;
        width: 1200px;
       


        .titleFooter {
            padding: 1rem;
        }
    
        .containerItems {
            padding: 1rem;
            
            width: 100%;
            
            display:flex;
            flex-flow: row nowrap;
            align-items: flex-start;
            justify-content: space-between;

            .columnFooter {
                display:flex;
                flex-flow: column nowrap;
                align-items: flex-start;
                justify-content: flex-start;

                p {
                    width: 180px;
                    line-height: 1.2em;
                }

                ul {
                    list-style: none;
                    display:flex;
                    flex-flow: column nowrap;
                    justify-content: space-between;

                }
            }
        }

    }

    
`

export default function Footer() {
    return (
        <StyledFooter>
            <div className="containerFooter">
            <div className="titleFooter">
                    <h1>LOJINHA DA MAYUMI</h1>
                </div>
            <div className="containerItems">
                

                <div className="columnFooter">
                    <h3>Produtos</h3>

                    <ul>
                        <li>Berloques</li>
                        <li>Pulseiras</li>
                        <li>Argolas</li>
                        <li>Muranos</li>
                    </ul>
                </div>

                <div className="columnFooter">
                    <h3>Fale Conosco</h3>
                    <ul>
                        <li>SAC</li>
                        <li>Vendas</li>
                        <li>Suporte</li>
                    </ul>
                </div>

                <div className="columnFooter">
                    <h3>Siga-nos</h3>

                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>TikTok</li>
                        <li>WhatsApp</li>
                    </ul>
                </div>

                <div className="columnFooter">
                    <h3>Formas de Pagamento</h3>

                    <ul>
                        <li>Pix</li>
                        <li>Cartão de Crédito</li>
                        <li>Transferência Bancária</li>
                        <li>Boleto (parcelamento)</li>
                    </ul>
                </div>

                <div className="columnFooter">
                    <h3>Horário de Funcionamento</h3>
                    <p>24 horas por dia de Segunda a Domingo</p>

                    <h3 style={{marginTop:'40px'}}>São Paulo, SP - Brasil</h3>
                </div>
            </div>
            </div>
            
            
    
        </StyledFooter>
    )
}
