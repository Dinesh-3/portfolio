import content from './index.json';

import styles from './styles.module.scss';

const Experience = () => {
  return (
    <section className={`${styles.container} section`} id='experience'>
      <h2 className='section__title'>{content.title}</h2>
      {false && <span className='section__subtitle'>{content.subTitle}</span>}
      <div className={`${styles.container} container grid`}>
        <div className={styles.data}>
          {content.experiences.map((experience, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.header}>
                <h4>
                  {experience.company} | {experience.role}
                </h4>
              </div>
              <p className={styles.subTitle}>{experience.year} | {experience.location}</p>
              <ul className={styles.points}>
                {experience.points.map((point) => (
                  <li key={point.text}>
                    <b>•</b> {point.text}
                  </li>
                ))}
              </ul>
              <div className={styles.technologies}>
                <h4>Technologies: </h4>
                <div className={styles.labels}>
                    {experience.technologies.map((tech) => (
                    <div key={tech.name} className={styles.label} style={{ backgroundColor: tech.color }}>
                        <p>{tech.name}</p>
                    </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
