import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
   
        
        --color-svg-link: #039235;
        --color-link-hover:#bbf7d0;
        --color-hover-text: #000;
        --color-header: linear-gradient(to bottom right, #4ade80, #039235);
        --color-background-input:#dcfce7;
        --color-spinner-mini: #04b75b;


    & ,&.lightmode{
        --color-applayout: #f2efe8; 
        --color-sidebar:#fff;
        --color-header: linear-gradient(to bottom right, #4ade80, #039235);
        --color-deep-text: #000;
         --color-ash-text: #252525;
         --color-line:#d4d4d4;
         --color-text: #000;
        --color-input-book: #78716c;
        --color-foodie-logo:#cc971b;
        --color-foodie-border:#039235;
        --color-input: #fff;
        --color-dashboard-header: #fffbeb;
        --color-background-svg: #cc971b;
        --color-icon-svg: #fff;
        --color-image : linear-gradient(to bottom right, #d1a84a, #cc971b);
    }
    &.darkmode{
        --color-foodie-logo:#039235;
        --color-foodie-border:#cc971b;
        --color-image :linear-gradient(to bottom right, #4ade80, #039235);

        --color-applayout: #0f172a;
        --color-sidebar:#1e293b;
        --color-text: #e2e8f0;
        --color-input-book: #94a3b8;
        --color-input: #e2e8f0;
        --color-dashboard-header: #94a3b8;
        --color-background-svg: #039235;
        --color-icon-svg: #f0fdf4;
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
