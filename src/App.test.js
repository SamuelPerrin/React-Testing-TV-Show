import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import fetchShow from './api/fetchShow';
import { episodesData } from './components/Episodes.test';

jest.mock('./api/fetchShow');

test('App renders without errors', () => {
  render(<App />);
})

test('fetches episodes correctly', async () => {
  fetchShow.mockResolvedValueOnce(episodesData);
  const { findAllByText } = render(<App />);

  expect(screen.getByText(/fetching data/i)).toBeInTheDocument();
  
  await waitFor(async () => await findAllByText(/episode/i));

  expect(findAllByText(/episode/i)).toHaveLength(8)
})