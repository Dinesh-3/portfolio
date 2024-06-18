import styles from './styles.module.scss';

const content = {
  certificates: [
    {
      title: 'Problem Solving in Java',
      providerName: 'HackerRank',
      url: 'https://www.hackerrank.com/certificates/9b07e9269066',
      id: '9b07e9269066',
      logo: '/assets/img/hackerrank.svg',
    },
    {
      title: 'Fullstack Development',
      providerName: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-f6e8e42f-d9fb-410e-89b3-96f2dea495f2/',
      id: 'UC-f6e8e42f-d9fb-410e-89b3-96f2dea495f2',
      logo: '/assets/img/udemy.png',

    }
  ]
}

const Certifications = () => {
  return (
    <section className={`section`} id='contact'>
      <h2 className='section__title'>{'Certifications'}</h2>
      <span className='section__subtitle'>{''}</span>

      <div className={`container grid ${styles.stack}`}>
        {
          content.certificates.map(certification => (
            <a href={certification.url} target='_blank' key={certification.id}>
              <div className={styles.card}>
                  <img src={certification.logo} width={96} />
                  <div>
                    <h3>{certification.title}</h3>
                    <p className={styles.provider}>{certification.providerName}</p>
                    <p className={styles.id}>Credential ID: {certification.id}</p>
                  </div>
              </div>
            </a>
          ))
        }
      </div>
    </section>
  );
};

export default Certifications;
