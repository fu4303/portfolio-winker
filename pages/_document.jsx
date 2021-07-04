import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssString, global, styled } from '../stitches.config';
import { GlobalHeader } from '../components/GlobalHeader';
import { Footer } from '../components/Footer';

const globalStyles = global({
  html: { '--inter': 'Inter' },
  '@supports (font-variation-settings: normal)': {
    html: { '--inter': 'Inter var' },
  },
  body: {
    margin: 0,
  },
});

const Container = styled('div', {
  mx: 'auto',
  px: '$3',
  maxWidth: '$8',
  '@bp1': { px: '$3' },
  '@bp2': { px: '$5' },
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
          <link rel="icon" href="/favicon-32x32.png" type="image/png" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
        </Head>
        <body>
          <Container>
            <GlobalHeader />
            <Main />
            <Footer />
          </Container>
          <NextScript />
        </body>
      </Html>
    );
  }
}
