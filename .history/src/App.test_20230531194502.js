import { render, screen } from '@testing-library/react';
import App from './App';

const usersArray= [
  { name: "Noémi", role: "administrateur",ceinture:"noire",level:5 },
  { name: "Bao", role: "utilisateur",ceinture:"noire" },
  { name: "Nordin", role: "Super admin",ceinture:"jaune" },
  { name: "Dominique", role: "invité",ceinture:"blanche" },
  { name: "Florian", role: "invité",ceinture:"rouge" },
]

