import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { Media } from '../components/Media';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { workById } from '../data/works';
const work = workById('MashingMesh');

export default function MashingMesh() {
  return (
    <Layout>
      <SEO title={work.title} image={work.ogImage} pathname={work.url} />
      <Box css={{ paddingY: '$6', mb: '$6' }}>
        <PageHeader title="Mashing Mesh" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '$3',
          }}
        >
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624760827/portfolio/mashing-mesh/2021.01.02-20.24.15_qhgkkz.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624760834/portfolio/mashing-mesh/2021.01.02-22.44.22_wskwio.mp4" />
        </Box>
      </Box>
    </Layout>
  );
}
