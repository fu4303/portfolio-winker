import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { Media } from '../components/Media';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { workById } from '../data/works';
const work = workById('Torsions');

export default function Torsions() {
  return (
    <Layout>
      <SEO title={work.title} image={work.ogImage} pathname={work.url} />
      <Box css={{ paddingY: '$6', mb: '$6' }}>
        <PageHeader title="Torsions" />
        <Box
          css={{
            display: 'grid',
            gap: '$3',
          }}
        >
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624761653/portfolio/torsions/2020.10.18-21.28.06_iakksd.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624761653/portfolio/torsions/2020.10.18-21.27.27_ynt5m2.mp4" />
        </Box>
      </Box>
    </Layout>
  );
}
