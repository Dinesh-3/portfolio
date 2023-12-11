import content from './index.json';

const Testimonials = () => {
  return (
    <section className='testimonial section'>
      <div className='section__title'>{content.title}</div>
      <span className='section__subtitle'>{content.subTitle}</span>
      <div
        className='testimonial__container container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events'
        style={{ cursor: 'grab' }}
      >
        <div
          className='swiper-wrapper'
          id='swiper-wrapper-7f6ae546a10253e7f'
          aria-live='polite'
          style={{ transform: 'translate3d(-816px, 0px, 0px); transition-duration: 0ms' }}
        >
          {content.testimonials.map((testimonial) => (
            <div
              className='testimonial__content swiper-slide swiper-slide-duplicate swiper-slide-prev'
              data-swiper-slide-index='2'
              role='group'
              aria-label='2 / 7'
              style={{ width: '360px', marginRight: '48px' }}
              key={testimonial.name}
            >
              <div className='testimonial__data'>
                <div className='testimonial__header'>
                  <img src='assets/img/testimonial3.jpg' alt='' className='testimonial__img' />
                  <div>
                    <h3 className='testimonial__name'>{testimonial.name}</h3>
                    <span className='testimonial__client'>{testimonial.client}</span>
                  </div>
                </div>
                <div>
                  <i className='uil uil-star .testimonial__icon-star'></i>
                  <i className='uil uil-star .testimonial__icon-star'></i>
                  <i className='uil uil-star .testimonial__icon-star'></i>
                  <i className='uil uil-star .testimonial__icon-star'></i>
                  <i className='uil uil-star .testimonial__icon-star'></i>
                </div>
              </div>
              <p className='testimonial__description'>{testimonial.description}</p>
            </div>
          ))}
        </div>
        <span className='swiper-notification' aria-live='assertive' aria-atomic='true'></span>
      </div>
    </section>
  );
};

export default Testimonials;
