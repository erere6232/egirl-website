import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EasyGirl (EGIRL) - Satirical Meme Token</title>
        <meta name="description" content="EasyGirl (EGIRL) - A satirical meme token that reflects on modern relationships through blockchain technology. Not encouraging frivolity, but satirizing imbalance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="EasyGirl (EGIRL) - Satirical Meme Token" />
        <meta property="og:description" content="A satirical meme token that reflects on modern relationships through blockchain technology." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EasyGirl (EGIRL) - Satirical Meme Token" />
        <meta name="twitter:description" content="A satirical meme token that reflects on modern relationships through blockchain technology." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
