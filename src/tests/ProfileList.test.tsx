import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useGithubStore } from '../store/githubStore';
import ProfileList from '../components/ProfileList';
import { mockProfiles } from '../utils/constants';
describe('ProfileList', () => {
  it('displays search history of users', () => {
    useGithubStore.setState({
      profiles: [mockProfiles[0]],
    });
    render(<ProfileList />);
    expect(screen.getByText(/search history/i)).toBeInTheDocument();
    expect(screen.getByText(/alice akira/i)).toBeInTheDocument();
  });

  it('paginates profiles correctly', () => {
    useGithubStore.setState({
      profiles: mockProfiles,
      page: 1,
    });
    render(<ProfileList />);
    expect(screen.getAllByRole('region')).toHaveLength(2);
    fireEvent.click(screen.getByText(/load more/i));
    expect(screen.getAllByRole('region')).toHaveLength(4);
  });
});
