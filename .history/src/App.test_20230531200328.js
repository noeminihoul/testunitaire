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
  const linkElement=screen.getByTestId("linktotest");
  
  await userEvent.click(linkElement);
  expect(mockHandleClick).toHaveBeenCalledTimes(1);
});

test('TestIfLoadingIsDisplayed', () => {
  render(<App users={usersArray} />);
  const textElement=screen.getByTestId("loading");
  expect(textElement).toBeInTheDocument();
});