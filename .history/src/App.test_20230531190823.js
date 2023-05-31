import { render, screen } from '@testing-library/react';
import App from './App';

const usersArray= [
  { name: "Noémi", role: "administrateur" },
  { name: "Bao", role: "utilisateur" },
  { name: "Nordin", role: "Super admin" },
  { name: "Dominique", role: "invité" },
]

test("Test unitaire de base pour vérifier le H1", ()=> {
  render(<App />);
  const h1Element= screen.getByText(/Panneau d'administration/i);
  expect(h1Element).toBeInTheDocument();
})

test("Vérification connexion", ()=> {
  render(<App />);
  const h2Element= screen.getByText(/administrateur/i);
  expect(h2Element).toBeInTheDocument();
})