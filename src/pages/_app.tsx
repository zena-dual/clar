import React, { useEffect } from 'react';
import 'destyle.css';

interface Props<ComponentProps> {
  Component: (props: ComponentProps) => JSX.Element;
  pageProps: ComponentProps;
}

const App = ({ Component, pageProps }: Props<any>) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return <Component {...pageProps} />;
};

export default App;
