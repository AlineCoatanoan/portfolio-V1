import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { techIcons, Technology } from "./TechIcon";


const Portfolio = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState(2); // Valeur par défaut pour les écrans plus larges
  const [isModalOpen, setIsModalOpen] = useState(false); // Ajouter l'état de la modale

  const projects = [
    {
      title: "Survival Parc",
      description:
        "Projet réalisé seule (front et back) dans le cadre de l'obtention au titre professionnel DWWM. \n\nSite d'un parc d'attraction fictif. Système d'inscription, connexion, page profil, réservation, dashboard. \n\nDéveloppé avec",
      liveLink: "https://example.com",
      pdf: "/assets/projet.pdf",
      githubLink: "https://github.com/AlineCoatanoan/survival-parc",
      image: "/assets/parc.png",
      technologies: [
        "Node.js",
        "Express",
        "React",
        "Tailwind CSS",
        "DaisyUI",
        "PostgreSQL",
        "Jest",
        "JWT",
        "Joi",
        "Bcrypt",
      ],
    },
    {
      title: "Foodprint",
      description:
        "Projet réalisé lors de mon stage de 2 mois.\n\nVersion 2 d'un site web pour de la restauration collective, le but étant de permettre le calcul de l'empreinte carbone des plats préparés.\n\nDéveloppé avec",
      liveLink: "https://www.foodprint.eco/",
      githubLink: "X", // Pas de lien Github
      image: "/assets/foodprint.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "CosmosDB", "GitHub"],
    },
    {
      title: "My Books",
      description:
        "Projet réalisé lors de ma formation en développement web.\n\nSite web de présentation de mes livres.\n\nDéveloppé avec",
      liveLink: "https://front-books-azure.vercel.app/",
      githubLink: "https://github.com/AlineCoatanoan/front-books",
      image: "/assets/books.png",
      technologies: ["Node.js", "React", "Tailwind CSS", "GitHub"],
    },
    {
      title: "Mon portfolio",
      description:
        "Projet réalisé pour me présenter\n\nSite web de présentation.\n\nDéveloppé avec",
      liveLink: "https://aline-coatanoan-dev-web.vercel.app/",
      githubLink: "https://github.com/AlineCoatanoan/portfolio-V1",
      image: "/assets/dessin.jpg",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Dystorzium",
      description:
        "Jeu d'énigmes immersif\n\nProjet personnel pour le plaisir.\n\nDéveloppé avec",
      liveLink: "X",
      githubLink: "X",
      image: "/assets/dystorzium.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "GSAP", "Node.js", "Express", "PostgreSQL", "JWT", "Joi", "Bcrypt"],
    },
    {
      title: "sound hardware filter (nom provisoire)",
      description:
        "Application mobile\n\nSystème de filtrage avancé pour récupérer les données de la BDD dans le but faciliter le travail des régisseurs son.\n\nDéveloppé avec",
      liveLink: "X",
      githubLink: "X",
      image: "/assets/son.png",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = projects.length;

  useEffect(() => {
    // Détecte la taille de l'écran et ajuste la valeur de visibleCards
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // 1 projet visible sur les écrans mobiles
      } else {
        setVisibleCards(2); // 2 projets visibles sur les écrans plus larges
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const nextSlide = () => {
    if (currentIndex < totalCards - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const formatDescription = (description: string) => {
    return description.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const handleGithubClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    project: { title: string; githubLink: string }
  ) => {
    event.preventDefault();

    if (showAlert) {
      setShowAlert(false);
    }
    
    if (project.title === "Foodprint") {
      setShowAlert(true);
      setAlertMessage("Le code de ce projet est confidentiel et ne peut pas être partagé.");
      setTimeout(() => setShowAlert(false), 3000);
    } else if (project.title === "Dystorzium" || project.title === "Son Filtre") {
      setShowAlert(true);
      setAlertMessage("Ce projet est en cours d'élaboration et n'est pas encore disponible.");
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      window.open(project.githubLink, "_blank");
    }
  };

  const handleLiveLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    project: { title: string; liveLink: string }
  ) => {
    event.preventDefault();

    if (showAlert) {
      setShowAlert(false);
    }
    
    if (project.title === "Survival Parc") {
      setIsModalOpen(true); // Ouvre la modale pour "Survival Parc"
    } else if (project.title === "Dystorzium" || project.title === "Son Filtre") {
      setShowAlert(true);
      setAlertMessage("Ce projet est en cours d'élaboration et n'est pas encore disponible.");
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      window.open(project.liveLink, "_blank");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Ferme la modale
  };

  return (
    <section id="portfolio" className="min-h-screen bg-[#227265] text-white p-2">
      <h2 className="text-3xl sm:text-6xl text-center mb-8 mt-24 font-special">Mon Portfolio</h2>

      {/* Alerte */}
      {showAlert && (
        <motion.div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#103C3D] text-white p-4 rounded shadow-lg z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>{alertMessage}</p>
        </motion.div>
      )}

      {/* Modale pour Survival Parc */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#227265] p-8 rounded-lg max-w-3xl w-full">
            <h3 className="text-2xl font-special text-white mb-4">Survival Parc</h3>
            {/* Ajout de la vidéo */}
            <video controls className="w-full mb-4">
              <source src="/assets/survivalparc.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            <p className="text-white">Voici un aperçu du projet</p>
            <button
              className="mt-4 bg-[#1E2A31] text-white px-4 py-2 rounded-lg"
              onClick={closeModal}
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Flèches pour la version mobile sous le titre */}
      <div className="flex justify-between mb-8 sm:hidden">
        <button
          onClick={prevSlide}
          className={`bg-[#103C3D] text-white p-4 rounded-full hover:bg-[#227265] transition-colors text-3xl ${currentIndex === 0 && "opacity-50 cursor-not-allowed"}`}
          disabled={currentIndex === 0}
        >
          &larr;
        </button>
        <button
          onClick={nextSlide}
          className={`bg-[#103C3D] text-white p-4 rounded-full hover:bg-[#227265] transition-colors text-3xl ${currentIndex === totalCards - visibleCards && "opacity-50 cursor-not-allowed"}`}
          disabled={currentIndex === totalCards - visibleCards}
        >
          &rarr;
        </button>
      </div>

      <div className="relative flex items-center justify-center overflow-hidden">
        {/* Flèche gauche */}
        <button
          onClick={prevSlide}
          className={`absolute left-16 bg-[#103C3D] text-white p-4 rounded-full hover:bg-[#227265] transition-colors text-3xl ${currentIndex === 0 && "opacity-50 cursor-not-allowed"} hidden sm:block`}
          disabled={currentIndex === 0}
        >
          &larr;
        </button>

        {/* Carrousel */}
        <div className="overflow-hidden w-full m-4 max-w-[800px] mb-6">
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{
              x: -(currentIndex * (100 / visibleCards)) + "%",
            }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {projects.map((project, index) => (
              <div
              className="card bg-[#1E2A31] p-4 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-[calc(50%-1rem)] sm:mx-2 flex flex-col justify-between"
              key={index}
            >
                <div>
                  <div className="w-full h-48 flex items-center justify-center bg-[#1E2A31] rounded-t-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#66C7B7] uppercase mb-2 font-[Bright]">{project.title}</h3>
                  <p className={`mb-4 ${project.title === "My Books" ? "mb-8" : ""}`}>
                    {formatDescription(project.description)}
                  </p>

                  {/* Liste des technologies */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-2 text-sm text-[#66C7B7] font-medium"
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      >
                        {/* Vérification si la technologie existe dans techIcons */}
                        {tech in techIcons ? (
                          techIcons[tech as Technology] // Afficher l'icône si la technologie existe
                        ) : null} {/* Ne rien afficher si l'icône n'est pas disponible */}
                        <span>{tech}</span> {/* Toujours afficher le nom de la technologie */}
                      </motion.div>
                    ))}
                  </div>

                </div>
                <div className="flex justify-between mt-auto">
                  <a
                    href={project.liveLink}
                    onClick={(event) => handleLiveLinkClick(event, project)}
                    className="bg-[#227265] text-white py-2 px-4 rounded-lg hover:bg-[#103C3D] transition-colors"
                  >
                    Voir en Ligne
                  </a>
                  {/* Nouveau bouton "Voir mon projet" pour ouvrir le PDF */}
                  {project.title === "Survival Parc" && (
                    <a
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#103C3D] text-white py-2 px-4 rounded-lg hover:bg-[#227265]"
                    >
                      Dossier
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    onClick={(event) => handleGithubClick(event, project)}
                    className="bg-[#103C3D] text-white py-2 px-4 rounded-lg hover:bg-[#227265] transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Flèche droite */}
        <button
          onClick={nextSlide}
          className={`absolute right-16 bg-[#103C3D] text-white p-4 rounded-full hover:bg-[#227265] transition-colors text-3xl ${currentIndex === totalCards - visibleCards && "opacity-50 cursor-not-allowed"} hidden sm:block`}
          disabled={currentIndex === totalCards - visibleCards}
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
