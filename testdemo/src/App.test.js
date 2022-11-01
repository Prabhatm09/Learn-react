import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("check prabhat text" , () => {
  render(<App />);
  const text = screen.getByText(/This is prabhat/i);
  expect(text).toBeInTheDocument();
});
