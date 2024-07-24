import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: { Component: React.ElementType; pageProps: any }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
