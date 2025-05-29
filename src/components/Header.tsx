import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour ouvrir/fermer le menu burger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Désactive le scroll du body quand le menu est ouvert
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <header className="bg-[#0E343B] w-full h-24 fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto h-full px-4 relative">
        {/* Logo à gauche */}
        <div className="text-white text-2xl">
          <a href="#accueil">
          <span className="sr-only">Retour à l'accueil</span>
          <video
        src="/assets/logo.webm"
        className="w-14 h-14 sm:w-24 sm:h-24 lg:w-24 lg:h-24 xl:w-28 xl:h-30"
        autoPlay
        loop
        muted
      />
          </a>
        </div>

        {/* Menu desktop */}
        <nav className="hidden lg:flex lg:space-x-8 w-full items-center justify-center font-special">
          {["Accueil", "Profil", "Skills", "Portfolio", "Centres d'intérêts", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="relative text-white text-2xl px-4 py-2 transition-all duration-300 hover:text-[#1D232A] hover:scale-110 after:block after:h-[2px] after:w-0 after:bg-[#1D232A] after:transition-all after:duration-300 after:ease-in-out after:hover:w-full"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Menu burger (mobile) - Centré */}
        <div className="block lg:hidden absolute left-1/2 transform -translate-x-1/2">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none flex flex-col items-center"
          >
            {/* Icône burger (3 lignes) */}
            <span
              className={`w-8 h-1 bg-white my-1 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-1 bg-white my-1 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-8 h-1 bg-white my-1 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Menu burger mobile */}
      <nav
        className={`lg:hidden flex flex-col justify-center items-center w-full bg-[#227265] fixed top-24 left-0 right-0 z-50 transition-all duration-300 ${
          isMenuOpen ? "h-auto opacity-100 py-8" : "h-0 opacity-0 py-0"
        }`}
        style={{
          transition: "height 0.5s ease-out, opacity 0.5s ease-out",
          overflow: "hidden",
        }}
      >
        {["Accueil", "Profil", "Skills", "Portfolio", "Centres d'intérêts", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="relative text-white text-3xl px-6 py-4 transition-all duration-300 font-special hover:bg-[#1D232A] flex items-center"
              onClick={toggleMenu} // Ferme le menu quand on clique
            >
              {/* Ligne animée */}
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#1D232A] transition-all duration-300 group-hover:w-full"
                style={{ transition: "width 0.3s ease-in-out" }}
              ></span>
              {item}
            </a>
          )
        )}
      </nav>
    </header>
  );
}
