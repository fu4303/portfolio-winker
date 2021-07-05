import NextLink from 'next/link';
import { styled } from '../stitches.config';
import { AspectRatio } from './AspectRatio';

export const Card = styled('a', {
  display: 'block',
  cursor: 'pointer',
  textDecoration: 'none',
  dim: true,
});

export const Thumbnail = styled(AspectRatio, {
  width: '100%',
  ratio: 4 / 3,
  borderRadius: '$2',
});

export const Title = styled('p', {
  m: '$0',
  pb: '$2',
  pt: '$3',
  pl: '2px',
  fontFamily: '$systemSans',
  color: '$neutral0',
  fontSize: '$1',
  fontWeight: '$5',
  lineHeight: '$solid',
});

export const ProjectCard = ({ title, url, image, ...props }) => (
  <NextLink href={url} passHref>
    <Card {...props}>
      <Thumbnail css={{ bgImage: image }} />
      <Title>{title}</Title>
    </Card>
  </NextLink>
);
