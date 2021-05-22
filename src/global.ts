import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle `

@-webkit-keyframes bounceInDown {
            0% {
               opacity: 0;
               -webkit-transform: translateY(-2000px);
            }
            60% {
               opacity: 1;
               -webkit-transform: translateY(30px);
            }
            80% {
               -webkit-transform: translateY(-10px);
            }
            100% { 
               -webkit-transform: translateY(0);
            }
         }
         
         @keyframes bounceInDown {
            0% {
               opacity: 0;
               transform: translateY(-2000px);
            }
            60% {
               opacity: 1;
               transform: translateY(30px);
            }
            80% {
               transform: translateY(-10px);
            }
            100% {
               transform: translateY(0);
            }
         }


    :root {
        --primary: #079992;
        --secondary: #F0F2F5;
        --text: #303131;
        --terciary: #08F6EB;
        --background: #F0F2F5;
    }
    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    html {

        -webkit-animation: bounceInDown 3s ease-in-out;
        -moz-animation: bounceInDown 3s ease-in-out;
        -o-animation: bounceInDown 3s ease-in-out;
        animation: bounceInDown 3s ease-in-out;
        
        @media(max-width:1080px) {
            font-size: 93.75%;
        }
        @media(max-width:720px) {
            font-size: 87.5%;
        }
    }
    button {
        cursor: pointer;
    }


    .iconFloat {
        position:fixed;
        bottom: 3rem;
        right: 3rem;

        width: 5rem;
        height: 5rem;
        filter: brightness(110%);
        background-color: var(--secondary);
        box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 2px 2px rgba(0,0,0,0.23);
        border-radius: 50%;
        transition: all 0.3s ease-out;
        cursor: pointer;
        &:hover {
            transition: all 0.3s ease-out;
            transform: translateY(-10%);
        }
    }
`
