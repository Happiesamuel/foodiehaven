import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
   
        
        --color-svg-link: #039235;
        --color-link-hover:#bbf7d0;
        --color-hover-text: #000;
        --color-header: linear-gradient(to bottom right, #4ade80, #039235);
        --color-background-input:#dcfce7;
        --color-spinner-mini: #04b75b;
        --color-foodie-logo:#cc971b;


    & ,&.lightmode{
        --color-applayout: #f2efe8; 
        --color-sidebar:#fff;
        --color-header: linear-gradient(to bottom right, #4ade80, #039235);
        --color-deep-text: #000;
         --color-ash-text: #252525;
         --color-line:#d4d4d4;
         --color-text: #000;
        --color-input-book: #78716c;

    }
    &.darkmode{
        --color-foodie-logo:#039235;
        --color-applayout: #0f172a;
        --color-sidebar:#1e293b;
        --color-text: #e2e8f0;
        --color-input-book: #94a3b8;


        /* --color-text: #e2e8f0;
        --color-svg-link: #cc971b; */
        /* --color-link-hover:#fffbeb;
        --color-hover-text: #1e293b; */
         /* --color-header: linear-gradient(to bottom right, #fcd34d, #cc971b); */
        /* --color-background-input:#fffbeb; */
        /* --color-spinner-mini:#fcd34d; */


        --color-deep-text: #e2e8f0;
        --color-ash-text: #cbd5e1;
        --color-line:#64748b;




    }
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Outfit", sans-serif;
    transition: all 0.5s;
}
`;
