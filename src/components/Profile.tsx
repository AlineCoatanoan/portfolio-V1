import { motion } from "framer-motion";
import { useState } from "react";

const Profile = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Section Profil */}
      <section
        id="profile"
        className="min-h-screen flex flex-col sm:pt-20 lg:flex-row items-center justify-center bg-[#0C3E45] px-4 sm:px-6 md:px-8"
      >
        <div className="flex-1 flex flex-col items-center justify-center text-center pt-6">
          <motion.h2
            className="text-3xl sm:text-6xl mb-4 text-gray-100 font-special"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Mon Profil
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl font-light mb-2 mt-4 text-gray-200 max-w-[95%] mx-auto text-justify sm:text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            style={{ lineHeight: '1.8' }}
          >
            Bonjour, je suis développeuse Web formée chez 
            <a
              href="https://oclock.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FDA232] hover:text-[#FDA232] transition-colors text-lg"
              style={{
                fontFamily: 'Special Elite',
                color: '#FDA232',
                textDecoration: 'underline',
                margin: '0 5px',
              }}
            >
              O'Clock
            </a>
            et diplômée du 
            <span
              className="text-lg"
              style={{
                fontFamily: 'Special Elite', 
                color: '#FDA232', 
                margin: '0 5px',
              }}
            >
              Titre Professionnel depuis janvier 2025
            </span>.
            <br />
            <br />
            Prête à relever de 
            <span
              className="text-lg"
              style={{
                fontFamily: 'Special Elite', 
                color: '#FDA232', 
                margin: '0 5px',
              }}
            >
              nouveaux défis
            </span> et ouverte à différents secteurs, je souhaite aujourd'hui continuer mon apprentissage afin de 
            <span
              className="text-lg"
              style={{
                fontFamily: 'Special Elite', 
                color: '#FDA232', 
                margin: '0 5px',
              }}
            >
              renforcer mes compétences techniques
            </span>.
            <br />
            <br />
            Je suis actuellement à la recherche d’une entreprise pour une 
            <span
              className="text-lg"
              style={{
                fontFamily: 'Special Elite', 
                color: '#FDA232', 
                margin: '0 5px',
              }}
            >
              alternance en Concepteur Développeur d'Applications (CDA)
            </span> à partir d’
            
            <span
              className="text-lg"
              style={{
                fontFamily: 'Special Elite', 
                color: '#FDA232', 
                margin: '0 5px',
              }}
            >
              octobre 2025
            </span> avec un rythme de

            <span
              className="text-lg"
              style={{
                fontFamily: 'Special Elite', 
                color: '#FDA232', 
                margin: '0 5px',
              }}
            >
              1 semaine école / 2 semaines en entreprise
            </span>.
            <br />
            <br />
            À très bientôt !
          </motion.p>
        </div>

        {/* Image CV avec effet de zoom */}
        <div
          className="flex-1 overflow-auto flex items-center justify-center flex-col relative cursor-zoom-in mt-6 lg:mt-0"
          onClick={toggleZoom}
        >
          <motion.img
            src="/assets/cv.jpg"
            alt="Mon CV"
            className="max-w-[60%] sm:max-w-[50%] md:max-w-[40%] h-auto mb-4 pt-22 transition-transform duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          />

          <a
            href="/assets/cv.pdf"
            download
            className="mt-2 pb-8 text-[#ffad3f] underline hover:text-[#FDA232] transition-colors"
          >
            Télécharger le CV
          </a>
        </div>
      </section>

      {/* Modal pour l'image agrandie */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={toggleZoom}
        >
          <motion.img
            src="/assets/cv.jpg"
            alt="Mon CV Agrandi"
            className="max-w-full max-h-full object-contain"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Profile;
