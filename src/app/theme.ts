import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  // BootStrapと同様の基準
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 768,
      lg: 1000,
      xl: 1200,
    },
  },
  palette: {
    background: {
      default: '#FFF',
    },
    primary: {
      main: '#D3381C',
    },
  },
});
