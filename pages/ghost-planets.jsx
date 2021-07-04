import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { Media } from '../components/Media';
import { Layout } from '../components/Layout';

export default function GhostPlanets() {
  return (
    <Layout>
      <Box css={{ paddingY: '$6', mb: '$6' }}>
        <PageHeader title="Ghost Planets" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '$3',
          }}
        >
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749305/portfolio/ghost-planets/ghost-planets_nfqvpf.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624754967/portfolio/ghost-planets/2021.02.24-09.16.03_jytmxn.mp4" />
        </Box>
      </Box>
    </Layout>
  );
}
