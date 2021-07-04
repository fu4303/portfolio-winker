import NextLink from 'next/link';
import { styled, keyframes } from '../stitches.config';

export const SVG = styled('svg', {
  display: 'block',
  stroke: '$neutral1',
  width: '1.3333em',
  height: '1em',
  p: '$1',
});

const moveTheWave = keyframes({
  '0%': {
    strokeDashoffset: 0,
    transform: 'translate3d(0, 0, 0)',
  },
  '100%': {
    strokeDashoffset: -133,
    transform: 'translate3d(-90px, 0, 0)',
  },
});

const Wave = styled('path', {
  animation: `${moveTheWave} 2400ms linear infinite`,
  strokeDasharray: '0 16 101 16',
});

export const GenerativeIcon = () => (
  <NextLink href="/napoleons-theorem">
    <a>
      <SVG xmlns="http://www.w3.org/2000/svg" viewBox="5 0 80 60">
        <Wave
          fill="none"
          strokeLinecap="round"
          strokeWidth="8"
          d="M0 37.5c7.684 0 7.172-15 15-15s7.172 15 15 15 7.172-15 15-15 7.172 15 15 15 7.172-15 15-15 7.172 15 15 15 7.172-15 15-15 7.172 15 15 15 7.172-15 15-15 7.172 15 15 15 7.172-15 15-15 7.172 15 15 15 7.172-15 15-15 7.172 15 15 15 7.172-15 15-15"
        />
      </SVG>
    </a>
  </NextLink>
);
