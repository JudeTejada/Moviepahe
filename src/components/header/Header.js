import React from "react";

import Logo from "../logo/Logo";
import SearchBar from "../searchbar/Searchbar";

import { HeaderContainer } from "./Header.styled";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <SearchBar />
    </HeaderContainer>
  );
}
