import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { Media } from '../components/Media';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { workById } from '../data/works';
const work = workById('PaintingWithGradients');

export default function PaintingWithGradients() {
  return (
    <Layout>
      <SEO title={work.title} image={work.ogImage} pathname={work.url} />
      <Box css={{ paddingY: '$6', mb: '$6' }}>
        <PageHeader title="Painting with gradients" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '$3',
          }}
        >
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749303/portfolio/painting-with-gradients/interpolation-linear-100.0dia-seed_0-24fps-loop_eql0qo.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749302/portfolio/painting-with-gradients/always-here_dsqz1x.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749303/portfolio/painting-with-gradients/home-abstract-light-elsewhere_umnbb0.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624836705/portfolio/painting-with-gradients/120_yg202w.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749300/portfolio/painting-with-gradients/skipping-stones_ldkdba.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624825413/portfolio/painting-with-gradients/trim_87A847EB-EF17-4AE0-81CA-7DEDA076C642_tpwfmj.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624836704/portfolio/painting-with-gradients/18_u7qjf5.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624836705/portfolio/painting-with-gradients/frame-13_hvg63j.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624826727/portfolio/painting-with-gradients/dimple_wi9gpv.mp4" />
          <Media video="https://res.cloudinary.com/dpym7j3nj/video/upload/v1624836703/portfolio/painting-with-gradients/1030_zjhnaa.mp4" />
        </Box>
      </Box>
    </Layout>
  );
}
