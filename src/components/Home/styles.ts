import styled from 'styled-components';



export const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    width: 100%;
    margin-top: 5rem;

    .firstContent {
        background-image: url('img/header.jpg');
        border-bottom: 10px solid var(--primary);
        width: 100%;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        height: 80vh;
        background-position: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0.8;
        padding: 2rem;
        text-align: center;

        h1 {
            
            max-width: 1200px;
            color: var(--primary);
            font-size: 5rem;
            letter-spacing: 2px;
            
        }

        h2 {
            max-width: 1200px;
            font-weight: 400;
            color: var(--secondary);
            font-size: 3rem;
            background-color: var(--primary);
            padding: 0.5rem;
            strong {
                font-weight: 400;
            }
        }
    }



    .secondContent {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        border-bottom: 10px solid var(--primary);
        width:100%;

        .cardContainer {
            align-self: center;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: center;
            max-width: 100rem;
      
    }

        .title {
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            align-items: center;

            h1 {
                
                color: var(--primary);
                font-size: 3rem;
                letter-spacing: 2px;
                line-height:1.8em;
                font-weight: 400;
                
            }

            h6 {
                max-width: 650px;
                font-size: 1rem;
                font-weight:400;
                
            }
        }

    }
`

export const CardItem = styled.div`

    display: flex;
    max-width: 40rem;
    padding: 5rem;
    text-align: justify;

    img {
       
        align-self: center;
        padding: 1rem;
        width: 7rem;
        height: 7rem;
    }

    .content {
        display: flex;
        flex-direction: column;

        h4{
            text-align: left;
            color: var(--primary);
            font-size:1.3rem;
            margin-bottom: 1rem;
        }

        p{
            line-height:1.5rem;
        }
    }

`





/**SLIDER CSS */



export const ContainerSlider = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 10px solid var(--primary);
    
    

    .containerImage {
        width:100%;
        height:100%;
        display: flex;
        align-items:center;
        align-self: center;
        justify-content: center;
        
        .containerDesc {
            
            display: flex;
            position: absolute;
            flex-direction: column;
            height: 30rem;
            justify-content: flex-start;
           
            h1 {
                color: var(--secondary);
                font-size: 3rem;
                font-weight: 400;
            }

            .descriptionProced {
                max-width: 50rem;
             
                height:100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;

                h2 {
                    color: var(--primary);
                    font-weight: 600;
                    font-size: 2rem;
                    letter-spacing:2px;
                    border-bottom: 3px solid var(--secondary);
                }

                button {
              
                background: var(--secondary);
                display: flex;
                align-items: flex-end;
                justify-content: space-around;
                width: 20rem;
                padding: 0.7rem;
                border: none;
                color: var(--primary);
                border-radius: 4px;
                outline: none;
                box-shadow: none;
                transition: 0.3s linear;

                font-size: 1.2rem;

                img {
                    width: 1.7rem;
                    height: 1.7rem;
                }

                &:hover {
                    filter: brightness(90%);
                }
                }
            }

            p {
                color: var(--secondary);
            }
        }
        img {
            
            object-fit: cover;
            width:100%;
            height:100%;
        }
    }
    .next {
        position:absolute;
        width: 50px;
        height: 50px;
        background-color:blue;
        right: 10rem;
    }

    .prev {
        position:absolute;
        left: 10rem;
        width: 50px;
        height: 50px;
        background-color:red;
    }

`




/**INSTAGRAM FEED */


export const StyledFeed = styled.div`

    display: flex;
    flex-flow: row wrap;
    width: 100%;
    align-items: center;
    justify-content: center;



`


export const CardPost = styled.div`
    max-width: 250px;
    max-height: 250px;
    margin: 0.5rem;
    display:flex;
    justify-content: center;
    overflow: hidden;
    transition: all 0.3s ease;
    
    img {
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
       

        &:hover {
           
            transform: scale(1.2);
            box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        }

    }



    a{
        display:flex;
        align-items:center;
        justify-content: center;

    }

`

export const DisplaySocialMedia = styled.div`

    display:flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    max-width: 1200px;

    .title {
        padding: 2rem;
        margin-left: 5rem;
        display:flex;
        flex-flow: column nowrap;
        align-items: center;
        color: var(--primary);

        img {
            width: 90px;
            height: 90px;
        }
        p {
            
            line-height:1.2em;
            font-size: 1.2em;
            padding: 0.5rem;
        }

        h1 {
            
            font-size:2.5em; 
            font-weight: 400;
        }
        

    }

`




/**DEPOIMENTOS */


export const ContainerPatients = styled.div`

    width: 100%;
    height: 60vh;
    padding: 1rem;

    background: var(--primary);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    button {
      margin-bottom: 2rem;
      background: var(--secondary);
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
      width: 30rem;
      padding: 0.7rem;
      border: none;
      color: var(--primary);
      border-radius: 4px;
      outline: none;
      box-shadow: none;
      transition: 0.3s linear;

      font-size: 2rem;

      img {
        width: 2.6rem;
        height: 2.6rem;
      }

      &:hover {
        filter: brightness(90%);
      }
    }

    .title{
        h1{
            font-size: 3rem;
            color: var(--secondary);
            font-weight:bold;
        }
        h6{
            font-size: 1.1rem;
            text-align: right;
            color: var(--secondary);

            strong {
                color: var(--terciary);
            }
        }
    }

    .cardContainer {
        
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: center;
    }

    
`




export const CardItemPatient = styled.div`


    display: flex;
    flex-direction: column;
    max-width: 30rem;
    text-align: justify;
    
    padding: 2rem;
    
    img {
        align-self: flex-start;
        width: 5rem;
        height: 5rem;
    }

    .content {
        display: flex;
        flex-direction: column;

        h4{
            padding-top: 1rem;
            text-align: left;
            color: var(--secondary);
            font-size:1.3rem;
            
        }

        p{
            padding-top: 1rem;
            line-height:1.5rem;
            color: var(--secondary);
        }
    }

`