import React from "react";

import { CustomButtonContainer } from "./button.styled";

export default function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}
