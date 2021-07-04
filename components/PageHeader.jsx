import Head from 'next/head';
import { styled } from '../stitches.config';
import { Divider } from './primitives';

export const PageTitle = styled('h1', {
  mt: '$0',
  mb: '$3',
  color: '$neutral0',
  fontFamily: '$systemSans',
  fontSize: '$4',
  fontWeight: '$7',
  lineHeight: '$title',
  '@bp1': { fontSize: '$5' },
  '@bp2': { fontSize: '$6' },
});

export const PageHeader = ({ title, children }) => (
  <>
    <Head>
      <title>{title} | Varun Vachhar</title>
    </Head>
    <header>
      <PageTitle>{title}</PageTitle>
      {children}
      <Divider />
    </header>
  </>
);
