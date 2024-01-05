import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>imnyang | 남현석</title>
        <meta
          name="description"
          content="평범한 한 학생의 포트폴리오"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
