import styled from "styled-components";
export const Aside = styled.aside`
  padding: 3.2rem;
  width: 20%;
  font-size: 1.4rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  height: 100vh; /* viewport height */
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: scroll;
`;
export const Logo = styled.h1`
  margin-top: 28em;
  font-size: 2rem;
  font-weight: 900;
`;

export const Ul = styled.ul`
  list-style-type: none;
  font-size: 1.4rem;
`;
export const Li = styled.li`
  margin: 8px 0;
  padding: 0.6rem;
  font-weight: 600;
  color: var(--primary-color-2);
`;
export const SubHeading = styled.li`
  font-weight: 600;
  color: var(--light-gray);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: left;
  margin: 4em 0 2em 0;
`;
