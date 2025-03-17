import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineSwipe } from "react-icons/md";

const Interet = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animation d'entrée de la section : effet "flip-in"
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        scale: 0.8,
        rotationX: 90,
        transformOrigin: "center top",
      },
      {
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
      }
    );

    // Animation d'entrée des cartes avec effet de zoom et rebond
    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 30, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // Animation persistante sur les titres des cartes
    gsap.to(".card-title", {
      scale: 1.05,
      rotation: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      duration: 2,
    });
  }, []);

  const interests = [
    {
      title: "🏋️‍♂️ Sports",
      content: [
        "Pilates",
        "Musculation",
        "Randonnées (trek)",
      ],
      gap: "12px",
    },
    {
      title: "📚 Lecture",
      content: [
        <>
          <span className="text-[#F6A83E]">Auteurs</span> : Orwell, Huxley, Asimov, Zamiatine
        </>,
        <>
          <span className="text-[#F6A83E]">Silo</span> de Hugh Howey
        </>,
        <>
        <span className="text-[#F6A83E]">Le Maître et Marguerite</span> de Boulgakov,
        </>,
        <>
          <span className="text-[#F6A83E]">Théâtre</span> : Shakespeare, Feydeau, Musset, Rostand
        </>,
      ],
    },
    {
      title: "🎥 Chaînes YouTube",
      content: [
        "Micode",
        "underscore_",
        "ici Amy Plant",
        "Benjamin Code",
        "Feldup",
        "Le grand JD",
        "G Milgram",
        "Hugo Décrypte",
        "Scilabus",
      ],
    },
    {
      title: "🎵 Musique",
      content: [
        <>
          <span className="text-[#F6A83E]">Rock</span> : Queen, Pink Floyd, Muse...,
        </>,
        <>
          <span className="text-[#F6A83E]">Jazz</span> : Louis Armstrong, Nina Simone, Tony Bennett, Norah Jones...
        </>,
        <>
          <span className="text-[#F6A83E]">Compositeurs</span> : Hans Zimmer, Craig Armstrong, Danny Elfman...
        </>,
      ],
    },
    {
      title: "🎲 Jeux",
      content: [
        "Jeux d'énigmes",
        "Escape Games",
        "Puzzle",
        "Jeux de société en tous genres",
      ],
    },
    {
      title: "📺 Séries",
      content: [
        "Severance",
        "Breaking Bad",
        "Friends",
        "The Big Bang Theory",
        "Last of Us",
        "Handmaid's Tale",
        "Stranger Things",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="centres d'intérêts"
      className="relative min-h-screen bg-[#0C3E45] text-white p-2 flex flex-col items-center justify-center pb-8"
    >
      {/* Image en arrière-plan avec transparence */}
      <div
        className="absolute inset-0 bg-center opacity-20"
        style={{
            backgroundImage: `url(/assets/interet.png)`,
            backgroundSize: "100%", // Ajuste cette valeur pour changer la taille
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}
      ></div>

      <h2 className="text-3xl sm:text-6xl text-center mb-12 mt-24 font-special relative z-10">
        Mes centres d'intérêts
      </h2>

      {isMobile ? (
        <div className="relative w-full">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            className="w-full"
          >
            {interests.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  ref={(el) => {
                    if (el) itemsRef.current[index] = el;
                  }}
                  className="p-6 bg-[rgba(30,42,49,0.4)] rounded-lg shadow-lg"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold card-title mb-4">
                    {item.title}
                  </h3>
                  <ul
                    className={`list-none text-sm sm:text-base leading-relaxed text-gray-200 ${
                      item.title === "🎥 Chaînes YouTube" || item.title === "📺 Séries"
                        ? "grid grid-cols-3 gap-4"
                        : "space-y-3"
                    }`}
                  >
                    {item.content.map((contentItem, i) => (
                      <li key={i}>{contentItem}</li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flèche pour swiper */}
          <div className="absolute top-[100%] left-0 right-0 flex justify-center items-center">
            <span className="text-4xl text-white animate-pulse">
              <MdOutlineSwipe />
            </span>
          </div>
        </div>
        
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left relative z-10">
          {interests.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="p-6 bg-[rgba(30,42,49,0.4)] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-2"
            >
              <h3 className="text-xl sm:text-2xl font-semibold card-title mb-4">
                {item.title}
              </h3>
              <ul
                className={`list-none text-sm sm:text-base leading-relaxed text-gray-200 ${
                  item.title === "🎥 Chaînes YouTube" || item.title === "📺 Séries"
                    ? "grid grid-cols-3 gap-4"
                    : "space-y-3"
                }`}
              >
                {item.content.map((contentItem, i) => (
                  <li key={i}>{contentItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Interet;
