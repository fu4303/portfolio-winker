import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { Media } from '../components/Media';
import { Layout } from '../components/Layout';

export default function Curtains() {
  return (
    <Layout>
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
    </Layout>
  );
}
