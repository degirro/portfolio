import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.background};
    }

    #root {
        background-image: ${({ theme }) => theme.colors.backgroundImg};
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Roboto;
        font-optical-sizing: auto;
        outline: none;
    }

    html { 
        font-size: 100%; 
        scroll-behavior: smooth;
    }

    input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
         -webkit-appearance: none;
    }

    button {
        border: none;
        cursor: pointer;
    }
`;