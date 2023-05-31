import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

const usersArray= [
  { name: "Noémi", role: "administrateur",ceinture:"noire",level:5 },
  { name: "Bao", role: "utilisateur",ceinture:"noire" },
  { name: "Nordin", role: "Super admin",ceinture:"jaune" },
  { name: "Dominique", role: "invité",ceinture:"blanche" },
  { name: "Florian", role: "invité",ceinture:"rouge" },
]

test('Test if handleClick is called', async () => {
  const mockHandleClick= jest.fn();
  render(<App users={usersArray} 
    handleClick={mockHandleClick}
  />);
  await userEvent.click(screen.getByText(/Click me/i));
  expect(mockHandleClick).toHaveBeenCalledTimes(1);
});