import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import leafAnimation from '../animations/leaf.json'; 

const Accueil = () => {
  return (
    <section 
      id="accueil"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-[#0E343B] bg-cover bg-center" 
      //style={{ backgroundImage: 'url(/assets/dessin.jpg)' }} 
    >

     <motion.div
        className="relative w-full overflow-hidden mb-12 sm:mb-8"
        initial={{ opacity: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="text-white max-w-fit mx-auto sm:text-3xl md:text-4xl bg-black bg-opacity-10 p-4 rounded-lg">
          En recherche d'entreprise pour un contrat de professionnalisation<br />
          <br />
          OU PREMIER POSTE
        </p>
      </motion.div>

      {/* Animation du titre */}
      <motion.h1
        className="text-white text-5xl sm:text-6xl md:text-7xl font-special bg-opacity-10 mb-8 sm:mb-4 bg-black p-4 rounded-lg"
        initial={{ opacity: 0, y: '20%' }}  // Opacité 0 au départ pour créer l'effet d'animation
        animate={{ opacity: 1, y: 0 }}  // L'élément devient visible avec un léger mouvement
        transition={{ duration: 0.3 }}  // Durée d'animation plus courte (0.3s)
      >
        Aline Coatanoan
      </motion.h1>

      {/* Animation de la description */}
      <motion.p
        className="text-white sm:text-8xl md:text-4xl mb-12 sm:mb-6 font-special bg-black bg-opacity-10 p-4 rounded-lg" // Fond noir semi-transparent et texte blanc
        initial={{ opacity: 0, y: '20%' }}
        animate={{ opacity: 1, y: '0%' }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Développeuse web full stack

      </motion.p>

      {/* Animation Lottie en bas */}
      <div
        className="absolute bottom-0 right-0"
        style={{ width: '400px', height: '400px' }} // entre 96px (w-24) et 104px (w-26)
      >
        <Lottie animationData={leafAnimation} loop={true} />
      </div>

    </section>
  );
};

export default Accueil;
