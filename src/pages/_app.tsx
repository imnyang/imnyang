import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4578100060747818"
            crossOrigin="anonymous"
        />
      <Head>
        <title>imnyang | 남현석</title>
        <meta
          name="description"
          content="평범한 한 학생의 포트폴리오"
        />
        <meta name="google-adsense-account" content="ca-pub-4578100060747818" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
