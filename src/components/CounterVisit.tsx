import React, { useEffect, useState } from 'react';

const VisitCounter: React.FC = () => {
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    // Récupère le compteur de visites dans localStorage
    const storedCount = localStorage.getItem('visitCount');

    if (storedCount) {
      // Si un compteur existe déjà dans localStorage, l'utiliser
      setVisitCount(Number(storedCount));
    } else {
      // Si aucun compteur n'existe, initialiser à 1 et l'enregistrer
      localStorage.setItem('visitCount', '1');
      setVisitCount(1);
    }
  }, []); // Ce useEffect s'exécute uniquement lors du premier chargement

  useEffect(() => {
    // Incrémente la valeur du compteur au lancement de la page
    const storedCount = localStorage.getItem('visitCount');
    if (storedCount) {
      const updatedCount = Number(storedCount) + 1;
      localStorage.setItem('visitCount', updatedCount.toString());
      setVisitCount(updatedCount);  // Met à jour l'état local du compteur
    }
  }, []); // Ce useEffect s'exécute une seule fois au premier rendu

  return (
    <div style={{ color: '#1D232A' }}>
      <h3>Nombre de visites : {visitCount}</h3>
    </div>
  );
};

export default VisitCounter;
