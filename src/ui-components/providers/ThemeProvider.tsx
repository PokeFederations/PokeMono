import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { defaultTheme } from '../themes';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

type TThemeProviderProps = {
  children: React.ReactNode;
};
const ThemeProvider = ({ children }: TThemeProviderProps) => (
  <CacheProvider value={muiCache}>
    <MuiThemeProvider theme={defaultTheme}>{children}</MuiThemeProvider>
  </CacheProvider>
);

export default ThemeProvider;
