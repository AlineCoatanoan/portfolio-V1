import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import leafAnimation from '../animations/leaf.json'; 
import ModelViewer3D from './ModelViewer3D';


const Accueil = () => {
  return (
   <section
      id="accueil"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-[#1D232A] bg-center bg-no-repeat gap-2 mt-8"
      style={{
      backgroundImage: "url('/assets/fond.png')",
      backgroundSize: '1400px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom center',
    }}

    >


      {/* Animation du titre */}
      <motion.h1
        className="text-white text-4xl sm:text-6xl md:text-7xl font-special bg-opacity-10 mb-12 max-sm:mb-4 bg-black px-3 py-2 sm:p-4 rounded-lg"
        initial={{ opacity: 0, y: '20%' }}  // Opacité 0 au départ pour créer l'effet d'animation
        animate={{ opacity: 1, y: 0 }}  // L'élément devient visible avec un léger mouvement
        transition={{ duration: 0.3 }}  // Durée d'animation
      >
        Aline Coatanoan
      </motion.h1>  
      
      <motion.div
        className="relative w-full overflow-hidden mb-8 sm:mb-4 "
        initial={{ opacity: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="text-white font-special max-w-fit mx-auto text-xl sm:text-1xl md:text-2xl bg-black bg-opacity-10 px-3 py-2 sm:p-4 rounded-lg">
           En alternance <br /> <br />Conception et Développement d’Applications (option éco-conception) <br /><br />
           QA & Tests fonctionnels/automatisés
        </p>
      </motion.div>

      {/* Mascotte version mobile*/}
      <div className="block md:hidden">
        <img
          src="/assets/mascotte.png"
          alt="Mascotte Aline"
          className="mx-auto w-[16rem]"
        />
      </div>

      {/* Mascotte version desktop*/}
      <div className="hidden md:block absolute bottom-0 left-0 z-10">
        <img
          src="/assets/mascotte.png"
          alt="Mascotte Aline"
          className="w-[10rem] md:w-[14rem] lg:w-[20rem] object-contain"
        />
      </div>


    </section>
  );
};

export default Accueil;
