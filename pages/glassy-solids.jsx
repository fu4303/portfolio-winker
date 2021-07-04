import Head from 'next/head';
import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { Media } from '../components/Media';

export default function GlassySolids() {
  return (
    <>
      <Head>
        <title>Works | Varun Vachhar</title>
      </Head>
      <Box css={{ paddingY: '$6', mb: '$6' }}>
        <PageHeader title="Glassy solids" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gridAutoFlow: 'dense',
            gap: '$3',
          }}
        >
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624840916/portfolio/glassy-solids/2021.02.26-21.55.58_uuwdva_punucp.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624758980/portfolio/glassy-solids/2021.02.27-14.20.33_u6ayue.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624758980/portfolio/glassy-solids/2021.02.25-21.59.09_wo6ytg.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624758979/portfolio/glassy-solids/2021.02.27-14.21.39_vhn8ug.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624841056/portfolio/glassy-solids/2021.02.25-21.36.45_r4dug2_ldxono.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624758976/portfolio/glassy-solids/2021.02.26-22.22.54_cx4x1a.mp4" />
        </Box>
      </Box>
    </>
  );
}
