import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const softSkills = [    
    "<span class='text-[#FDA232]'>l'empathie</span> 🤝 pour comprendre les besoins individuels,",
    
    "<span class='text-[#FDA232]'>l'adaptabilité</span> 🔄 face aux situations urgentes,",
    
    "<span class='text-[#FDA232]'>communication efficace</span> 💬 et <span class='text-[#FDA232]'>remise en question</span> pour interagir avec les personnes accompagnées mais aussi avec mes collègues, et ainsi permettre un travail en <span class='text-[#FDA232]'>collaboration avec l’équipe</span> 👥 cela m'a permis de renforcer ma capacité à travailler ensemble pour atteindre des objectifs communs.",
    
    "Faire preuve de <span class='text-[#FDA232]'>patience, et de persévérance</span> 💪 étaient des compétences primordiales dans le secteur social. Les personnes ont des problématiques importantes qui demandent du temps et une réflexion pour trouver des solutions.",
    
    "Avoir une <span class='text-[#FDA232]'>organisation 📅 rigoureuse et être consciencieuse</span> 🧐 m'ont aidée à gérer efficacement mon temps et mes priorités. Dans l’éducation spécialisée, il faut jongler entre urgence, rédaction de rapport, accompagnement au quotidien, rendez-vous, réunion...",
    
    "Et un <span class='text-[#FDA232]'>sens de l'humour</span> et une <span class='text-[#FDA232]'>positivité</span> 😄 m'ont permis de maintenir une ambiance agréable même dans les moments les plus difficiles."
  ];

  const hardSkills = {
    "Langages de Programmation": ["JavaScript 🟨", "TypeScript 🔷"],
    "Frameworks et Bibliothèques": [
      "React.js ⚛️",
      "Node.js 🌱",
      "Express.js 🚀",
      "Next.js 🔜",
      "Framer Motion 🎬",
      "GSAP 🌀"
    ],
    "Développement Front-End": [
      "Tailwind CSS 🎨",
      "SEO 🔍",
      "Responsive Design 📲",
      "Accessibilité ♿"
    ],
    "Développement Back-End": [
      "RESTful API Design 🌐",
      "Authentification (JWT) 🔑",
      "Joi ✅",
      "Bcrypt 🔒",
      "ORM Sequelize 🔧"
    ],
    "Bases de Données": [
      "MySQL, PostgreSQL 🗃️",
      "NoSQL (Cosmos) 🌌",
      "Modélisation MCD / MLD / MPD 🗺️"
    ],
    "Outils de Versioning": ["Git 🧰", "GitHub 🐙"],
    "DevOps": ["Docker 🐳", "Vercel 🌍", "Azure ☁️"],
    "Outils de Tests": ["Jest 🧪", "ThunderClient ⚡", "Supertest 🧑‍💻"],
    "Méthodologies Agiles": ["Kanban - GitHub Projects 📋", "User Stories 📝"],
    "Outils de Design": ["Canva 🖌️", "Wireframe 🖥️", "Maquettes 🏗️"],
    "Services": ["Microsoft Azure 🖥️"],
    "Conception API": ["Routes API 🔀", "Dictionnaire des données 📚"]
  };

  return (
    <div className="flex justify-center items-center pt-6 sm:pb-60 min-h-screen bg-gradient-to-b from-[#1F5A5B] to-[#0A3B42] text-white">
      <section id="skills" className="w-full">
        <motion.div
          className="flex flex-col w-full max-w-7xl h-auto rounded-lg shadow-lg overflow-hidden mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="text-3xl sm:text-6xl text-center text-white pt-28 pb-8 font-special">
            Mes compétences
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8">
            <motion.div
              className="flex flex-col items-center justify-between p-6 bg-[#0C3E45] rounded-lg hover:shadow-2xl transition-all sm:col-span-2 lg:col-span-1"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="text-5xl pb-12 font-special text-center"
                animate={{
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                Hard Skills
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(hardSkills).map(([category, skills], index) => (
                  <div key={index} className="flex flex-col space-y-2">
                    <h3 className="text-xl text-[#FDA232] leading-tight">{category}</h3>
                    <ul className="text-xl text-left list-disc list-inside">
                      {skills.map((skill, skillIndex) => (
                        <motion.li key={skillIndex} whileHover={{ scale: 1.2, x: 10 }}>
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center justify-between p-6 bg-[#1F595A] rounded-lg hover:shadow-2xl transition-all sm:col-span-2 lg:col-span-1 mt-0"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
            <motion.div
                className="text-5xl font-special mb-4 text-center"  
                animate={{
                  rotate: [0, -2, 2, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                Soft Skills
              </motion.div>

              <motion.div
  className="flex flex-col items-start justify-start text-xl text-left mb-0 mt-0 flex-grow-0"
  >
    <p className="mb-0 mt-0 text-xl">
      En tant qu'éducatrice spécialisée, j'ai développé des compétences qui sauront se montrer utiles dans le développement web.
    </p>
                            </motion.div>
                            <ul className="text-xl text-left list-disc list-inside space-y-2 mt-0 mb-0">
    {softSkills.map((skill, index) => (
      <motion.li key={index} whileHover={{ scale: 1.2, x: -10 }}>
        <span dangerouslySetInnerHTML={{ __html: skill }} />
      </motion.li>
    ))}
  </ul>
            </motion.div>
            
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;