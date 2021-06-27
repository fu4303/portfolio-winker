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
        <PageHeader title="चमकीले पत्थर" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(40%, 1fr))',
            gridAutoFlow: 'dense',
            gap: '$3',
          }}
        >
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749284/portfolio/chamkeele-pathar/chamkeele-pathar-2_cqon5f.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749283/portfolio/chamkeele-pathar/chamkeele-pathar-1_zgjfwv.mp4" />
        </Box>
      </Box>
    </>
  );
}
