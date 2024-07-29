import { render, screen } from '@testing-library/react';
import App from './App'; // Assurez-vous que c'est bien un composant React


test('renders learn react link', () => {
 
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
