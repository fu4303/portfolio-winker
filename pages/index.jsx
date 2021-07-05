import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { ProjectCard } from '../components/ProjectCard';
import { VideoCard } from '../components/VideoCard';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import works from '../data/works';

export default function Home() {
  return (
    <Layout>
      <Box css={{ mb: '$6' }}>
        <PageHeader title="Work" />
        <SEO
          title="Work"
          description="Gallery of generative art by Varun Vachhar"
          pathname="/"
        />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridAutoFlow: 'dense',
            gap: '$3',
          }}
        >
          {works.map((work) =>
            work.video ? (
              <VideoCard
                key={work.id}
                css={
                  work.span
                    ? {
                        gridColumn: `span ${work.span}`,
                        gridRow: `span ${work.span}`,
                      }
                    : {}
                }
                {...work}
              />
            ) : (
              <ProjectCard
                key={work.id}
                css={
                  work.span
                    ? {
                        gridColumn: `span ${work.span}`,
                        gridRow: `span ${work.span}`,
                      }
                    : {}
                }
                {...work}
              />
            )
          )}
        </Box>
      </Box>
    </Layout>
  );
}
