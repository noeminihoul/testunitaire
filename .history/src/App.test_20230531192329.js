import { render, screen } from '@testing-library/react';
import App from './App';

const usersArray= [
  { name: "Noémi", role: "administrateur" },
  { name: "Bao", role: "utilisateur" },
  { name: "Nordin", role: "Super admin" },
  { name: "Dominique", role: "invité" },
]

test("Vérification Bao apparait", ()=> {
  render(<App users={usersArray} />);
  const h2Element= screen.getByText(/Bao/i);
  expect(h2Element).toBeInTheDocument();
})

test("Vérification du nombre d'utilisateur", ()=> {
  render(<App users={usersArray} />);
  const h2Element= screen.getByText(/Bao/i);
  expect(h2Element).toBeInTheDocument();
})