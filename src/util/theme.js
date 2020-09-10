import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  mediaQueries: {
    mobile: "only screen and (max-width: 400px)",
    mobileLarge: "only screen and (max-width: 600px)",
    tablet: "only screen and (max-width: 900px)",
    laptop: "only screen and (max-width: 1200px)",
    desktop: "only screen and (max-width: 1600px)",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
