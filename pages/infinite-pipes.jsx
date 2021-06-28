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
        </Box>
      </Box>
    </>
  );
}
