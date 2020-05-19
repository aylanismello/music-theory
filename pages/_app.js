import App from "next/app";
import React from "react";
import MyLayout from "../components/global/MyLayout";
import MyThemeProvider from "../components/global/MyThemeProvider";
import MyGlobalStyle from "../components/global/MyGlobalStyle";


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MyThemeProvider>
        <MyGlobalStyle />
        <MyLayout>
          <Component {...pageProps} />
        </MyLayout>
      </MyThemeProvider>
    );
  }
}
