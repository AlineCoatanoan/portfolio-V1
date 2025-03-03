import React from 'react';
import { motion } from 'framer-motion';

const Accueil = () => {
  return (
    <section 
      id="accueil"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-[#0A3B42] bg-cover bg-center" // Ajout du fond d'écran avec bg-cover et bg-center
      style={{ backgroundImage: 'url(/assets/dessin.jpg)' }} // Remplace '/path/to/dessin.jpg' par le chemin de ton image
    >
      {/* Texte qui rebondit */}
      <motion.div
        className="relative w-full overflow-hidden mb-12 sm:mb-8"
        initial={{ opacity: 0, x: '20%' }}
        animate={{ opacity: 1, x: '0%' }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <motion.p
          className="text-white sm:text-3xl md:text-4xl font-bold bg-black bg-opacity-70 p-4 rounded-lg" // Fond noir semi-transparent et couleur du texte blanche
          initial={{ x: '40%' }}
          animate={{ x: '-40%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 8,
            ease: 'easeInOut',
          }}
        >
          En recherche d'opportunité
        </motion.p>
      </motion.div>

      {/* Animation du titre */}
      <motion.h1
  className="text-white text-5xl sm:text-6xl md:text-7xl font-special mb-8 sm:mb-4 bg-black p-4 rounded-lg"
  initial={{ opacity: 0, y: '20%' }}  // Opacité 0 au départ pour créer l'effet d'animation
  animate={{ opacity: 1, y: 0 }}  // L'élément devient visible avec un léger mouvement
  transition={{ duration: 0.3 }}  // Durée d'animation plus courte (0.3s)
>
  Aline Coatanoan
</motion.h1>



      {/* Animation de la description */}
      <motion.p
        className="text-white sm:text-8xl md:text-4xl mb-12 sm:mb-6 font-special bg-black bg-opacity-70 p-4 rounded-lg" // Fond noir semi-transparent et texte blanc
        initial={{ opacity: 0, y: '20%' }}
        animate={{ opacity: 1, y: '0%' }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Développeuse web full stack
      </motion.p>
    </section>
  );
};

export default Accueil;
