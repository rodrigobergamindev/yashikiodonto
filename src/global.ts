import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle `


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

        @-webkit-keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; } 
                }
                @-moz-keyframes fadeIn {
                0% { opacity: 0;}
                100% { opacity: 1; }
                }
                @-o-keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
                }
                @keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
                }
                -webkit-animation: fadeIn 3s ease-in-out;
                -moz-animation: fadeIn 3s ease-in-out;
                -o-animation: fadeIn 3s ease-in-out;
                animation: fadeIn 3s ease-in-out;
        
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
`
