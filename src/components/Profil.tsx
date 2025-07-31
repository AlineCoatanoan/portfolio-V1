import { motion } from "framer-motion";
import { useState } from "react";

const Profile = () => {
  const [isModalOpenCV, setIsModalOpenCV] = useState(false);
  const [isModalOpenMascotte, setIsModalOpenMascotte] = useState(false);

  return (
    <div>
      {/* Section Profil */}
    <section
      id="profil"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#0C3E45] px-4 sm:px-6 md:px-8 pt-10 gap-8"
    >
      {/* Mascotte à gauche, plus petite */}
    <motion.div
      className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-1/4 cursor-pointer
                mt-16 lg:mt-0"  
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      onClick={() => setIsModalOpenMascotte(true)}
    >
      <motion.img
        src="/assets/mascotte-profil.png"
        alt="Mascotte Profil"
        className="w-20 sm:w-32 md:w-44 lg:w-full h-auto" 
        whileHover={{ scale: 1.05 }}
      />
    </motion.div>


      {/* Texte au centre, texte et titre centrés */}
      <div className="flex-1 max-w-3xl flex flex-col items-center text-center">
        <motion.h2
          className="text-3xl sm:text-6xl mb-4 text-gray-100 font-special"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Mon Profil
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl font-light mb-2 mt-4 text-gray-200 max-w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          style={{ lineHeight: "1.8" }}
        >
          {/* Ton texte inchangé ici */}
          Bonjour, je suis développeuse Web formée chez{" "}
          <a
            href="https://oclock.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FDA232] hover:text-[#FDA232] transition-colors text-lg"
            style={{
              fontFamily: "Special Elite",
              color: "#FDA232",
              textDecoration: "underline",
              margin: "0 5px",
            }}
          >
            O'Clock
          </a>
          et diplômée du{" "}
          <span
            className="text-lg"
            style={{
              fontFamily: "Special Elite",
              color: "#FDA232",
              margin: "0 5px",
            }}
          >
            Titre Professionnel depuis janvier 2025
          </span>
          .
          <br />
          <br />
          Prête à relever de{" "}
          <span
            className="text-lg"
            style={{
              fontFamily: "Special Elite",
              color: "#FDA232",
              margin: "0 5px",
            }}
          >
            nouveaux défis
          </span>{" "}
          et ouverte à différents secteurs, je souhaite aujourd'hui continuer mon
          apprentissage afin de{" "}
          <span
            className="text-lg"
            style={{
              fontFamily: "Special Elite",
              color: "#FDA232",
              margin: "0 5px",
            }}
          >
            renforcer mes compétences techniques
          </span>
          .
          <br />
          <br />
          Je suis actuellement à la recherche d’une entreprise pour un{" "}
          <span
            className="text-lg"
            style={{
              fontFamily: "Special Elite",
              color: "#FDA232",
              margin: "0 5px",
            }}
          >
            contrat d'apprentissage Concepteur Développeur d'Applications - option Éco-conception des services numériques
          </span>{" "}
          <span
            className="text-lg"
            style={{
              fontFamily: "Special Elite",
              color: "#FDA232",
              margin: "0 5px",
            }}
          >
            La rentrée est le 13 Octobre 2025
          </span>{" "}
          avec un rythme de
          <span
            className="text-lg"
            style={{
              fontFamily: "Special Elite",
              color: "#FDA232",
              margin: "0 5px",
            }}
          >
            {" "}
            1 semaine école / 3 semaines en entreprise
          </span>
          .
          <br />
          <br />
          À très bientôt !
        </motion.p>
      </div>

      {/* Image CV à droite, agrandie */}
      <div
        className="flex-shrink-0 flex flex-col items-center justify-center w-full lg:w-1/4 cursor-zoom-in mt-6 lg:mt-0"
        onClick={() => setIsModalOpenCV(true)}
      >
        <motion.img
          src="/assets/cv.png"
          alt="Mon CV"
          className="max-w-[80%] sm:max-w-[70%] md:max-w-[60%] h-auto mb-4 pt-22 transition-transform duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        />

        <a
          href="/assets/cv.pdf"
          download
          className="mt-2 pb-8 text-[#ffad3f] underline hover:text-[#FDA232] transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Télécharger le CV
        </a>
      </div>
    </section>

      {/* Modal mascotte */}
      {isModalOpenMascotte && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsModalOpenMascotte(false)}
          style={{ cursor: "pointer" }}
        >
          <motion.img
            src="/assets/mascotte-profil.png"
            alt="Mascotte Profil Agrandie"
            className="max-w-full max-h-full object-contain"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}

      {/* Modal CV */}
      {isModalOpenCV && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsModalOpenCV(false)}
          style={{ cursor: "pointer" }}
        >
          <motion.img
            src="/assets/cv.png"
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
