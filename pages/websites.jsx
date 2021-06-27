import Head from 'next/head';
import { Box } from '../components/primitives';
import { PageHeader } from '../components/PageHeader';
import { WebsiteCard } from '../components/WebsiteCard';
import websites from '../data/websites';

export default function Home() {
  return (
    <>
      <Head>
        <title>Works | Varun Vachhar</title>
      </Head>
      <Box css={{ paddingY: '$6', mb: '$6' }}>
        <PageHeader title="Websites" />
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(256px, 1fr))',
            gap: '$4',
          }}
        >
          {websites.map((work, idx) => (
            <WebsiteCard key={idx} {...work} />
          ))}
        </Box>
      </Box>
    </>
  );
}

// export async function getStaticProps(context) {
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
