import Head from 'next/head';

const siteUrl = 'https://varun.ca/work';

// https://res.cloudinary.com/dpym7j3nj/video/upload/w_1200,h_630,c_fill/v1624749314/portfolio/dragon-skin/2021.05.15-12.40.00_iqztae.jpg

export function SEO({
  description = '',
  title,
  image = '/chromatic-noise.png',
  pathname = '/',
}) {
  return (
    <>
      <Head>
        <title>{title} | Varun Vachhar</title>
      </Head>
      <Facebook
        description={description}
        image={`${siteUrl}${image}`}
        title={title}
        type="website"
        url={`${siteUrl}${pathname}`}
      />
      <Twitter
        title={title}
        image={`${siteUrl}${image}`}
        description={description}
        url={`${siteUrl}${pathname}`}
      />
    </>
  );
}

const Facebook = ({ url, title, description, image }) => (
  <Head>
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
  </Head>
);

const Twitter = ({ url, title, description, image }) => (
  <Head>
    <meta name="twitter:creator" content="@winkerVSbecks" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
  </Head>
);