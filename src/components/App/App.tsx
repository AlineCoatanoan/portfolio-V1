import { useEffect } from "react";
import Header from "../Header";
import Accueil from "../Accueil";
import Profile from "../Profile";
import Skills from "../Skills";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Footer from "../Footer";

const App = () => {
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Si la section est visible dans la fenêtre (viewport)
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('fade-in');
      } else {
        section.classList.remove('fade-in');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <section id="accueil">
        <Accueil />
      </section>
      <section id="profile">
        <Profile />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
