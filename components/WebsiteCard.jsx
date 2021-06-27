import NextLink from 'next/link';
import { styled } from '../stitches.config';
import { AspectRatio } from './AspectRatio';

export const BrowserButton = styled('div', {
  borderRadius: '$circle',
  width: '6px',
  height: '6px',
  ml: '$1',
});

export const Chrome = styled('div', {
  borderTopLeftRadius: '$2',
  borderTopRightRadius: '$2',
  backgroundColor: '$neutral5',
  height: '$1',
  display: 'flex',
  alignItems: 'center',
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

export const Card = styled('div', {
  cursor: 'pointer',
  borderRadius: '$2',
  opacity: 1,
  transition: 'opacity 0.15s ease-in',
  '&:hover, &:focus': {
    opacity: 0.7,
  },
  '&:active': {
    opacity: 0.9,
  },
});

export const Thumbnail = styled(AspectRatio, {
  width: '100%',
  ratio: 4 / 3,
  borderBottomLeftRadius: '$2',
  borderBottomRightRadius: '$2',
});

export const WebsiteCard = ({ title, link, image }) => (
  <NextLink href={link}>
    <Card>
      <Chrome>
        <BrowserButton css={{ backgroundColor: '#ED6A5E' }} />
        <BrowserButton css={{ backgroundColor: '#F5BF4F' }} />
        <BrowserButton css={{ backgroundColor: '#62C554' }} />
      </Chrome>
      <Thumbnail css={{ bgImage: image }} />
      <Title>{title}</Title>
    </Card>
  </NextLink>
);
