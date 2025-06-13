import { useState } from 'react';
import type { GithubUser } from '../types/github';
import { fetchUserDetails } from '../api/github';

const useGithubProfile = () => {
  const [userProfile, setUserProfile] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (username: string) => {
    if (!username.trim()) return;
    setLoading(true);
    try {
      const response = await fetchUserDetails(username);
      if (response) {
        setUserProfile(response);
      }
    } catch (err) {
      console.log(err);
      setError('No user found');
      setUserProfile(null);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, userProfile, handleSearch };
};

export default useGithubProfile;
