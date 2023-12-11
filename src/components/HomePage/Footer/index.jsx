import content from './index.json';

import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.bg}>
        <div className={`${styles.container} container grid`}>
          <div>
            <h1 className={styles.title}>Dinesh</h1>
            <span className={styles.subtitle}>Frontend developer</span>
          </div>

          <ul className={styles.links}>
            <li>
              <a href='#home' className={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href='#contact' className={styles.link}>
                Contact
              </a>
            </li>
          </ul>

          <div className={styles.socials}>
            {
              content.links.map(link => (
                <a href={link.href} target='_blank' className={`${styles.social} ${styles[link.name]}`} key={link.icon}>
                  <i className={`bx ${link.icon}`} ></i>
                </a>
              ))
            }
          </div>
        </div>
        <p className={styles.copy}>Made with <i className={`bx bxs-heart ${styles.heart}`}></i> by <i className={`bx bxl-react ${styles.react}`}></i> </p>
      </div>
    </footer>
  );
};

export default Footer;

