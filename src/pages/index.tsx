import { NextPage } from 'next';
import Head from 'next/head';
import { APP_NAME } from '../app/settings';

interface Props {
  title: string;
}

const Index: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>{`トップ | ${APP_NAME}`}</title>
      </Head>

      <div>initial page</div>
    </>
  );
};

Index.getInitialProps = () => ({ title: 'トップ' });

export default Index;
