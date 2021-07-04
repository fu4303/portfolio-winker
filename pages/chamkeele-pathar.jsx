import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { Media } from '../components/Media';
import { Layout } from '../components/Layout';

export default function ChamkeelePathar() {
  return (
    <Layout>
      <Box css={{ paddingY: '$6', mb: '$6' }}>
        <PageHeader title="चमकीले पत्थर" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '$3',
          }}
        >
          <Media
            css={{ border: '1px solid $neutral4', borderRadius: '$2' }}
            video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749284/portfolio/chamkeele-pathar/chamkeele-pathar-2_cqon5f.mp4"
          />
          <Media
            css={{ border: '1px solid $neutral4', borderRadius: '$2' }}
            video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749283/portfolio/chamkeele-pathar/chamkeele-pathar-1_zgjfwv.mp4"
          />
          <Media
            css={{ border: '1px solid $neutral4', borderRadius: '$2' }}
            video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624766742/portfolio/chamkeele-pathar/2021.05.12-15.40.40_c9bs54.mp4"
          />
          <Media
            css={{ border: '1px solid $neutral4', borderRadius: '$2' }}
            video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624766742/portfolio/chamkeele-pathar/2021.05.12-11.45.02_akyyc7.mp4"
          />
        </Box>
      </Box>
    </Layout>
  );
}
