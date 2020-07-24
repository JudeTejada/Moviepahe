import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --primary-color: #000;
        --secondary-color: ##1B1B1B;
        --tertiary-color-dark: #262626;
        --tertiary-color-light: #2F2F2F;


        --heading-1-size: 8.6rem;
        --heading-2-size: 5.4rem;
        --heading-3-size: 4.3rem;
        --heading-4-size: 3.1rem;
        --heading-5-size: 2.2rem;
        --heading-6-size: 1.8rem;
        --body-text: 1.4em;
        --button-size: 1.4rem;

    }
    html{
        font-size:62.5%;
    }
	body {
        background:var(--primary-color);
        color:#fff;
	    font-family: 'Work Sans', sans-serif;
        padding:5rem;

	}

	a {
		text-decoration: none;
		color: var(--primary-color);
	}

	* {
        margin:0;
        padding:0;
		box-sizing: border-box;
	}

    p{
        font-size: var(--body-text);
        line-height:170%;
    }
`;
