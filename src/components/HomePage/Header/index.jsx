const Header = () => {
  return (
    <header className='header scroll-header' id='header'>
      <nav className='nav container'>
        <a href='#' className='nav__logo'>
          Dinesh I
        </a>
        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' className='nav__link'>
                <i className='uil uil-estate nav__icon'></i> Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                <i className='uil nav__icon uil-user'></i> About
              </a>
            </li>
            <li className='nav__item'>
              <a href='#skills' className='nav__link'>
                <i className='uil nav__icon uil-file-alt'></i> Skills
              </a>
            </li>
            {/* <li className='nav__item'>
              <a href='#services' className='nav__link'>
                <i className='uil nav__icon uil-briefcase-alt'></i> Services
              </a>
            </li>
            <li className='nav__item'>
              <a href='#portfolio' className='nav__link'>
                <i className='uil nav__icon uil-scenery'></i> Portfolio
              </a>
            </li> */}
            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                <i className='uil nav__icon uil-message'></i> Contact Me
              </a>
            </li>
          </ul>
          <i className='uil uil-times nav__close' id='nav-close'></i>
        </div>
        {/* <div className='nav__btns'>
          <i className='uil uil-moon change-theme' id='theme-button'></i>
          <div className='nav__toggle' id='nav-toggle'>
            <i className='uil uil-apps'></i>
          </div>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
