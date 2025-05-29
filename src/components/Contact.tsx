import { useEffect, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaPhone, FaInstagram, FaFacebookMessenger, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactIcons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const icons = [
    { icon: <FaEnvelope />, label: 'Envoyer un email', link: '#', color: '#EAA33E', onClick: () => setShowEmailModal(true) },
    { icon: <FaLinkedin />, label: 'Profil LinkedIn', link: 'https://www.linkedin.com/in/aline-coatanoan/', color: '#0A66C2' },
    { icon: <FaPhone />, label: 'Afficher le numéro de téléphone', link: '#', color: '#227265', onClick: () => setShowPhoneModal(true) },
    { icon: <FaInstagram />, label: 'Profil Instagram', link: 'https://www.instagram.com/aline_coding/', color: '#E65166' },
    { icon: <FaFacebookMessenger />, label: 'Me contacter sur Messenger', link: 'https://m.me/AlineCoding', color: '#0076F7' },
    { icon: <FaGithub />, label: 'Profil GitHub', link: 'https://github.com/AlineCoatanoan', color: '#FFFFFF' },
  ];
  

  const radius = 120;
  const iconSize = 50;

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="contact" className="flex flex-col items-center justify-center h-screen text-center p-4 bg-[#1D232A]">
      <h2 className="text-3xl sm:text-6xl font-special text-white mb-14 mt-8">Me contacter</h2>
      
      <div className="relative w-[300px] h-[300px] flex justify-center items-center">
        {icons.map((icon, index) => {
          const angle = (index / icons.length) * (2 * Math.PI);
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={index}
              className="absolute flex justify-center items-center cursor-pointer"
              style={{
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                backgroundColor: icon.color,
                borderRadius: '50%',
                left: `calc(50% + ${x}px - ${iconSize / 2}px)`,
                top: `calc(50% + ${y}px - ${iconSize / 2}px)`
              }}
              aria-label={icon.label} 
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.5, ease: 'easeInOut' } }}
              whileTap={{ scale: 0.9 }}
              onClick={icon.onClick ? icon.onClick : () => window.open(icon.link, '_blank')}
            >
              <div className="text-black text-2xl">{icon.icon}</div>
            </motion.div>
          );
        })}
        <motion.img
          src="/assets/dessin.jpg"
          alt="Dessin décoratif"
          className="absolute -right-[460px] top-2/5 -translate-y-1/2 w-[300px] md:w-[350px] lg:w-[400px] opacity-90 pointer-events-none drop-shadow-[0_0_12px_rgba(0,0,0,0.9)]"


          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
        />
      </div>


      <p className="text-lg text-white relative" style={{ paddingTop: '140px' }}>
      Vous pouvez me contacter via plusieurs plateformes en cliquant sur les icônes ci-dessus.
      </p>


      {/* Modale Email */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-[#227265] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#1D232A] p-6 rounded-lg text-center">
            <h3 className="text-xl text-white">Mon email</h3> {/* Texte en blanc */}
            <p className="text-lg mt-2 text-white">coatanoan.aline@outlook.com</p> {/* Texte en blanc */}
            <button 
              className="mt-4 px-4 py-2 bg-[#227265] text-white rounded" 
              onClick={() => setShowEmailModal(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Modale Téléphone */}
      {showPhoneModal && (
        <div className="fixed inset-0 bg-[#227265] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#1D232A] p-6 rounded-lg text-center">
            <h3 className="text-xl text-white">Mon numéro de téléphone</h3> {/* Texte en blanc */}
            <p className="text-lg mt-2 text-white">06 11 18 85 66</p> {/* Texte en blanc */}
            <button 
              className="mt-4 px-4 py-2 bg-[#227265] text-white rounded" 
              onClick={() => setShowPhoneModal(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactIcons;
