import HomePage from '@/components/HomePage';
import MetaHead from '@/components/MetaHead';

import content from '@/data/content.json';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <MetaHead meta={content.meta} />
      <HomePage content={content} />
      <Script src='/assets/js/main.js' defer />
    </>
  );
}
