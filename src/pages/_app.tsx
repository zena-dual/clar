import React, { useEffect } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import 'destyle.css';
import { theme } from '../app/theme';
import { AppBar, appBarHeight } from '../components/AppBar';
import { SideBar, sideBarWidth } from '../components/SideBar';

const useStyles = makeStyles(() => ({
  body: {
    marginTop: appBarHeight,
    marginLeft: sideBarWidth,
    minHeight: `calc(100vh - ${appBarHeight}px)`,
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

      <AppBar title={typeof pageProps.title === 'string' ? pageProps.title : undefined} />

      <SideBar />

      <div className={classes.body}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;
