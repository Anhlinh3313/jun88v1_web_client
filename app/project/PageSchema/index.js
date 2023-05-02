import React, { useEffect, useState } from "react";
import Head from "next/head";
import { API_URL } from "../../@function/wsCode";
const PageSchema = (props) => {
  const [schema, setSchema] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/api/schema/getByPage/${props.slug}`)
      .then((res) => res.json())
      .then((data) => setSchema(data));
  }, []);

  return (
    <>
      <div>
        <Head>
          <title>{props.description}</title>
          <meta
            name="description"
            content="Web cá độ hàng đầu"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="canonical"
            href={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          />
          <meta
            name="keywords"
            content="Web cá độ hàng đầu"
          />
          <meta
            name="description"
            content="Web cá độ hàng đầu"
          ></meta>
          <meta
            name="COPYRIGHT"
            content="Copyright (C) 2007 jun88.com "
          ></meta>
          <meta name="RATING" content="GENERAL"></meta>
          <meta name="geo.placename" content="ho chi minh"></meta>
          <meta
            name="robots"
            content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          ></meta>
          <meta
            property="og:description"
            content="Web cá độ hàng đầu"
          ></meta>
          <meta
            property="og:site_name"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          ></meta>
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_SCHEMA_URL}`}
          ></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          ></meta>
          <meta property="og:type" content="article"></meta>
          <meta property="og:title" content={props.description}></meta>
          <meta property="og:site_name" content={props.description}></meta>

          {schema &&
            schema.map((item, index) => {
              return (
                <script
                  key={index}
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: item.script,
                  }}
                ></script>
              );
            })}
        </Head>
      </div>
    </>
  );
};

export default PageSchema;
