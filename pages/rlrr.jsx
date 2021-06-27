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
        <PageHeader title="RLRR" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(40%, 1fr))',
            gridAutoFlow: 'dense',
            gap: '$3',
          }}
        >
          <Media image="https://res.cloudinary.com/dpym7j3nj/image/upload/v1624755040/portfolio/rlrr/2020.06.07-16.15.37_oyf1pz.png" />
          <Media image="https://res.cloudinary.com/dpym7j3nj/image/upload/v1624755041/portfolio/rlrr/2020.06.08-10.08.42_jqll3z.png" />
          <Media image="https://res.cloudinary.com/dpym7j3nj/image/upload/v1624755041/portfolio/rlrr/2020.06.07-20.01.34_gbodlz.png" />
          <Media image="https://res.cloudinary.com/dpym7j3nj/image/upload/v1624755040/portfolio/rlrr/2020.06.07-16.15.55_h3lvny.png" />
        </Box>
      </Box>
    </>
  );
}
