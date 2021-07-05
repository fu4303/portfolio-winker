import Head from 'next/head';

const siteUrl = 'https://varun.ca/work';

export function SEO({
  description = '',
  title,
  image = 'https://res.cloudinary.com/dpym7j3nj/image/upload/v1625445348/portfolio/chromatic-noise_jkjblh.png',
  pathname = '/',
}) {
  return (
    <>
      <Head>
        <title>{title} | Varun Vachhar</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Facebook
        description={description}
        image={image}
        title={title}
        type="website"
        url={`${siteUrl}${pathname}`}
      />
      <Twitter
        title={title}
        image={image}
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
