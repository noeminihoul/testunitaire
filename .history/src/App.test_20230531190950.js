import { render, screen } from '@testing-library/react';
import App from './App';

const usersArray= [
  { name: "Noémi", role: "administrateur" },
  { name: "Bao", role: "utilisateur" },
  { name: "Nordin", role: "Super admin" },
  { name: "Dominique", role: "invité" },
]


test("Vérification administrateur", ()=> {
  render(<App user={usersArray[1]} />);
  const h2Element= screen.getByText(/administrateur/i);
  expect(h2Element).toBeInTheDocument();
})