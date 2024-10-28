import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
    }
    html,body{
        height: 100%;
    }
    #root{
        height: 100%;
    }
    input:focus{
        outline: none;
    }
`;
export default GlobalStyle;
