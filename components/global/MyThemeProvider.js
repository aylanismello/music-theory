import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blue: "#00A3FF",
    green: "#4CD964",
    black: "#13101D",
    gray: "#C4C4C4",
  },
  zIndex: {
    top: 3,
    middle: 2,
    bottom: 1,
  },
  fonts: {
    font1: "'sofia-pro', sans-serif",
  },
  topNavHeight: "70px",
  sizes: {
    desktopWidth: "1280px",
    tabletWidth: "1150px",
    phoneWidth: "768px",
    tinyWidth: "350px",
  },
};

// theme.mixins = {
//   text: (fontWeight = "normal") => `
//     font-family: ${theme.fonts.font1};
//     color: ${theme.colors.white}
//   `,
// };

const MyThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default MyThemeProvider;
