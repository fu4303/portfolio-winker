import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { ProjectCard } from '../components/ProjectCard';
import { VideoCard } from '../components/VideoCard';
import { Layout } from '../components/Layout';
import works from '../data/works';

export default function Home() {
  return (
    <Layout>
      <Box css={{ mb: '$6' }}>
        <PageHeader title="Work" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridAutoFlow: 'dense',
            gap: '$3',
          }}
        >
          {works.map((work, idx) =>
            work.video ? (
              <VideoCard
                key={idx}
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
                key={idx}
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
