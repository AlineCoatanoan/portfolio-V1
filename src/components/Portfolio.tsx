import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState(2); // Valeur par défaut pour les écrans plus larges

  const projects = [
    {
      title: "Survival Parc",
      description:
        "Projet réalisé seule (front et back) dans le cadre de l'obtention au titre professionnel DWWM. \n\nSite d'un parc d'attraction fictif. \n\nDéveloppé avec Node.js, express, React, Tailwind, daisyUI, postgres, Jest, JWT, Joi, Bcrypt",
      liveLink: "https://example.com",
      githubLink: "https://github.com/AlineCoatanoan/survival-parc",
      image: "/assets/parc.png",
    },
    {
      title: "Foodprint",
      description:
        "Projet réalisé lors de mon stage de 2 mois.\n\nVersion 2 d'un site web pour de la restauration collective, le but étant de permettre le calcul de l'empreinte carbone des plats préparés.\n\nDéveloppé avec Next.js, React, Tailwind, cosmosDB, GitHub",
      liveLink: "https://www.foodprint.eco/",
      githubLink: "X", // Pas de lien Github
      image: "/assets/foodprint.jpg",
    },
    {
      title: "My Books",
      description:
        "Projet réalisé lors de ma formation en développement web.\n\nSite web de présentation de mes livres.\n\nDéveloppé avec Node.js, React, Tailwind, GitHub",
      liveLink: "https://front-books-azure.vercel.app/",
      githubLink: "https://github.com/AlineCoatanoan/front-books",
      image: "/assets/books.png",
    },
    {
      title: "Mon portfolio",
      description:
        "Projet réalisé pour me présenter :)\n\nSite web de présentation.\n\nDéveloppé avec React, Tailwind, framer-motion",
      liveLink: "https://aline-coatanoan-dev-web.vercel.app/",
      githubLink: "https://github.com/AlineCoatanoan/portfolio-V1",
      image: "/assets/dessin.jpg",
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
    if (project.title === "Foodprint") {
      setShowAlert(true);
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
    if (project.title === "My Books" || project.title === "Survival Parc") {
      setAlertMessage("Ce projet est en cours de déploiement.");
      setTimeout(() => setAlertMessage(null), 3000);
    } else {
      window.open(project.liveLink, "_blank");
    }
  };

  return (
    <section id="portfolio" className="min-h-screen bg-[#227265] text-white p-2">
      <h2 className="text-4xl text-center mb-8 mt-28 font-special">Mon Portfolio</h2>

      {/* Alerte */}
      {(showAlert || alertMessage) && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#103C3D] text-white p-4 rounded shadow-lg z-50">
          <p>
            {showAlert
              ? "Le code de ce projet est confidentiel et ne peut pas être partagé."
              : alertMessage}
          </p>
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
        <div className="overflow-hidden w-full m-4 max-w-[800px] mb-0">
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
                </div>
                <div className="flex justify-between mt-auto">
                  <a
                    href={project.liveLink}
                    onClick={(event) => handleLiveLinkClick(event, project)}
                    className="bg-[#227265] text-white py-2 px-4 rounded-lg hover:bg-[#103C3D] transition-colors"
                  >
                    Voir en Ligne
                  </a>
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
