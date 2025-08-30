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
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#0C3E45] px-4 sm:px-6 md:px-8 pt-16 gap-8"
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
          className="text-base sm:text-lg md:text-lg font-light mb-2 mt-4 text-gray-200 max-w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          style={{ lineHeight: "1.8" }}
        >
          J'ai quitté la <span style={{ color: "#FDA232", fontFamily: "Special Elite" }}>Bretagne</span> à 22 ans pour rejoindre une école de théâtre et de cinéma à Paris.
          3 ans plus tard, je me suis tournée vers l'<span style={{ color: "#FDA232", fontFamily: "Special Elite" }}>éducation spécialisée</span>, où j'ai passé dix ans à accompagner, écouter, transmettre.
          Une belle aventure humaine, riche d'enseignements, mais il était temps d'admettre que ce n'était pas mon terrain de jeu.<br/><br/>

          Ce qui m'anime vraiment ? <span style={{ color: "#FDA232", fontFamily: "Special Elite" }}>Créer</span>, bidouiller, comprendre ce qui se cache derrière l'écran.
          Le genre de métier que tu observes de loin en te disant :
          <em>« Ça a l'air cool… mais pas pour moi, non ? »</em> jusqu'au jour où tu décides que si, en fait, c'est pour toi.<br/><br/>

            <div className="text-left">
            ➤ Fin <span style={{ color: "#FDA232", fontFamily: "Special Elite" }}>2022</span>, je démarre ma réflexion et mes premiers essais en HTML et CSS.<br/>
            ➤ <span style={{ color: "#FDA232", fontFamily: "Special Elite" }}>2023</span>, montage du dossier de financement avec Transition Pro.<br/>
            ➤ <span style={{ color: "#FDA232", fontFamily: "Special Elite" }}>2024</span>, formation DWWM chez O'Clock.<br/>
            ➤ <span style={{ color: "#FDA232", fontFamily: "Special Elite" }}>2025</span>, <strong style={{ color: "#FDA232", fontFamily: "Special Elite" }}>GO !</strong> Alternance CDA chez Simplon et poste de testeuse QA fonctionnel/automatisé.<br/><br/>
          </div>
          Et maintenant ? Direction <span style={{ color: "#FDA232", fontFamily: "Special Elite" }}>avril 2027</span> avec une mission :
          <span style={{ color: "#FDA232", fontFamily: "Special Elite" }}> continuer d'apprendre</span>, coder avec curiosité et plaisir.
        </motion.p>


      </div>

      {/* Image CV à droite, agrandie */}
      {/* <div
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
      </div> */}
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
      {/* {isModalOpenCV && (
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
      )} */}
    </div>
  );
};

export default Profile;
