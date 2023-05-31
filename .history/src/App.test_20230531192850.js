import { render, screen } from '@testing-library/react';
import App from './App';

const usersArray= [
  { name: "Noémi", role: "administrateur",ceinture:"noire" },
  { name: "Bao", role: "utilisateur",ceinture:"noire" },
  { name: "Nordin", role: "Super admin",ceinture:"jaune" },
  { name: "Dominique", role: "invité",ceinture:"blanche" },
  { name: "Florian", role: "invité",ceinture:"rouge" },
]

test("Vérification Bao apparait", ()=> {
  render(<App users={usersArray} />);
  const h2Element= screen.getByText(/Bao/i);
  expect(h2Element).toBeInTheDocument();
})

test("Vérification du nombre d'utilisateur", ()=> {
  render(<App users={usersArray} />);
  expect(screen.getAllByTestId('element_utilisateur').length).toBe(2);
})