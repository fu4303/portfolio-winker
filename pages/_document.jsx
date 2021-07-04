import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssString, global } from '../stitches.config';

const globalStyles = global({
  html: { '--inter': 'Inter' },
  '@supports (font-variation-settings: normal)': {
    html: { '--inter': 'Inter var' },
  },
  body: {
    margin: 0,
  },
});

export default class Document extends NextDocument {
  render() {
    globalStyles();
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://rsms.me/inter/inter.css"
          />
          <link rel="icon" href="/work/favicon-32x32.png" type="image/png" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
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
