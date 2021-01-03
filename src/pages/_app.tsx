import React, { useEffect } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import 'destyle.css';
import { theme } from '../app/theme';
import { AppBar } from '../components/AppBar';

const useStyles = makeStyles(() => ({
  body: {
    marginTop: 60,
    minHeight: 'calc(100vh - 60px)',
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

      <div className={classes.body}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;
