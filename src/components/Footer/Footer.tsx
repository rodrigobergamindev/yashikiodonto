import styled from 'styled-components';




const SocialMediaList = styled.div`
    flex:1;

    display: flex;
    justify-content: flex-start;
    width: 1200px;

    flex-flow: column nowrap;

    p { 
        margin-bottom: 5px;
        font-size: 1.1em;
    }

    ul {
        list-style: none;
        display:flex;


        li{ 
        margin-right:20px;
        cursor: pointer;
        
        img {
            width: 20px;
            height: 20px;
        }
    }
  

`

const StyledFooter = styled.footer`

    display:flex;
    height: 60vh;
    background-color: #fc5c65;
    color: white;
    flex-direction: column;
    font-family:'Jaldi', sans-serif;
    align-items: center;
    justify-content: center;


    h3 {
        display:flex;
        align-items: center;
        justify-content:flex-start;
        width: 1200px;
        font-weight: 400;
        font-size: 1.4em;
        margin-bottom: 2rem;
        margin-top:10rem;
        
    }

    .containerFooter {

        width: 1200px;
        display: flex;
        align-items: flex-start;
        height: 500px;
        justify-content:flex-start;

        height: 250px;


        .item {
            display:flex;
            flex-flow: column wrap;
            flex:1;
            width: 450px;
            


            h4{
                font-size: 1.2em;
            }
            ul {
                list-style-type: none;

                li{
                    margin-top: 2px;
                }
            }
        }
    }
`

export default function Footer() {
    return (
        <StyledFooter>

            <h3>LOJINHA DA MAYUMI</h3>

            <div className="containerFooter">
                <div className="item">
                    <h4>Formas de Pagamento</h4>
                    <ul>
                        <li>Pix</li>
                        <li>Cartão de Crédito (PicPay)</li>
                        <li>Boleto (parcelamento)</li>
                        <li>Transfêrencia bancária</li>
                    </ul>
                </div>

                <div className="item">
                    <h4>Produtos</h4>

                    <ul>
                        <li>Berloques</li>
                        <li>Pulseiras</li>
                        <li>Argolas</li>
                    </ul>
                </div>
            </div>

            <SocialMediaList>
                    <p>Siga-nos</p>
                    <ul>
                        <li><img src={"img/instagram.svg"}/></li>
                        <li><img src={"img/tiktok.svg"}/></li>
                        <li><img src={"img/facebook.svg"}/></li>
                        <li><img src={"img/whatsapp.svg"}/></li>
                    </ul>
                </SocialMediaList>
    
        </StyledFooter>
    )
}
