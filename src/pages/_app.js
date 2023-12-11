import AuthLayout from '@/components/AuthLayout';

import '@/styles/index.scss';

export default function App({ Component, pageProps }) {
  return (
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
  );
}
