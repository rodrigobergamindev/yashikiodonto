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
        max-width: 1700px;

        .cardContainer {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: center;
      
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