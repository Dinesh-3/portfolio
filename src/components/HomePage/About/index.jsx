import content from './index.json';
import styles from './styles.module.scss';

const About = () => {
  return (
    <section className={`${styles.about} section`} id='about'>
      <h2 className='section__title'>{content.title}</h2>
      <span className='section__subtitle'>{content.subTitle}</span>

      <div className={`${styles.container} container grid`}>
        <img src='/assets/section_image.jpg' alt='' className={styles.img} />

        <div className={styles.data}>
          <p className={`${styles.description}`}>{content.description}</p>
          <div className={`${styles.infos}`}>
            {content.infos.map((info) => (
              <div key={info.title} className={styles.info}>
                <div className={styles.count}>
                  <i className={`bx ${info.icon}`} ></i>
                  <h4 className={`${styles.infoTitle}`}>{info.title}</h4>
                </div>
                <p className={`${styles.infoName}`}>{info.wordOne} {info.wordTwo}</p>
              </div>
            ))}
          </div>
          <div className={styles.buttons}>
            <a download href='assets/pdf/Dinesh_Resume.pdf' className={`${styles.btn} button button--flex`}>
              Download CV <i className='bx bxs-download'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
