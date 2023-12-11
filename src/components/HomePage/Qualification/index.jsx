import { useState } from 'react';

import content from './index.json';
import styles from './styles.module.scss';

const Qualification = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={`${styles.qualification} section`}>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'></span>

      <div className={`${styles.container} container`}>
        <div className={styles.tabs}>
          {content.qualifications.map((qualification, index) => (
            <div
              className={`${styles.button} button--flex ${activeTab == index ? styles.active : ''}`}
              data-target={`#${qualification.id}`}
              onClick={() => setActiveTab(index)}
              key={index}
            >
              <i className={`bx ${qualification.icon} ${styles.icon}`}></i>
              {qualification.title}
            </div>
          ))}
        </div>
        <div className={styles.sections}>
          {content.qualifications.map((qualification, index) => (
            <div className={`${styles.content} ${activeTab == index ? styles.active : styles.inactive}`} id={qualification.id} key={index}>
              {qualification.steps.map((step, index) => (
                <div className={`${styles.data} ${index % 2 == 0 ? styles.even : styles.odd}`} key={index}>
                  <div className={styles.container}>
                    <h3 className={styles.title}>{step.title}</h3>
                    <span className={styles.subtitle}>{step.subTitle}</span>
                    <div className={styles.calendar}>
                      <i className='uil uil-calendar-alt'></i>
                      {step.year}
                    </div>
                  </div>
                  <div className={styles.separator_line}>
                    <span className={styles.rounder}></span>
                    {index != qualification.steps.length - 1 && <span className={styles.line}></span>}
                  </div>
                  <div className={styles.empty}></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
