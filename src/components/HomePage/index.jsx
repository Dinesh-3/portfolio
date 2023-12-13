import About from './About';
import Banner from './Banner';
import Header from './Header';
import Skills from './Skills';
import Qualification from './Qualification';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import Footer from './Footer';
import { useEffect } from 'react';

const HomePage = (props) => {
  const { content } = props;

  useEffect(() => {
    function scrollUp() {
      const scrollUp = document.getElementById('scroll-up');
      if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
      else scrollUp.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollUp);
    return () => window.removeEventListener('scroll', scrollUp);
  }, []);

  const commonProps = { content };

  return (
    <>
      <Header {...commonProps} />
      <main className='main'>
        <Banner />
        <About />
        <Skills />
        <Qualification />
        {false && <Portfolio />}
        <Contacts />
      </main>
      <Footer />
      <a href='#' className='scrollup show-scroll' id='scroll-up'>
        <i className='bx bx-up-arrow-alt'></i>
      </a>
    </>
  );
};

export default HomePage;
