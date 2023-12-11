const Portfolio = () => {
  return (
    <section className='portfolio section' id='portfolio'>
      {/* <!--==================== PORTFOLIO ====================--> */}
      <h2 className='section__title'>Portfolio</h2>
      <span className='section__subtitle'>Most recent work</span>

      <div className='portfolio__container container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-css-mode'>
        <div className='swiper-wrapper' id='swiper-wrapper-2fae89fa8d3548b8' aria-live='polite'>
          <div
            className='portfolio__content grid swiper-slide swiper-slide-duplicate swiper-slide-prev'
            data-swiper-slide-index='2'
            role='group'
            aria-label='1 / 5'
            style={{ width: '768px' }}
          >
            <img src='assets/img/portfolio3.jpg' alt='' className='portfolio__img' />

            <div className='portfolio__data'>
              <h3 className='portfolio__title'>Online Store</h3>
              <p className='portfolio__description'>
                Website adaptable to all devices, with ui components and animated interactions.
              </p>
              <a href='#' className='button button--flex button--small portfolio__button'>
                Demo
                <i className='uil uil-arrow-right button__icon'></i>
              </a>
            </div>
          </div>
          {/* <!--==================== PORTFOLIO 1 ====================--> */}
          <div
            className='portfolio__content grid swiper-slide swiper-slide-active'
            data-swiper-slide-index='0'
            role='group'
            aria-label='2 / 5'
            style={{ width: '768px' }}
          >
            <img src='assets/img/portfolio1.jpg' alt='' className='portfolio__img' />

            <div className='portfolio__data'>
              <h3 className='portfolio__title'>Modern Website</h3>
              <p className='portfolio__description'>
                Website adaptable to all devices, with ui components and animated interactions.
              </p>
              <a href='#' className='button button--flex button--small portfolio__button'>
                Demo
                <i className='uil uil-arrow-right button__icon'></i>
              </a>
            </div>
          </div>
          {/* <!--==================== PORTFOLIO 2 ====================--> */}
          <div
            className='portfolio__content grid swiper-slide swiper-slide-next'
            data-swiper-slide-index='1'
            role='group'
            aria-label='3 / 5'
            style={{ width: '768px' }}
          >
            <img src='assets/img/portfolio2.jpg' alt='' className='portfolio__img' />

            <div className='portfolio__data'>
              <h3 className='portfolio__title'>Brand Design</h3>
              <p className='portfolio__description'>
                Website adaptable to all devices, with ui components and animated interactions.
              </p>
              <a href='#' className='button button--flex button--small portfolio__button'>
                Demo
                <i className='uil uil-arrow-right button__icon'></i>
              </a>
            </div>
          </div>
          {/* <!--==================== PORTFOLIO 3 ====================--> */}
          <div
            className='portfolio__content grid swiper-slide swiper-slide-duplicate-prev'
            data-swiper-slide-index='2'
            role='group'
            aria-label='4 / 5'
            style={{ width: '768px' }}
          >
            <img src='assets/img/portfolio3.jpg' alt='' className='portfolio__img' />

            <div className='portfolio__data'>
              <h3 className='portfolio__title'>Online Store</h3>
              <p className='portfolio__description'>
                Website adaptable to all devices, with ui components and animated interactions.
              </p>
              <a href='#' className='button button--flex button--small portfolio__button'>
                Demo
                <i className='uil uil-arrow-right button__icon'></i>
              </a>
            </div>
          </div>
          <div
            className='portfolio__content grid swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active'
            data-swiper-slide-index='0'
            role='group'
            aria-label='5 / 5'
            style={{ width: '768px' }}
          >
            <img src='assets/img/portfolio1.jpg' alt='' className='portfolio__img' />

            <div className='portfolio__data'>
              <h3 className='portfolio__title'>Modern Website</h3>
              <p className='portfolio__description'>
                Website adaptable to all devices, with ui components and animated interactions.
              </p>
              <a href='#' className='button button--flex button--small portfolio__button'>
                Demo
                <i className='uil uil-arrow-right button__icon'></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className='swiper-button-next'
          tabIndex='0'
          role='button'
          aria-label='Next slide'
          aria-controls='swiper-wrapper-2fae89fa8d3548b8'
        >
          <i className='uil uil-angle-right-b swiper-portfolio-icon'></i>
        </div>
        <div
          className='swiper-button-prev'
          tabIndex='0'
          role='button'
          aria-label='Previous slide'
          aria-controls='swiper-wrapper-2fae89fa8d3548b8'
        >
          <i className='uil uil-angle-left-b swiper-portfolio-icon'></i>
        </div>

        <div className='swiper-pagination swiper-pagination-clickable swiper-pagination-bullets'>
          <span
            className='swiper-pagination-bullet swiper-pagination-bullet-active'
            tabIndex='0'
            role='button'
            aria-label='Go to slide 1'
          ></span>
          <span className='swiper-pagination-bullet' tabIndex='0' role='button' aria-label='Go to slide 2'></span>
          <span className='swiper-pagination-bullet' tabIndex='0' role='button' aria-label='Go to slide 3'></span>
        </div>
        <span className='swiper-notification' aria-live='assertive' aria-atomic='true'></span>
      </div>
    </section>
  );
};

export default Portfolio;
