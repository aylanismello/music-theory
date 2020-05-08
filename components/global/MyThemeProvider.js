import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blue: "#00A3FF",
    green: "#4CD964",
    black: "#464646",
  },
  zIndex: {
    top: 3,
    middle: 2,
    bottom: 1
  },
  topNavHeight: '70px'
};

const MyThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default MyThemeProvider;
