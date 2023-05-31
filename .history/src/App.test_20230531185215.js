import { render, screen } from '@testing-library/react';
import App from './App';

test('Mon app.js s\'est bien lancé', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
