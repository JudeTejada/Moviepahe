import styled from "styled-components";

export const FormContainer = styled.form`
  width: 70%;

  margin-left: 8em;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    width: 50%;
    margin: 0;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1em;
  padding-left: 2.5em;
  height: 100%;
  border-radius: 24px;
  border: none;
  outline: none;
  font-size: var(--body-text);
  color: #a2a2a2;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIG9wYWNpdHk9Jy40JyB3aWR0aD0nMzEnIGhlaWdodD0nMzEnIHZpZXdCb3g9JzAgMCAxNCAxNCc+PHBhdGggZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNOS4yMDIgMy4wMjZhNC4zNjcgNC4zNjcgMCAxMC02LjE3NiA2LjE3NiA0LjM2NyA0LjM2NyAwIDEwNi4xNzYtNi4xNzZtNC41NDMgMTAuNzE5YS44NzUuODc1IDAgMDEtMS4yMzYgMGwtMi43NTEtMi43NTJjLTIuMzk1IDEuNzktNS43OTEgMS42MjEtNy45NjctLjU1NWE2LjExMyA2LjExMyAwIDAxMC04LjY0NyA2LjExMyA2LjExMyAwIDAxOC42NDcgMGMyLjE3NiAyLjE3NiAyLjM0NiA1LjU3Mi41NTUgNy45NjdsMi43NTIgMi43NTFjLjM0LjM0MS4zNC44OTQgMCAxLjIzNicvPjwvc3ZnPg==)
    no-repeat scroll 16px;
  background-color: rgba(0, 0, 0, 0);
  background-size: auto;
  background-size: 14px;
  background-color: var(--tertiary-color-light);
  transition: 0.3s all;

  &:hover,
  &:focus {
    color: #000;
    opacity: 1;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNCcgaGVpZ2h0PScxNCcgdmlld0JveD0nMCAwIDE0IDE0Jz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J005LjIwMiAzLjAyNmE0LjM2NyA0LjM2NyAwIDEwLTYuMTc2IDYuMTc2IDQuMzY3IDQuMzY3IDAgMTA2LjE3Ni02LjE3Nm00LjU0MyAxMC43MTlhLjg3NS44NzUgMCAwMS0xLjIzNiAwbC0yLjc1MS0yLjc1MmMtMi4zOTUgMS43OS01Ljc5MSAxLjYyMS03Ljk2Ny0uNTU1YTYuMTEzIDYuMTEzIDAgMDEwLTguNjQ3IDYuMTEzIDYuMTEzIDAgMDE4LjY0NyAwYzIuMTc2IDIuMTc2IDIuMzQ2IDUuNTcyLjU1NSA3Ljk2N2wyLjc1MiAyLjc1MWMuMzQuMzQxLjM0Ljg5NCAwIDEuMjM2Jy8+PC9zdmc+);
    background-color: #fff;
  }
`;
