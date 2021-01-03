import { NextPage } from 'next';
import Head from 'next/head';
import { APP_NAME } from '../app/settings';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`トップ | ${APP_NAME}`}</title>
      </Head>

      <div>initial page</div>
    </>
  );
};

export default Index;
