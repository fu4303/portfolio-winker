import Head from 'next/head';
import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { Media } from '../components/Media';

export default function Curtains() {
  return (
    <>
      <Head>
        <title>Works | Varun Vachhar</title>
      </Head>
      <Box css={{ paddingY: '$6', mb: '$6' }}>
        <PageHeader title="Curtains" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '$3',
          }}
        >
          <Media image="https://res.cloudinary.com/dpym7j3nj/image/upload/v1624841494/portfolio/curtains/springywavybox_r7enlu.gif" />
          <Media image="https://res.cloudinary.com/dpym7j3nj/image/upload/v1624841495/portfolio/curtains/springytriangles_zey06z.gif" />
        </Box>
      </Box>
    </>
  );
}
