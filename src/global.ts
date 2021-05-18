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
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight:400;
    }
    h1,h2,h3,h4,h5,strong {
        font-family: 'Poppins', sans-serif;
        font-weight:600;
    }

    p,li,a, h6 {
        font-family: 'Poppins', sans-serif;
        font-weight:400;
    }
`
