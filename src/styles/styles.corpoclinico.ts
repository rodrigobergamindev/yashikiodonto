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
    
    background-image: url("/img/corpoclinico2.png");
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

    .titleHeader {
        font-size:2.5rem;
        color: var(--primary);
        border-bottom: 0.5rem solid var(--primary);
        
    }



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
            height: 100%;
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



export const ContainerProfissionais = styled.div`

    display: flex;
    flex-flow: column nowrap;
    justify-content:space-between;
    margin-top: 5rem;
    max-width: 120rem;
    align-items: center;

`

export const Card = styled.div`
    margin-bottom: 3rem;
    display: flex;
    max-width: 120rem;
    background-color: var(--primary);
    box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.12);


    .avatar {
        img {
            filter: brightness(115%);
            width: 20rem;
            height: 100%;
            object-fit: cover;
        }
    }

    .description {
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        align-items:flex-start;
        color: var(--secondary);
        padding: 1.5rem;
        .title {
            margin-bottom: 1rem;
            h2{
                font-size: 1.5rem;
            }
            h6 {
                font-size: 0.8rem;
                font-weight: 400;
            }
        }

        .about {
            h3 {
                font-size: 1.3rem;
                
            }

            ul {
                margin-top: 0.5rem;
                list-style: none;
                margin-bottom: 1rem;
            }

            li,p {
                font-size: 0.8rem;
            }

            li {
                margin-bottom: 0.1rem;
            }


        }

        .contato {
            display: flex;
            justify-content:space-between;
            margin-top: 1rem;
            width: 100%;
            align-items: flex-end;

            button {
                    width: 10rem;
                    padding: 0.4rem;
                    border: 1px solid white;
                    background: var(--primary);
                    display: flex;
                    justify-content: space-around;
                    color: var(--secondary);
                    border-radius: 4px;
                    max-width: 10rem;
                    box-shadow: none;
                    transition: 0.3s linear;
                    font-size: 0.9rem;

                    .icon {
                        font-size: 1rem;
                        align-self: center;
                    }

                    &:hover {
                        background-color: var(--secondary);
                        color: var(--primary);
                    }
            }

            .socialMedia {
                display: flex;
                list-style: none;
                align-items: flex-end;

                li {
                    padding: 0 0.2rem;
                    img {
                        cursor: pointer;
                        width: 1.5rem;
                        height: 1.5rem;
                        transition:0.3s ease;

                        &:hover{
                            transition:0.3s ease;
                            transform: scale(1.5);
                        }
                    }
                }
            }
        }

    }
    
`