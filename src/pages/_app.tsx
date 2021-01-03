import React from 'react';
import 'destyle.css';

interface Props<ComponentProps> {
  Component: (props: ComponentProps) => JSX.Element;
  pageProps: ComponentProps;
}

const App = ({ Component, pageProps }: Props<any>) => <Component {...pageProps} />;

export default App;
