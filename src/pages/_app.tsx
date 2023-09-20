// pages/_app.tsx

import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import Head from 'next/head';
import '@/app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package_v0.16/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package_v0.16/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package_v0.16/favicon-16x16.png" />
                <link rel="manifest" href="/favicon_package_v0.16/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>

            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
