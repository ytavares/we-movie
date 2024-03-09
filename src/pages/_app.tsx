import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';
import { GlobalStyles } from '../../styles/global';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Teste Front React WeFit</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
