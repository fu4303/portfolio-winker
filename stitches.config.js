import { createCss } from '@stitches/react';

export const { css, styled, global, getCssString, keyframes } = createCss({
  theme: {
    colors: {
      brandMain: '#4e4bec',
      brandBright: '#dedefb',
      brandFaded: '#ececfd',
      brandSelection: '#ececfd',
      neutral0: '#333',
      neutral1: '#555',
      neutral2: '#777',
      neutral3: '#aaa',
      neutral4: '#ccc',
      neutral5: '#eee',
      neutral6: '#f4f4f4',
      neutral7: '#fff',
      transparentNeutral0: 'rgba(255, 255, 255, 0.05)',
      transparentNeutral1: 'rgba(255, 255, 255, .1)',
      transparentNeutral2: 'rgba(255, 255, 255, .2)',
      transparentNeutral3: 'rgba(255, 255, 255, .3)',
      transparentNeutral4: 'rgba(255, 255, 255, .4)',
      transparentNeutral5: 'rgba(255, 255, 255, .5)',
      transparentNeutral6: 'rgba(255, 255, 255, .6)',
      transparentNeutral7: 'rgba(255, 255, 255, .7)',
      transparentNeutral8: 'rgba(255, 255, 255, .8)',
      transparentNeutral9: 'rgba(255, 255, 255, .9)',
    },
    space: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px',
    },
    sizes: {
      0: '8px',
      1: '16px',
      2: '32px',
      3: '64px',
      4: '128px',
      5: '256px',
      6: '512px',
      7: '768px',
      8: '1024px',
      9: '1536px',
    },
    fontSizes: {
      0: '12px',
      1: '14px',
      2: '16px',
      3: '20px',
      4: '24px',
      5: '36px',
      6: '48px',
      7: '80px',
      8: '96px',
    },
    fontWeights: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      6: '600',
      7: '700',
      8: '800',
      9: '900',
    },
    fonts: {
      systemSans:
        "var(--inter), -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif",
      code: 'Consolas, monaco, monospace',
    },
    lineHeights: {
      solid: 1,
      title: 1.25,
      copy: 1.5,
    },
    letterSpacings: {
      default: 'normal',
      tracked: '0.1em',
      tight: '-0.05em',
      mega: '0.25em',
    },
    radii: {
      0: 0,
      1: '2px',
      2: '4px',
      3: '8px',
      4: '16px',
      pill: '9999px',
      circle: '100%',
    },
  },
  utils: {
    m: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value) => ({
      marginTop: value,
    }),
    mr: (config) => (value) => ({
      marginRight: value,
    }),
    mb: (config) => (value) => ({
      marginBottom: value,
    }),
    ml: (config) => (value) => ({
      marginLeft: value,
    }),
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (config) => (value) => ({
      paddingTop: value,
    }),
    pr: (config) => (value) => ({
      paddingRight: value,
    }),
    pb: (config) => (value) => ({
      paddingBottom: value,
    }),
    pl: (config) => (value) => ({
      paddingLeft: value,
    }),
    px: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    bgImage: (config) => (value) => ({
      backgroundImage: `url(${value})`,
    }),
    ratio: (config) => (value) => ({
      height: 0,
      paddingBottom: `${(1 / value) * 100}%`,
    }),
    dim: () => () => ({
      transition: 'filter 0.15s ease-in',
      '&:hover, &:focus': {
        filter: 'saturate(4) contrast(50%)',
      },
      '&:active': {
        filter: 'saturate(2) contrast(75%)',
      },
    }),
  },
  media: {
    bp1: '(min-width: 40em)',
    bp2: '(min-width: 52em)',
    bp3: '(min-width: 64em)',
    bp4: '(min-width: 72em)',
  },
});
