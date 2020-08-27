import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --body-background:#151515;
        --primary-color: #000;
        --secondary-color: ##1B1B1B;
        --tertiary-color-dark: #262626;
        --tertiary-color-light: #2F2F2F;

        --card-date: #bdbdbd;


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
        background:var(--body-background);
        color:#fff;
	    font-family: 'Work Sans', sans-serif;
        padding:2em;
    

	}

	a {
		text-decoration: none;
	 color:#fff;
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

export const ContainerWrapper = styled.div`
  padding: 2em;
`;

export const SectionContainer = styled.div`
  margin: 6em 0;
`;

export const HeadingTwo = styled.h2`
  font-size: var(--heading-3-size);
  margin-bottom: 0.5em;
  font-weight: medium;
`;

export const HeadingOne = styled.h1`
  font-size: var(--heading-1-size);
  margin-top: 0.5em;
  margin-bottom: 0.3em;
  font-weight: 700;
`;
