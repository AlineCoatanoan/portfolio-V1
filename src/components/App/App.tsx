import React from 'react';
import Header from '../Header';
import Accueil from '../Accueil';
import Profil from '../Profil';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import Interet from '../Interet';
import Contact from '../Contact';
import Footer from '../Footer';
import VisitCounter from '../CounterVisit';  

const App = () => {
  return (
    <div>
      <Header />
      <Accueil />
      <Profil />
      <Skills />
      <Portfolio />
      <Interet />
      <Contact />
      <VisitCounter />  
      <Footer />
    </div>
  );
};

export default App;
