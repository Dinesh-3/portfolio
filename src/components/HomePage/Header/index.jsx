import { useEffect, useState } from 'react';
import content from './index.json';

import styles from './styles.module.scss';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    var sections = document.querySelectorAll('section[id]');

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
      });
    }
    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
  }, []);

  const onToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <header className='header scroll-header' id='header'>
      <nav className='nav container'>
        <a href='#' className='nav__logo'>
          {content.title}
        </a>
        <div className={`nav__menu ${toggleMenu ? 'show-menu' : ''}`} id='nav-menu'>
          <ul className='nav__list grid'>
            {content.links.map((link) => (
              <li className='nav__item' key={link.href}>
                <a href={`#${link.href}`} className='nav__link' onClick={onToggleMenu}>
                  <i className={`bx ${link.icon} nav__icon`}></i> {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='nav__btns'>
          <div className={`nav__toggle ${styles.nav_toggle}`} id='nav-toggle' onClick={onToggleMenu}>
            <i className={`bx ${toggleMenu ? 'bx-x' : 'bx-category'}`}></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
