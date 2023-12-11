import content from './index.json';

const Services = () => {
  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>{content.title}</h2>
      <span className='section__subtitle'>{content.subTitle}</span>

      <div className='services__container container grid'>
        {content.services.map((service) => (
          <div className='services__content' key={service.service}>
            <div>
              <i className={`uil ${service.icon} services__icon`}></i>
              <h3 className='services__title'>{service.service}</h3>
            </div>
            <span className='button button--flex button--small button--link services__button'>
              View More
              <i className='uil uil-arrow-right button__icon'></i>
            </span>

            <div className='services__modal'>
              <div className='services__modal-content'>
                <h4 className='services__modal-title'>{service.service}</h4>
                <i className='uil uil-times services__modal-close'></i>

                <ul className='services__modal-services grid'>
                  {service.points.map((point) => (
                    <li className='services__modal-service' key={point}>
                      <i className='uil uil-check-circle services__modal-icon'></i>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
