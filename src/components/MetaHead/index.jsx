import Head from 'next/head';
import Script from 'next/script';

const MetaHead = (props) => {
  const { meta } = props;
  return (
    <Head>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={meta.description} />
      <title>{meta.title}</title>
      <link rel='icon' href='/favicon.ico' />
      <link rel='stylesheet' href='https://unicons.iconscout.com/release/v3.0.6/css/line.css' />
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      <link rel='stylesheet' href='/assets/css/swiper-bundle.min.css' />
      <link rel='stylesheet' href='/assets/css/styles.css' />
    </Head>
  );
};

export default MetaHead;
