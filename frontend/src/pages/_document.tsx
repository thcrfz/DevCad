import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import NavBar from "../components/navbar";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <NavBar />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
