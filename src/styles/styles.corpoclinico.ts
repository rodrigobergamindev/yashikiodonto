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
    height: 30rem;
    
    background-image: url("/img/tratamentos/tratamento.png");
    background-size: cover;
    background-attachment: fixed;
   
 
`

export const DescHeader = styled.div`
   
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    max-width: 60rem;

    h1 {
        color: var(--secondary);
        font-size: 5rem;
    }

    h6 {
        text-align: justify;
        align-self: center;
        max-width: 30rem;
        padding: 0.2rem;
        color: var(--secondary);
        font-size: 0.8rem;
        font-weight: 400;
        background-color: var(--primary);
        padding: 1rem;
        line-height: 1.2rem;
        box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.15);
        transition: all 0.3s ease;

        &:hover{
            transition: all 0.3s ease;
            cursor: pointer;
            transform: scale(1.1);
        }
    }

    h4 {
        max-width: 50rem;
        font-size: 1.4rem;
        text-align: center;
        background-color: var(--primary);
        padding: 0.4rem;
        color: var(--secondary);
        font-weight: 400;
    }
`

export const ContainerBody = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 50rem;
    align-self: center;
    padding: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;

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

    h4{
        margin-top: 2rem;
    }

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
        
        margin-top: 1rem;
    }


`

export const ContainerCards = styled.div`

    display: flex;
    justify-content:space-between;
    margin-top: 2rem;
    align-items: center;
    max-width: 80rem;
  
    
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

    h6{
        font-weight: 400;
    }

    h4 {

        font-size: 0.8rem;
    }


    button {
      padding: 0.4rem;
 
      background: var(--primary);
      display: flex;
      justify-content: space-around;
      
      border: none;
      color: var(--secondary);
      border-radius: 4px;
      max-width: 10rem;
      box-shadow: none;
      transition: 0.3s linear;
      font-size: 0.9rem;

      img {
        width: 1.2rem;
        height: 1.2rem;
      }

      &:hover {
        opacity: 0.9;
      }
    }

   
    }



    .avatar {
        border: 1px solid #dcdde1;
        border-radius: 50rem;
        width: 6rem;
        height: 5.8rem;
    }

`


export const ContainerTratamentos = styled.div`

    display: flex;
    flex-flow: row wrap;
    justify-content:space-between;

    
    

`

export const CardTratamento = styled.div`

    display:flex;
    align-items: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    border-radius: 5px;
    border: 1px solid #dcdde1; 
    padding: 2rem;
    
    .descTratamento {
        
        display:flex;
        flex-direction: column;
        padding: 1.5rem;
        
        
        h4, h6 {
        letter-spacing: 0.5px;
        
        
    }

    h6{
        font-weight: 400;
        max-width: 15rem;
        text-align: justify;
        margin-top: 0.5rem;
        
    }
    h4 {
        font-size: 0.8rem;
    }


   
    }



    img {
        border: 1px solid #dcdde1;
        padding: 0.5rem;
        border-radius: 50rem;
        width: 6rem;
        height: 5.8rem;
    }

    transition: 0.3s ease-in-out;
    &:hover{
        cursor: pointer;
        transition: 0.3s ease-in-out;
        transform: scale(1.1)
    }

`