import App from "next/app";
import React from "react";
import MyThemeProvider from "../components/global/MyThemeProvider";
import MyGlobalStyle from "../components/global/MyGlobalStyle";


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MyThemeProvider>
        <Component {...pageProps} />
        <MyGlobalStyle />
      </MyThemeProvider>
    );
  }
}
