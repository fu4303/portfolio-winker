const works = [
  {
    id: 'PaintingWithGradients',
    title: 'Painting with gradients',
    url: '/painting-with-gradients',
    ogImage:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/w_1200,h_630,c_fill/v1624756216/portfolio/painting-with-gradients/gradient-painting-cover_rn4ait.png',
    video:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/v1624756216/portfolio/painting-with-gradients/gradient-painting-cover_rn4ait.mp4',
    type: 'video',
    year: 2021,
    span: 2,
  },
  {
    id: 'ChamkeelePathar',
    title: 'चमकीले पत्थर',
    url: '/chamkeele-pathar',
    ogImage:
      'https://res.cloudinary.com/dpym7j3nj/image/upload/v1624755964/portfolio/chamkeele-pathar/chamkeele-pathar-cover.png',
    image:
      'https://res.cloudinary.com/dpym7j3nj/image/upload/v1624755964/portfolio/chamkeele-pathar/chamkeele-pathar-cover.png',
    type: 'video',
    year: 2021,
  },
  {
    id: 'NotQuitePlatonicSolids',
    title: 'Not quite platonic solids',
    url: '/not-quite-platonic-solids',
    ogImage:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/w_1200,h_630,c_fill/v1624766614/portfolio/not-quite-platonic-solids/2021.03.02-20.50.44_idbqud.png',
    video:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/v1624766614/portfolio/not-quite-platonic-solids/2021.03.02-20.50.44_idbqud.mp4',
    type: 'video',
    year: 2021,
  },
  {
    id: 'GhostPlanets',
    title: 'Ghost Planets',
    url: '/ghost-planets',
    ogImage:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/w_1200,h_630,c_fill/v1624749305/portfolio/ghost-planets/ghost-planets_nfqvpf.png',
    video:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749305/portfolio/ghost-planets/ghost-planets_nfqvpf.mp4',
    type: 'video',
    year: 2021,
  },
  {
    id: 'GlassySolids',
    title: 'Glassy solids',
    url: '/glassy-solids',
    ogImage:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/w_1200,h_630,c_fill/v1624758980/portfolio/glassy-solids/2021.02.25-21.36.45_r4dug2_ldxono.png',
    video:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/v1624758980/portfolio/glassy-solids/2021.02.25-21.59.09_wo6ytg.mp4',
    type: 'video',
    year: 2021,
  },
  {
    id: 'DragonSkin',
    title: 'Dragon skin',
    url: '/dragon-skin',
    ogImage:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/w_1200,h_630,c_fill/v1624749314/portfolio/dragon-skin/2021.05.15-12.40.00_iqztae.png',
    video:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/v1624749314/portfolio/dragon-skin/2021.05.15-12.40.00_iqztae.mp4',
    type: 'video',
    year: 2021,
  },
  {
    id: 'SomeCaterpillarsEvolve',
    title: 'Some caterpillars evolve',
    url: '/some-caterpillars-evolve',
    ogImage:
      'https://res.cloudinary.com/dpym7j3nj/image/upload/v1624755787/portfolio/rlrr/rlrr-cover_ersnan.png',
    image:
      'https://res.cloudinary.com/dpym7j3nj/image/upload/v1624755787/portfolio/rlrr/rlrr-cover_ersnan.png',
    type: 'image',
    year: 2020,
  },
  {
    id: 'InfinitePipes',
    title: 'Infinite pipes',
    url: '/infinite-pipes',
    ogImage:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/w_1200,h_630,c_fill/v1624769021/portfolio/infinite-pipes/2021.06.27-00.38.18_ru3a4h.png',
    video:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/v1624769021/portfolio/infinite-pipes/2021.06.27-00.38.18_ru3a4h.mp4',
    type: 'video',
    year: 2019,
    span: 2,
  },
  {
    id: 'Torsions',
    title: 'Torsions',
    url: '/torsions',
    ogImage:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/w_1200,h_630,c_fill/v1624761653/portfolio/torsions/2020.10.18-21.28.06_iakksd.png',
    video:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/v1624761653/portfolio/torsions/2020.10.18-21.28.06_iakksd.mp4',
    type: 'video',
    year: 2020,
  },
  {
    id: 'MashingMesh',
    title: 'Mashing Mesh',
    url: '/mashing-mesh',
    ogImage:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/w_1200,h_630,c_fill/v1624760834/portfolio/mashing-mesh/2021.01.02-22.44.22_wskwio.png',
    video:
      'https://res.cloudinary.com/dpym7j3nj/video/upload/v1624760834/portfolio/mashing-mesh/2021.01.02-22.44.22_wskwio.mp4',
    type: 'video',
    year: 2020,
  },
  {
    id: 'Curtains',
    title: 'Curtains',
    url: '/curtains',
    ogImage:
      'https://res.cloudinary.com/dpym7j3nj/image/upload/v1624841495/portfolio/curtains/springytriangles_zey06z.gif',
    image:
      'https://res.cloudinary.com/dpym7j3nj/image/upload/v1624841495/portfolio/curtains/springytriangles_zey06z.gif',
    type: 'gif',
    year: 2012,
  },
  {
    id: 'Homesick',
    title: 'Homesick',
    url: 'https://varun.ca/projects/homesick/',
    ogImage:
      'https://res.cloudinary.com/dpym7j3nj/image/upload/v1625433493/homesick1_bschr3.png',
    image:
      'https://res.cloudinary.com/dpym7j3nj/image/upload/v1625433493/homesick1_bschr3.png',
    type: 'installation',
    year: 2013,
  },
  {
    id: 'TetheredMotion',
    title: 'Tethered Motion',
    url: 'https://varun.ca/projects/tethered-motion/',
    ogImage:
      'https://res.cloudinary.com/dpym7j3nj/image/upload/v1573435865/wave_z0gifz.gif',
    image:
      'https://res.cloudinary.com/dpym7j3nj/image/upload/v1573435865/wave_z0gifz.gif',
    type: 'installation',
    year: 2011,
  },
];

export function workById(id) {
  return works.find((work) => work.id === id);
}

export default works;
