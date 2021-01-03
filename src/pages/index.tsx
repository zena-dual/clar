import { NextPage } from 'next';
import Head from 'next/head';
import { APP_NAME } from '../app/settings';

const Index: NextPage = () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <title>{`トップ | ${APP_NAME}`}</title>
    </Head>

    <div>initial page</div>
  </>
);

export default Index;
