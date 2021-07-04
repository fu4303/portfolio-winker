import NextLink from 'next/link';
import { Box, Text, Link, Flex } from './primitives';
import { GenerativeIcon } from './GenerativeIcon';

export const GlobalHeader = () => (
  <Flex
    css={{
      mx: 'auto',
      my: '$6',
    }}
  >
    <Box
      as="nav"
      css={{
        display: 'block',
        '@bp1': {
          display: 'flex',
          alignItems: 'center',
        },
      }}
    >
      <NextLink href="https://varun.ca/" passHref>
        <Link
          css={{
            textTransform: 'uppercase',
            mb: '$0',
            mr: '$2',
            color: '$neutral1',
            letterSpacing: '$tracked',
            fontSize: '$1',
            fontWeight: '$7',
            lineHeight: '$solid',
          }}
        >
          Varun Vachhar
        </Link>
      </NextLink>
      <Text
        css={{
          color: '$neutral3',
          fontSize: '$1',
          lineHeight: '$solid',
          mt: '$1',
          mb: '$0',
          '@bp1': { mt: '$0' },
        }}
      >
        finder of new ways to confuse myself
      </Text>
    </Box>
    <Box css={{ flex: 1 }} />
    <GenerativeIcon />
  </Flex>
);
