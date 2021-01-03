import { NextPage } from 'next';
import Head from 'next/head';
import { AppBar, makeStyles } from '@material-ui/core';
import { APP_NAME } from '../app/settings';

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: '#D3381C',
  },
}));

const Index: NextPage = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <title>{`トップ | ${APP_NAME}`}</title>
      </Head>

      <AppBar className={classes.appBar}>app bar</AppBar>

      <div>initial page</div>
    </>
  );
};

export default Index;
