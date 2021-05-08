import styled from 'styled-components';




const StyledFooter = styled.footer`

    height: 70vh;
    background-color:#fc5c65;

    display:flex;
    flex-flow: column nowrap;
`

export default function Footer() {
    return (
        <StyledFooter>

            <div className="titleFooter">
                <h1>LOJINHA DA MAYUMI</h1>
            </div>
    
        </StyledFooter>
    )
}
