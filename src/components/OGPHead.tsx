import React from "react";
import Head from "next/head";
import { WebURL } from "../constants/Url";

interface Props {
  title: string;
  type: string;
  description: string;
  keyword: string;
  image: string;
  page: string;
}

const OGPHead = ({
  title,
  type,
  description,
  keyword,
  image,
  page,
}: Props): JSX.Element => {
  return (
    <Head>
      <meta name="keywords" content={keyword} />
      <meta property="og:url" content={WebURL + page} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={"山中研究室OpenLab:" + title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="山中研究室OpenLab" />
      <meta property="og:image" content={WebURL + image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default OGPHead;
