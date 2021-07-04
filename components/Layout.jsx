import { styled } from '../stitches.config';
import { GlobalHeader } from '../components/GlobalHeader';
import { Footer } from '../components/Footer';

const Container = styled('div', {
  mx: 'auto',
  px: '$3',
  maxWidth: '$8',
  '@bp1': { px: '$3' },
  '@bp2': { px: '$5' },
});

export const Layout = ({ children, ...props }) => (
  <Container {...props}>
    <GlobalHeader />
    {children}
    <Footer />
  </Container>
);
