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

      {/* Animation de la description */}
    <motion.p
      className="text-white text-lg sm:text-xl md:text-2xl font-special bg-black bg-opacity-10 mb-10 max-sm:mb-4 px-3 py-2 sm:p-4 rounded-lg"
      initial={{ opacity: 0, y: '20%' }}
      animate={{ opacity: 1, y: '0%' }}
      transition={{ duration: 1, delay: 1.2 }}
    >
      Développeuse web full stack
    </motion.p>

     
      
      <motion.div
        className="relative w-full overflow-hidden mb-8 sm:mb-4 "
        initial={{ opacity: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="text-white font-special max-w-fit mx-auto text-xl sm:text-1xl md:text-2xl bg-black bg-opacity-10 px-3 py-2 sm:p-4 rounded-lg">
          En recherche d'opportunité <br />
        </p>
      </motion.div>

      

      {/* Animation Lottie en bas */}
      <div
      className="hidden sm:block absolute bottom-0 right-0 w-[400px] h-[400px]"
      >
        <Lottie animationData={leafAnimation} loop={true} />
      </div>

      <img
        src="/assets/accueil.png"
        alt="Accueil"
        className="block sm:hidden w-full max-w-xs rounded-lg"
      />



    </section>
  );
};

export default Accueil;
