import content from './index.json';
import styles from './styles.module.scss';

const Banner = () => {
  return (
    <section className={`${styles.home} section`} id='home'>
      <div className={`${styles.container} container grid`}>
        <div className={`${styles.content} grid`}>
          <div className={styles.social}>
            {content.links.map((link) => (
              <a href={link.href} target='_blank' className={styles.socialIcon} key={link.href}>
                {
                  link.img ? <img src={link.img} width={'32'} /> : <i className={link.className}></i>
                }
              </a>
            ))}
          </div>

          <div className={styles.img}>
            <div className={styles.background}></div>
            <img src='/assets/profile.png' />
          </div>

          <div className={styles.data}>
            <h1 className={styles.title}>{content.title}</h1>
            <h3 className={styles.subtitle}>{content.subTitle}</h3>
            <p className={styles.description}>{content.description}</p>
            <a href='#contact' className={`${styles.btn} button button--flex`}>
              Contact Me <i className='bx bx-send' ></i>
            </a>
          </div>
        </div>

        {/* <div className={'home__scroll'}>
          <a href='#about' className={'home__scroll-button button--flex'}>
            <i className={'uil uil-mouse-alt home__scroll-mouse'}></i>
            <span className={'home__scroll-name'}>Scroll down</span>
            <i className={'uil uil-arrow-down home__scroll-arrow'}></i>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Banner;
