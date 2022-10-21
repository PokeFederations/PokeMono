import { TCustomDefaultThemeProps } from './default';

declare module '@mui/material/styles' {
  interface Theme extends TCustomDefaultThemeProps {}
  interface ThemeOptions extends TCustomDefaultThemeProps {}
}
