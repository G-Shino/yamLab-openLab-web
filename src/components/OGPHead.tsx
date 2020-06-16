import React from "react";
import Head from "next/head";

interface Props {
  title: string;
  type: string;
  description: string;
  keyword: string;
  image: string;
  url: string;
}

const OGPHead = ({
  title,
  type,
  description,
  keyword,
  image,
  url,
}: Props): JSX.Element => {
  return (
    <Head>
      <meta name="keywords" content={keyword} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="山中研究室OpenLab" />
      <meta property="og:image" content={url + image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default OGPHead;
