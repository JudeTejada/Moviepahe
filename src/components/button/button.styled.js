import styled, { css } from "styled-components";

const buttonStyles = css`
  border: none;
  color: white;
  outline: none;
`;

const movieButtonStyle = css`
  color: #fff;
  box-shadow: 0 10px 20px black;
  transition: all 0.3s;

  & span {
    margin-left: 0.6em;
  }
  & svg {
    width: calc(var(--button-size) + 0.3em);
    height: calc(var(--button-size) + 0.3em);
  }

  &:hover {
    opacity: 0.8;
    color: black;
  }
  @media ${(props) => props.theme.mediaQueries.mobileLarge} {
    width: 100%;
  }
  & a {
    display: flex;
    align-items: center;
  }
`;

const loadMorebutton = css`
  text-align: center;
  color: #fff;
  opacity: 0.7;
  margin: 0 auto;
  margin-top: 3em;
`;

const hideButton = css`
  margin: 0;
  padding: 0;
  background: none;
  opacity: 0.4;
  text-align: left;
  padding: 0.8em;
  color: #fff;
`;

const outlineButton = css`
  border: 1px solid #fff;
  color: #fff;
  background: none;
  margin-left: 2em;
  opacity: 0.8;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.mediaQueries.mobile} {
    margin-left: 0;
    width: 100%;
  }
`;

const getButtonStyle = (props) => {
  if (props.movieButtonStyle) {
    return movieButtonStyle;
  }
  if (props.loadMorebutton) {
    return loadMorebutton;
  }

  if (props.hideButton) {
    return hideButton;
  }
  if (props.outlineButton) {
    return outlineButton;
  }

  return buttonStyles;
};

export const CustomButtonContainer = styled.button`
  background: var(--tertiary-color-light);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border: none;
  cursor: pointer;
  margin-top: 2.8em;
  padding: 0 25px;
  font-family: inherit;
  font-weight: 500;
  font-size: var(--button-size);
  border-radius: 0.4em;
  ${getButtonStyle}
`;
