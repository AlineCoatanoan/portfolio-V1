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
      // Si aucun compteur n'existe, initialiser à 1 et l'enregistrer
      setVisitCount(1);
      localStorage.setItem('visitCount', '1');
    }
  }, []); // Ce useEffect ne s'exécute qu'une seule fois au premier rendu

  useEffect(() => {
    // Met à jour localStorage avec le compteur actuel chaque fois qu'il change
    if (visitCount > 0) {
      localStorage.setItem('visitCount', visitCount.toString());
    }
  }, [visitCount]); // Ce useEffect se déclenche chaque fois que visitCount change.

  useEffect(() => {
    // Incrémente le compteur de visites uniquement lorsque le composant est monté
    const currentCount = visitCount + 1;
    setVisitCount(currentCount);

    // Met à jour localStorage avec le nouveau compteur
    localStorage.setItem('visitCount', currentCount.toString());
  }, []); // Ce useEffect se déclenche une seule fois au montage du composant

  return (
    <div style={{ color: '#1D232A' }}>
      <h3>Nombre de visites : {visitCount}</h3>
    </div>
  );
};

export default VisitCounter;
