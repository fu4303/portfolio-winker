import { styled } from '../stitches.config';

export const Box = styled('div', { boxSizing: 'border-box' });

export const Flex = styled('div', { display: 'flex' });

export const Text = styled('p', {
  mt: '$0',
  fontFamily: '$systemSans',
  color: '$neutral0',
  mb: '$4',
  fontSize: '$2',
  lineHeight: '$copy',
});

export const Link = styled('a', {
  fontFamily: '$systemSans',
  textDecoration: 'none',
  color: '$neutral0',
});

export const Divider = styled('div', {
  borderBottom: '4px solid $neutral5',
  width: '$3',
  my: '$5',
});
