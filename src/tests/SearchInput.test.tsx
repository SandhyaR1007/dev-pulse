import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SearchInput } from '../components';
import '@testing-library/jest-dom';

global.fetch = jest.fn(); // override fetch for all tests

const typedFetch = global.fetch as jest.Mock;
describe('SearchInput', () => {
  let inputElement: HTMLInputElement, searchBtn: HTMLButtonElement;
  beforeEach(() => {
    typedFetch.mockClear();
    render(<SearchInput />);
    inputElement = screen.getByLabelText(/search/i);
    searchBtn = screen.getByRole('button', { name: /search/i });
  });
  it('renders input and search button', () => {
    expect(inputElement).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });

  it('shows profile for valid username', async () => {
    typedFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        login: 'kenshi',
        name: 'Kenshi Sama',
        avatar_url: 'https://...',
        location: 'Japan',
        html_url: 'https://github.com/kenshi',
      }),
    });

    fireEvent.change(inputElement, {
      target: { value: 'kenshi' },
    });
    fireEvent.click(searchBtn);

    await waitFor(() => {
      expect(screen.getByText(/kenshi sama/i)).toBeInTheDocument();
    });
  });

  it('shows loading text', () => {
    fireEvent.change(inputElement, { target: { value: 'kenshi' } });
    fireEvent.click(searchBtn);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
  it('shows error on wrong username', async () => {
    typedFetch.mockRejectedValueOnce({
      ok: false,
    });
    fireEvent.change(inputElement, { target: { value: 'invalid_user' } });
    fireEvent.click(searchBtn);

    await waitFor(() => {
      expect(screen.getByText(/no user found/i)).toBeInTheDocument();
    });
  });
});
