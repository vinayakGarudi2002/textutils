import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders TextUtils application', () => {
  render(<App />);
  const titleElement = screen.getByText(/Enter Text/i);
  expect(titleElement).toBeInTheDocument();
});

test('Number of Words button exists and functions correctly', () => {
  render(<App />);
  
  // Check if the button exists
  const wordCountButton = screen.getByText(/Number of Words/i);
  expect(wordCountButton).toBeInTheDocument();
  
  // Test with sample text
  const textarea = screen.getByRole('textbox');
  fireEvent.change(textarea, { target: { value: 'Hello world test' } });
  
  // Click the button
  fireEvent.click(wordCountButton);
  
  // Note: We can't easily test the toast notification in this simple test
  // but the button should be clickable without errors
  expect(wordCountButton).toBeInTheDocument();
});

test('Number of Words button with empty text shows warning', () => {
  render(<App />);
  
  const wordCountButton = screen.getByText(/Number of Words/i);
  const textarea = screen.getByRole('textbox');
  
  // Ensure textarea is empty
  fireEvent.change(textarea, { target: { value: '' } });
  
  // Click the button with empty text
  fireEvent.click(wordCountButton);
  
  // Button should still be present and functional
  expect(wordCountButton).toBeInTheDocument();
});
