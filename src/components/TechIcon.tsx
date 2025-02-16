import React from 'react';
import { FaNodeJs } from 'react-icons/fa'; // Icone Node.js
import { FaReact } from 'react-icons/fa'; // Icone React
import { SiTailwindcss } from 'react-icons/si'; // Icone Tailwind CSS
import { SiPostgresql } from 'react-icons/si'; // Icone PostgreSQL
import { FaJsSquare } from 'react-icons/fa'; // Icone Jest
import { BsFillShieldLockFill } from 'react-icons/bs'; 
import { FaHashtag } from 'react-icons/fa'; // Icone Bcrypt
import { SiExpress } from 'react-icons/si'; // Icone Express
import { SiDaisyui } from 'react-icons/si'; // Icone DaisyUI

// Définir les technologies comme un type littéral
export type Technology = "Node.js" | "Express" | "React" | "Tailwind CSS" | "DaisyUI" | "PostgreSQL" | "Jest" | "JWT" | "Bcrypt";

// Définir les icônes pour chaque technologie
export const NodeIcon = () => <FaNodeJs />;
export const ExpressIcon = () => <SiExpress />;
export const ReactIcon = () => <FaReact />;
export const TailwindIcon = () => <SiTailwindcss />;
export const DaisyUIIcon = () => <SiDaisyui />;
export const PostgresIcon = () => <SiPostgresql />;
export const JestIcon = () => <FaJsSquare />;
export const JWTIcon = () => <BsFillShieldLockFill />;
export const BcryptIcon = () => <FaHashtag />;

// Définir un objet avec toutes les icônes
export const techIcons: Record<Technology, JSX.Element> = {
  "Node.js": <NodeIcon />,
  "Express": <ExpressIcon />,
  "React": <ReactIcon />,
  "Tailwind CSS": <TailwindIcon />,
  "DaisyUI": <DaisyUIIcon />,
  "PostgreSQL": <PostgresIcon />,
  "Jest": <JestIcon />,
  "JWT": <JWTIcon />,
  "Bcrypt": <BcryptIcon />,
};
