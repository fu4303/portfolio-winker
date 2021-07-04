import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { Media } from '../components/Media';
import { Layout } from '../components/Layout';

export default function SomeCaterpillarsStayCaterpillars() {
  return (
    <Layout>
      <Box css={{ paddingY: '$6', mb: '$6' }}>
        <PageHeader title="Some caterpillars stay caterpillars" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '$3',
          }}
        >
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624825612/portfolio/some-caterpillars-stay-caterpillars/2021.01.02-21.17.27_wzezju.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624825612/portfolio/some-caterpillars-stay-caterpillars/2021.01.02-21.18.05_af0hm8.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624825627/portfolio/some-caterpillars-stay-caterpillars/2021.03.03-22.17.27_egbmjd.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624825628/portfolio/some-caterpillars-stay-caterpillars/2021.03.03-22.20.13_yf1ahv.mp4" />
        </Box>
      </Box>
    </Layout>
  );
}
