import type { AppProps } from "next/app";
import AuthLayout from "@/components/AuthLayout";

import "@/styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthLayout>
      <Component {...pageProps} />
    </AuthLayout>
  );
}
