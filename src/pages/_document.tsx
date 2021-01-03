import React, { Children } from 'react';
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

class CustomDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    // Material UIをSSRで使用するための処理
    // https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
    const sheets = new ServerStyleSheets();
    const originalRenderPage = context.renderPage;

    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(context);

    return {
      ...initialProps,
      styles: [...Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  }
}

export default CustomDocument;
