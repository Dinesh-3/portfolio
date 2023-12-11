import About from './About';
import Banner from './Banner';
import Header from './Header';
import Skills from './Skills';
import Services from './Services';
import Qualification from './Qualification';
import Portfolio from './Portfolio';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contacts from './Contacts';
import Footer from './Footer';

const HomePage = (props) => {
  const { content } = props;

  const commonProps = { content };

  return (
    <>
      <Header {...commonProps} />
      <main className='main'>
        <Banner />
        <About />
        <Skills />
        <Qualification />
        {false && <Services />}
        {false && <Portfolio />}
        {false && <Projects />}
        {false && <Testimonials />}
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
