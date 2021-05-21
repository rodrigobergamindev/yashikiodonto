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
    
    background-image: url("/img/corpoclinico.png");
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
    align-self: center;
    padding: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    max-width:90rem;

    justify-content: space-between;



`


export const Bar = styled.div`
    
    height: 0.5rem;
    background-color: var(--primary);
`


export const ContainerAbout = styled.div`

    margin-top: 2rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    max-width:100%;

    h1 {
        font-size:2rem;
        color: var(--secondary);
        background-color: var(--primary);
        padding: 1rem;
        border-radius: 4px;
    
    }


    .aboutDescription {
        display: flex;
        margin-top: 2rem;

        img {
            margin-right: 4rem;
            height: 20rem;
            max-width: 20rem;
            object-fit: cover;
            box-shadow: 10px  10px  var(--primary);

        }

        .containerText{
                display: flex;
                flex-direction: column;
                justify-content:space-between;

                h4 {
                    font-size: 1.7rem;
                }
                
                p {
                    text-align:justify;
                    
                }
            }
    }


`



export const ContainerTratamentos = styled.div`

    display: flex;
    flex-flow: row wrap;
    justify-content:space-between;
    margin-top: 5rem;
    max-width: 120rem;



`

export const CardTratamento = styled.div`

    display:flex;
    align-items: center;
    margin: 2rem 3rem;
    border-radius: 5px;
    border: 1px solid #dcdde1; 
    padding: 2rem;
    flex-direction: column;
    position: relative;
    text-align:center;
    justify-content: space-between;
    
    .descTratamento {
        
        justify-content:space-between;
        display:flex;
        flex-direction: column;
        padding: 1.5rem;
        max-width: 30rem;
        
        .titleCard {
            margin-top: 3rem;
            margin-bottom: 2rem;
            h3 {
            
            font-size: 1.5rem;
            color: var(--primary);
        }
        
        
        h4, h6 {
        letter-spacing: 0.5px;
        
        
            }

            h6{
                font-weight: 400;
        
                margin-top: 0.5rem;
                font-size: 1rem;
        
        }

        }
    
    h4 {
        font-size: 0.8rem;
    }

    .descCurriculo {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;

        h3 {
            font-size: 1.1rem;
            margin-bottom: 0.3rem;
            color: var(--primary);
        }

        .especialidade {

            h3 {
            font-size: 1.1rem;
            margin-bottom: 0.3rem;
            color: var(--primary);
        }

            text-align: left;
            margin-top:1rem;
            display: flex;
            flex-direction: column;
            justify-content:flex-start;
            align-items: flex-start;

            ul {
                align-self: flex-start;
            }
        }

        

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            
            li {
                margin-top: 0.5rem;
            }
        }
    }


   
    }


    .avatar {
       
        position: absolute;
        top: -5rem;

        img {
        object-fit: cover;
        width: 9rem;
        height: 9rem;
        filter: brightness(110%);
        border-radius: 100%;
        border: 1px solid #dcdde1;
    }
    }

    .rodape {
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width:100%;
        .socialMedia {
       
        list-style: none;
        display:flex;
        width: 100%;
        align-self: flex-start;
        justify-content:flex-start;
        li {
            padding: 0.3rem;
            img {
                cursor: pointer;
                max-width: 1.5rem;
                max-height: 1.5rem;
            }
        }
    }

    button {
      padding: 0.4rem;
 
      background: var(--primary);
      display: flex;
      justify-content: space-around;
      align-items: center;
      border: none;
      color: var(--secondary);
      border-radius: 4px;
      transition: 0.3s ease;
      font-size: 0.9rem;
      max-height: 2rem;
      width: 25rem;
      img {
        width: 1.2rem;
        height: 1.2rem;
      }

      &:hover {
        opacity: 0.9;
      }
    }


    }

   

`