import styled from 'styled-components';


export const Container = styled.div`

    display:flex;
    flex-direction: column;
    width: 100%;


`

export const Description = styled.div`

    display:flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    
    background-image: url("/img/tratamentos/tratamento.png");
    background-size: cover;
    background-attachment: fixed;
   
 
`

export const DescHeader = styled.div`
   
    display:flex;
    justify-content: flex-start;
    flex-direction: column;
    


    h1 {
        color: var(--secondary);
        font-size: 5rem;
    }

    h6 {
        max-width: 30rem;
        padding: 0.2rem;
        color: var(--secondary);
        font-size: 0.8rem;
        font-weight: 400;
    }
`

export const ContainerBody = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 40rem;
    align-self: center;
    padding: 2rem;
   

`

export const Desc = styled.div`

    display:flex;
    flex-direction: column;
    align-items: flex-start;
  

`

export const TextContainer = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 40rem;

    p {
        margin-top: 2rem;
        text-align: justify;
    }
    margin-bottom: 5rem;
`

export const Bar = styled.div`

    width: 10rem;
    height: 1rem;
    background-color: #333;
`

export const ContainerProfissionais = styled.div`

    display: flex;
    flex-direction: column;
    display: flex;

        h1 {
        font-weight: 400;
        margin-top: 1rem;
    }

    


    

`

export const ContainerCards = styled.div`

    display: flex;
    
    max-width: 40rem;
    
    justify-content:space-between;
    margin-top: 2rem;
`

export const CardProfissional = styled.div`
    
    display:flex;
    align-items: center;
   
    .descAvatar {
        display:flex;
        flex-direction: column;
        padding: 1.5rem;
        
        h4, h6 {
        letter-spacing: 0.5px;
        
        
    }

    h4 {

        font-size: 0.8rem;
    }


   
    }



    img {
        border-radius: 50rem;
        width: 5rem;
        height: 5rem;
    }

`