import { render, screen } from '@testing-library/react';
import App from './App';

test("Test unitaire de base pour vérifier le H1", ()=> {
  render(<App />);
  const h1Element= screen.getByText(/Se connecter/i);
  expect(h1Element).toBeInTheDocument();
})