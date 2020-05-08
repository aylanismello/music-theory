import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blue: "#00A3FF",
    green: "#4CD964",
    black: "#464646",
  },
};

const MyThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default MyThemeProvider;
