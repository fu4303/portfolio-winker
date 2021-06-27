import NextLink from 'next/link';
import { styled } from '../stitches.config';
import { AspectRatio } from './AspectRatio';

const Card = styled('a', {
  display: 'block',
  cursor: 'pointer',
  textDecoration: 'none',
  dim: true,
});

const Thumbnail = styled(AspectRatio, {
  width: '100%',
  ratio: 4 / 3,
  borderRadius: '$2',
  position: 'relative',
  overflow: 'hidden',
});

const Video = styled('video', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const Title = styled('p', {
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

export const VideoCard = ({ title, link, video }) => (
  <NextLink href={link} passHref>
    <Card>
      <Thumbnail>
        <Video autoPlay loop muted playsInline display="block" mb="0">
          <source src={video} type="video/mp4" />
        </Video>
      </Thumbnail>
      <Title>{title}</Title>
    </Card>
  </NextLink>
);
