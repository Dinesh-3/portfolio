import Head from 'next/head';

const MetaHead = (props) => {
  const { meta } = props;
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={meta.description} />
      <title>{meta.title}</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default MetaHead;
