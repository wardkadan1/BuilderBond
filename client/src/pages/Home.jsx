import HomeMain from "../components/homepage/home/HomeMain";
import About from "../components/homepage/about/About";
import ContactUs from "../components/homepage/ContactUs";

const Home = ({ homeRef, aboutRef, contactUsRef }) => {
  return (
    <>
      <section id="home" ref={homeRef}>
        <HomeMain />
      </section>
      <section id="about" ref={aboutRef}>
        <About />
      </section>
      <section id="contact" ref={contactUsRef}>
        <ContactUs />
      </section>
    </>
  );
};

export default Home;
