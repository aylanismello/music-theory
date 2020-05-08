import App from "next/app";
import React from "react";
import GlobalStyle from '../helpers/app_global_style';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />;
        <GlobalStyle />
      </>
    );
  }
}
