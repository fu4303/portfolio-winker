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
        <PageHeader title="Painting with gradients" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(40%, 1fr))',
            gridAutoFlow: 'dense',
            gap: '$3',
          }}
        >
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749303/portfolio/painting-with-gradients/interpolation-linear-100.0dia-seed_0-24fps-loop_eql0qo.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749302/portfolio/painting-with-gradients/always-here_dsqz1x.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749300/portfolio/painting-with-gradients/skipping-stones_ldkdba.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749303/portfolio/painting-with-gradients/home-abstract-light-elsewhere_umnbb0.mp4" />
        </Box>
      </Box>
    </>
  );
}
