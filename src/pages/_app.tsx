import React from "react";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { Global } from "@emotion/core";
import globalCSS from "./../styles/global";
import Head from "next/head";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <Head>
        <title>山中研究室OpenLab</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global styles={globalCSS} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
