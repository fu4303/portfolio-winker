import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { Media } from '../components/Media';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { workById } from '../data/works';
const work = workById('InfinitePipes');

export default function InfinitePipes() {
  return (
    <Layout>
      <SEO title={work.title} image={work.ogImage} pathname={work.url} />
      <Box css={{ paddingY: '$6', mb: '$6' }}>
        <PageHeader title="Infinite pipes" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '$3',
          }}
        >
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624769024/portfolio/infinite-pipes/2021.06.27-00.36.42_uwbefo.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624769021/portfolio/infinite-pipes/2021.06.27-00.38.18_ru3a4h.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624769017/portfolio/infinite-pipes/2021.06.27-00.39.09_cb1arq.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624769023/portfolio/infinite-pipes/2021.06.27-00.43.01_o4qpo6.mp4" />
          <Media
            video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1625344484/portfolio/infinite-pipes/2021.06.27-00.52.20_bngwpt.mp4"
            css={{ gridColumn: '1 / -1' }}
          />
        </Box>
      </Box>
    </Layout>
  );
}
