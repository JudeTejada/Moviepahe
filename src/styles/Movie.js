import styled, { css } from "styled-components";
export const MainWrapper = styled.figure`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const MainImage = styled.img.attrs((props) => ({
  src: props.imageSrc,
  alt: props.imageTitle,
}))`
  object-fit: cover;
  width: 100%;
  flex-basis: 40%;
`;
export const MainDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 3.8em;
  justify-self: flex-start;
`;
export const MainTitle = styled.h2`
  font-size: 5rem;
  font-weight: 900;
`;
export const MainSubtitle = styled.h3`
  font-size: 1.9rem;
  font-weight: 500;
  margin: 1em 0;
`;
export const MainRating = styled.h4`
  font-size: 1.6rem;
  color: #666;
`;
export const Text = styled.p`
  color: #444;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.7;
  padding: 1em 0;
`;
export const Button = styled.button`
  background: none;
  align-self: flex-start;
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0.5em 1.5em;
  border: 2px solid var(--primary-color-1);

  ${(props) =>
    props.primary &&
    css`
      background: var(--primary-color-1);
      color: #fff;
      margin-right: 1.5em;
    `}
`;

export const MovieDate = styled.span`
  font-weight: 300;
  color: #555;
`;
