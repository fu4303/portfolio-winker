import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { Media } from '../components/Media';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { workById } from '../data/works';
const work = workById('NotQuitePlatonicSolids');

export default function NotQuitePlatonicSolids() {
  return (
    <Layout>
      <SEO title={work.title} image={work.ogImage} pathname={work.url} />
      <Box css={{ paddingY: '$6', mb: '$6' }}>
        <PageHeader title="Not quite platonic solids" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '$3',
          }}
        >
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624761078/portfolio/not-quite-platonic-solids/2021.03.02-20.46.03_nhm95t.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624766614/portfolio/not-quite-platonic-solids/2021.03.02-20.50.44_idbqud.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624766612/portfolio/not-quite-platonic-solids/2021.02.27-17.10.49_ddzlb9.mp4" />
        </Box>
      </Box>
    </Layout>
  );
}
