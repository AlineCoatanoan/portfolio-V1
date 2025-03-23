import React, { useEffect, useState } from 'react';

const VisitCounter: React.FC = () => {  // Le nom du composant commence par une majuscule
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    // Récupère le compteur de visites dans localStorage
    const storedCount = localStorage.getItem('visitCount');

    // Si un compteur existe déjà dans localStorage, l'utiliser
    if (storedCount) {
      setVisitCount(Number(storedCount));
    } else {
      // Sinon, c'est la première visite
      setVisitCount(1);
    }

    // Met à jour localStorage avec le nouveau compteur
    localStorage.setItem('visitCount', (visitCount + 1).toString());
  }, [visitCount]);

  return (
    <div style={{ color: '#1D232A' }}>
      <h3>Nombre de visites : {visitCount}</h3>
    </div>
  );
};

export default VisitCounter; // Assure-toi que l'export est aussi avec une majuscule
