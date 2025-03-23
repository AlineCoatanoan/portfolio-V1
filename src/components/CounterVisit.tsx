import React, { useEffect, useState } from 'react';

const VisitCounter: React.FC = () => {
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    // Récupère le compteur de visites dans localStorage
    const storedCount = localStorage.getItem('visitCount');

    // Si un compteur existe déjà dans localStorage, l'utiliser
    if (storedCount) {
      setVisitCount(Number(storedCount));
    } else {
      // Sinon, c'est la première visite, initialiser à 1
      setVisitCount(1);
    }
  }, []); // Le tableau vide [] signifie que cet effet ne s'exécute qu'une seule fois à l'initialisation

  useEffect(() => {
    // Une fois que le compteur de visites est mis à jour, on l'enregistre dans localStorage
    if (visitCount > 0) {
      localStorage.setItem('visitCount', visitCount.toString());
    }
  }, [visitCount]); // Mettre à jour localStorage à chaque changement du compteur

  return (
    <div style={{ color: '#1D232A' }}>
      <h3>Nombre de visites : {visitCount}</h3>
    </div>
  );
};

export default VisitCounter;
