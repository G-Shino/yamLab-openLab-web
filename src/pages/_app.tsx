import React from "react";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { Global } from "@emotion/core";
import globalCSS from "./../styles/global";
import Head from "next/head";
import LogoWhite from "../images/LogoWhite.png";

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
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta
          property="og:url"
          content="https://yam-lab-open-lab-web-sable.now.sh"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="山中研究室OpenLab -Top Page-" />
        <meta
          property="og:description"
          content="OpenLabに合わせて作成したwebページです"
        />
        <meta property="og:site_name" content="山中研究室OpenLab" />
        <meta
          property="og:image"
          content={"https://yam-lab-open-lab-web-sable.now.sh" + LogoWhite}
        />
        <meta name="twitter:card" content="Summary Card" />
      </Head>
      <Global styles={globalCSS} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
