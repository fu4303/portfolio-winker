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
        <PageHeader title="Dragon skin" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '$3',
          }}
        >
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749314/portfolio/dragon-skin/2021.05.15-12.40.00_iqztae.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749302/portfolio/dragon-skin/2021.05.15-20.33.51_ut50ul.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749295/portfolio/dragon-skin/2021.05.15-20.16.51_oqimuh.mp4" />
        </Box>
      </Box>
    </>
  );
}
