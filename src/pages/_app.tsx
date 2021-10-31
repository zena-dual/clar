import React, { useEffect } from 'react';
import Head from 'next/head';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import 'destyle.css';
import { theme } from '../app/theme';
import { AppBar, appBarHeight } from '../components/AppBar';
import { SideBar, sideBarWidth } from '../components/SideBar';

const useStyles = makeStyles(() => ({
  body: {
    overflowY: 'scroll',
  },
}));

interface Props<ComponentProps> {
  Component: (props: ComponentProps) => JSX.Element;
  pageProps: ComponentProps;
}

const App = ({ Component, pageProps }: Props<any>) => {
  const classes = useStyles();

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <AppBar />

      <Box display="flex" mt={appBarHeight}>
        <Box width={sideBarWidth}>
          <SideBar />
        </Box>

        <Box
          className={classes.body}
          height={`calc(100vh - ${appBarHeight})`}
          padding={3}
          width={`calc(100vw - ${sideBarWidth})`}
        >
          {typeof pageProps.title === 'string' && (
            <Box pb={2}>
              <Typography variant="h6">{pageProps.title}</Typography>
            </Box>
          )}

          <Component {...pageProps} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
