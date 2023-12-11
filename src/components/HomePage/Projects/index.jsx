import styles from './styles.module.scss';
import content from './index.json';

const Projects = () => {
  return (
    <section className={`${styles.project} section`}>
      <div className={styles.bg}>
        <div className={`${styles.container} container grid`}>
          <div className={styles.data}>
            <h2 className={styles.title}>{content.title}</h2>
            <p className={styles.description}>{content.description}</p>
            <a href='#contact' className='button button--flex button--white'>
              Contact Me
              <i className={`uil uil-message button__icon ${styles.icon}`}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
