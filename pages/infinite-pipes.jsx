import Head from 'next/head';
import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { Media } from '../components/Media';

export default function Home() {
  return (
    <>
      <Head>
        <title>Works | Varun Vachhar</title>
      </Head>
      <Box css={{ paddingY: '$6', mb: '$6' }}>
        <PageHeader title="Infinite pipes" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(40%, 1fr))',
            gridAutoFlow: 'dense',
            gap: '$3',
          }}
        >
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624762039/portfolio/infinite-pipes/2021.01.01-21.51.23_u0n24v.mp4" />
        </Box>
      </Box>
    </>
  );
}
