import React, { useEffect, useState } from 'react';

const VisitCounter: React.FC = () => {
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    // Récupère le compteur de visites dans localStorage
    const storedCount = localStorage.getItem('visitCount');

    // Si un compteur existe déjà dans localStorage, l'utiliser
    if (storedCount) {
      setVisitCount(Number(storedCount)); // Utilise le compteur déjà existant
    } else {
      // Si aucun compteur n'existe, initialiser à 1 et l'enregistrer
      setVisitCount(1);
      localStorage.setItem('visitCount', '1');
    }
  }, []); // Ce useEffect s'exécute uniquement lors du premier chargement

  // Mettre à jour le compteur à chaque visite
  useEffect(() => {
    // Incrémente le compteur à chaque visite (si plus de 1)
    if (visitCount > 0) {
      const newCount = visitCount + 1;
      localStorage.setItem('visitCount', newCount.toString()); // Enregistre dans localStorage
      setVisitCount(newCount); // Met à jour l'état local
    }
  }, [visitCount]); // Ce useEffect s'exécute chaque fois que le compteur change

  return (
    <div style={{ color: '#1D232A' }}>
      <h3>Nombre de visites : {visitCount}</h3>
    </div>
  );
};

export default VisitCounter;
