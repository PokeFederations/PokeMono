import { createTheme } from '@mui/material';

const colorRed = '#FF0000';
const colorBostonRed = '#CC0000';
const colorCeruleanBlue = '#3B4CCA';
const colorGoldenYellow = '#FFDE00';
const colorGoldFoil = '#B3A125';

// ref https://www.deviantart.com/yoshiwoshipower99/art/Pokemon-Type-Colors-736077481
// contrast colors were 92% lightened from main color. See: https://mdigi.tools/lighten-color/
const typesPallete = {
  grass: {
    main: '#204001',
    secondary: '#3c9707',
    light: '#67f708',
    contrast: '#edfedc',
  },
  fire: {
    main: '#fc0d0c',
    secondary: '#f57f0b',
    light: '#f9b90b',
    contrast: '#ffecec',
  },
  water: {
    main: '#0a517a',
    secondary: '#0b7abc',
    light: '#37aff6',
    contrast: '#e3f3fd',
  },
  normal: {
    main: '#aca874',
    secondary: '#cbc9aa',
    light: '#eaeade',
    contrast: '#f8f8f4',
  },
  flying: {
    main: '#095764',
    secondary: '#5eb9b2',
    light: '#dce5e9',
    contrast: '#e2f9fc',
  },
  bug: {
    main: '#92ba2d',
    secondary: '#bddd6e',
    light: '#d8fe9d',
    contrast: '#f7fbed',
  },
  poison: {
    main: '#61137f',
    secondary: '#a818d6',
    light: '#ca72eb',
    contrast: '#f5e6fb',
  },
  electric: {
    main: '#969101',
    secondary: '#fff923',
    light: '#f8ff84',
    contrast: '#fef9d5',
  },
  ground: {
    main: '#bfac21',
    secondary: '#e1d159',
    light: '#ede193',
    contrast: '#fffee2',
  },
  fighting: {
    main: '#800b11',
    secondary: '#e81419',
    light: '#d46063',
    contrast: '#fde4e5',
  },
  psychic: {
    main: '#8b0531',
    secondary: '#ec0d62',
    light: '#f55791',
    contrast: '#fee3ec',
  },
  rock: {
    main: '#474026',
    secondary: '#766b3e',
    light: '#95824e',
    contrast: '#f4f2ea',
  },
  ice: {
    main: '#103d43',
    secondary: '#1b94a1',
    light: '#66d1e5',
    contrast: '#e3f6f8',
  },
  ghost: {
    main: '#472b52',
    secondary: '#8e55a4',
    light: '#bd98ca',
    contrast: '#f2ebf4',
  },
  dragon: {
    main: '#290269',
    secondary: '#8b55fd',
    light: '#d6b2fe',
    contrast: '#ebdffe', // TODO fix color
  },
  dark: {
    main: '#2e231c',
    secondary: '#5e4632',
    light: '#916951',
    contrast: '#f2ede9',
  },
  steel: {
    main: '#454545',
    secondary: '#7b8d8a',
    light: '#bbc5c4',
    contrast: '#f2ede9',
  },
  fairy: {
    main: '#f87da6',
    secondary: '#ffa0c2',
    light: '#fdd1df',
    contrast: '#fef5f8',
  },
  unknown: {
    main: '#a3a3a3',
    secondary: '#c6c6c6',
    light: '#e8e8e8',
    contrast: '#f8f8f8',
  },
};

const customDefaultThemeProps = {
  theme: 'default',
  custom: {
    pallete: {
      colorRed,
      colorBostonRed,
      colorCeruleanBlue,
      colorGoldenYellow,
      colorGoldFoil,
      types: {
        ...typesPallete,
      },
    },
  },
};

export type TCustomDefaultThemeProps = typeof customDefaultThemeProps;

const defaultTheme = createTheme(customDefaultThemeProps);

export default defaultTheme;
