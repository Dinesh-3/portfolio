import content from './index.json';

import styles from './styles.module.scss';

const Education = () => {
  return (
    <section className={`${styles.container} section`} id='educations'>
      <h2 className='section__title'>{content.section}</h2>
      {false && <span className='section__subtitle'>{content.subTitle}</span>}
      <div className={`${styles.container} container grid`}>
        <div className={styles.data}>
          <div className={styles.data}>
            {content.entries.map((entry, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.header}>
                  <h4>
                    {entry.degree}
                  </h4>
                </div>
                  <h4>
                    {entry.institution}
                  </h4>
                <p className={styles.subTitle}>
                  {entry.year} | {entry.location}
                </p>
                <p className={styles.mark}>
                  {entry.mark.label} - {entry.mark.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
