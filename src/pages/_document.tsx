import { Head, Html, Main, NextScript } from "next/document";
import Document, { DocumentContext } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html
        lang="en"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
