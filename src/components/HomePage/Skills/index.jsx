import { useState } from 'react';

import content from './index.json';
import styles from './styles.module.scss';

const Skills = () => {
  const [tabs, setTabs] = useState(content.state.group);

  const handleTabClick = (group) => {
    setTabs((prev) => ({ ...prev, [group.id]: !prev[group.id] }));
  };

  return (
    <section className={`${styles.skills} section`} id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My technical level</span>

      <div className={`${styles.container} container grid`}>
        {content.groups.map((group) => (
          <div className={`${styles.content} ${tabs[group.id] ? styles.open : styles.close}`} key={group.title}>
            <div className={styles.header} onClick={() => handleTabClick(group)}>
              <p className={styles.icon}><i className={`bx ${group.icon}`}></i></p>
              <div>
                <h1 className={styles.title}>{group.title}</h1>
                <span className={styles.subtitle}>{group.subTitle}</span>
              </div>
              <i className={`bx bxs-chevron-down ${styles.arrow}`}></i>
            </div>

            <div className={`${styles.list} grid`}>
              {group.skills.map((skill) => (
                <div className={styles.data} key={skill.name}>
                  <div className={styles.titles}>
                    <h3 className={styles.name}>{skill.name}</h3>
                    <span className={styles.number}>{skill.percentage}%</span>
                  </div>
                  <div className={styles.bar}>
                    <span className={`${styles.percentage} ${styles.html}`} style={{ width: `${skill.percentage}%` }}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
