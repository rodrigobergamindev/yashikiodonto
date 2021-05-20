import styled from 'styled-components';



export const Container = styled.div`

    display:flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    h1 {
        font-weight: 600;
        color: var(--primary);
    }
`


export const ContainerBody = styled.div`

    display:flex;
    
`


export const ContainerContato = styled.div`
    margin-top: 5rem;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-bottom: 5rem;
   

    padding: 2rem;

    h1 {
        margin-bottom: 2rem;
    }
   

`

export const LateralCard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin-right: 6rem;
    padding: 1rem;
    max-width: 15rem;

    button {
      padding: 0.4rem;
 
      background: var(--primary);
      display: flex;
      justify-content: space-around;
      width: 11rem;
      border: none;
      color: var(--secondary);
      border-radius: 4px;
      outline: none;
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

    .title{
        
        height: 7rem;
        display: flex;
        flex-direction: column;
        justify-content:space-around;

        h4 {
            color: var(--primary);
            font-size: 1.2rem;
        }

        h6 {
            font-weight: 400;
            font-size: 0.9rem;
        }
    }

    .contato {
        display: flex;
        flex-direction: column;

        h6{
            font-weight: 400;
            font-size: 0.9rem;
        }
    }

    .socialMedia {
        display: flex;
        margin-top: 1rem;
        justify-content:flex-start;
        list-style-type: none;
        
        li {
            margin-right: 1rem;

            .facebook {
                width: 1.9rem;
            height: 1.9rem;
            }
        }

        img {
            width: 1.8rem;
            height: 1.8rem;
            &:hover {
                cursor: pointer;
            }
        }
    }
`