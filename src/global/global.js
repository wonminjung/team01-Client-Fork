import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    
    * {
        box-sizing: border-box;
        text-decoration: none;
        padding: 0;
        margin: 0;
        letter-spacing: 0.3px;
        font-family: 'Pretendard-Regular' !important;
    }
    
    body {
        font-size: 16px;
    }

    p, button {
        font-size: 14px;
    }

    span.tag { 
        font-size: 12px;
    }

`;

export default GlobalStyle;