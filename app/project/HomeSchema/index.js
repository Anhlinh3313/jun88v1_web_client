import React from "react";
import Head from "next/head";

const HomeSchema = (props) => {

  return (
    <>
      <div>
        <Head>
          <title>
            Jun88 - Web cá độ hàng đầu{" "}
          </title>
          <meta
            name="description"
            content="Web cá độ hàng đầu Việt nam"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="canonical"
            href={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          />
          <meta
            name="keywords"
            content="bong da,bongda,tiso,nhan dinh bong da,lich thi dau, bóng đá, tỉ số"
          />
          <meta
            name="description"
            content="Web cá độ"
          ></meta>
          <meta
            name="COPYRIGHT"
            content="Copyright (C) 2007 jun88.com"
          ></meta>
          <meta name="RATING" content="GENERAL"></meta>
          <meta name="geo.placename" content="ho chi minh"></meta>
          <meta name="robots" content="index,follow,noydir,noodp"></meta>
          <meta
            property="og:description"
            content="Web cá độ"
          ></meta>
          <meta
            property="og:site_name"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_NAME}`}
          ></meta>
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          ></meta>
          <meta
            property="og:title"
            content="Jun88 - Web cá độ hàng đầu"
          ></meta>
          <meta
            name="robots"
            content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          ></meta>
        </Head>
      </div>
    </>
  );
};

export default HomeSchema;
