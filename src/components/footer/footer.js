import React from "react";

import { FooterContainer, FooterLink, FooterTitle } from "./footer.styled";
export default function Footer() {
  return (
    <FooterContainer>
      <FooterTitle>
        Made by{" "}
        <FooterLink href="https://github.com/JudeTejada" target="_blank">
          Jude Tejada
        </FooterLink>
      </FooterTitle>
    </FooterContainer>
  );
}
