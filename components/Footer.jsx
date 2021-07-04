import { styled } from '../stitches.config';
import { Box, Text, Link } from './primitives';

const siteLinks = [
  { title: 'About', to: 'https://varun.ca/' },
  { title: 'Writing', to: 'https://varun.ca/writing' },
  { title: 'Work', to: '/' },
  { title: 'RSS', to: 'https://varun.ca/rss.xml' },
];

const socialLinks = [
  { title: 'Twitter', to: 'http://twitter.com/winkerVSbecks' },
  { title: 'Github', to: 'http://github.com/winkerVSbecks' },
  { title: 'CodePen', to: 'http://codepen.io/winkerVSbecks' },
  { title: 'Dribbble', to: 'http://dribbble.com/winkerVSbecks' },
  { title: 'Email', to: 'mailto:varunvachhar@gmail.com' },
];

const FlatList = styled('ul', {
  listStyleType: 'none',
  pl: '$0',
});

export const Footer = (props) => (
  <Box
    as="footer"
    css={{ pt: '$3', mb: '$6', '@bp1': { pt: '$6' } }}
    {...props}
  >
    <FlatList>
      {siteLinks.map((link) => (
        <Text
          key={link.to}
          as="li"
          css={{ display: 'inline-block', mb: '$0', mr: '$3' }}
        >
          <Link
            css={{
              letterSpacing: '$tracked',
              display: 'block',
              fontWeight: '$7',
              fontSize: '$1',
            }}
            href={link.to}
          >
            {link.title}
          </Link>
        </Text>
      ))}
    </FlatList>
    <FlatList css={{ display: 'block', mb: '$0' }}>
      {socialLinks.map((link) => (
        <Text
          key={link.to}
          as="li"
          css={{
            display: 'inline-block',
            mb: '$0',
            mr: '$3',
          }}
        >
          <Link
            css={{
              display: 'block',
              fontSize: '$1',
            }}
            href={link.to}
          >
            {link.title}
          </Link>
        </Text>
      ))}
    </FlatList>
  </Box>
);
