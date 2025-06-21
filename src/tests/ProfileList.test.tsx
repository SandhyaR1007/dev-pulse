import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useGithubStore } from '../store/githubStore';
import ProfileList from '../components/ProfileList';
describe('ProfileList', () => {
  beforeEach(() => {
    useGithubStore.setState({
      profiles: [
        {
          id: 1,
          login: 'kenshi',
          name: 'Kenshi Sama',
          avatar_url: 'https://...',
          location: 'Japan',
          html_url: 'https://github.com/kenshi',
        },
      ],
    });
    render(<ProfileList />);
  });
  it('displays search history of users', () => {
    expect(screen.getByText(/search history/i)).toBeInTheDocument();
    expect(screen.getByText(/kenshi sama/i)).toBeInTheDocument();
  });
});
