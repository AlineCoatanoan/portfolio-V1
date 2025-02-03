import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const softSkills = [
    "Empathie",
    "Adaptabilité",
    "Communication efficace",
    "Collaboration en équipe",
    "Persévérance",
    "Curiosité",
    "Organisation",
    "Résolution de problèmes",
    "Sens de l'humour et positivité",
    "Consciencieuse",
  ];

  const hardSkills = {
    "Langages de Programmation": ["JavaScript", "TypeScript"],
    "Frameworks et Bibliothèques": ["React.js", "Node.js", "Express.js", "Next.js"],
    "Développement Front-End": ["Tailwind CSS"],
    "Développement Back-End": ["RESTful API Design"],
    "Bases de Données": ["SQL (MySQL, PostgreSQL)", "NoSQL (Cosmos)"],
    "Outils de Versioning": ["Git", "GitHub", "GitFlow"],
    "DevOps": ["Docker", "Render", "Azure"],
    "Outils de Tests": ["Jest", "ThunderClient", "Supertest"],
    "Outils de Collaboration": ["Slack", "Discord"],
    "Méthodologies Agiles": ["Kanban - GitHub Projects"],
    "Outils de Design": ["Canva"],
    "Services": ["Microsoft Azure"],
    "Editeur de Code": ["VS Code"],
    "Langages de Script": ["Bash", "PowerShell"],
  };

  return (
    <div className="flex justify-center items-center pt-6 sm:pb-60 min-h-screen bg-gradient-to-b from-[#1F5A5B] to-[#113E3F] text-white">
      <section id="skills" className="w-full">
        <motion.div
          className="flex flex-col w-full max-w-7xl h-auto rounded-lg shadow-lg overflow-hidden mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          {/* Titre Compétences */}
          <div className="text-3xl sm:text-6xl text-center text-white pt-28 pb-8 font-special">
            Mes compétences
          </div>

          {/* Disposition responsive : 1 colonne mobile, 2 colonnes desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8">
            {/* Hard Skills */}
            <motion.div
              className="flex flex-col items-center justify-between p-6 bg-[#227265] rounded-lg hover:shadow-2xl transition-all"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="text-5xl mb-8 font-specialElite"
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

              {/* Affichage des Hard Skills avec titres */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(hardSkills).map(([category, skills], index) => (
                  <div key={index} className="flex flex-col space-y-4">
                    <h3 className="text-xl text-[#1D232A]">{category}</h3>
                    <ul className="text-xl text-left list-disc list-inside">
                      {skills.map((skill, skillIndex) => (
                        <motion.li
                          key={skillIndex}
                          whileHover={{ scale: 1.2, x: 10 }}
                          transition={{ type: "spring", stiffness: 200 }}
                          className="text-lg"
                        >
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              className="flex flex-col items-center justify-between p-6 bg-[#1F595A] rounded-lg hover:shadow-2xl transition-all mt-8 sm:mt-0"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="text-5xl font-specialElite"
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
              <ul className="text-xl text-left list-disc list-inside space-y-8 mb-80 pt-12">
                {softSkills.map((skill, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.2, x: -10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {skill}
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
