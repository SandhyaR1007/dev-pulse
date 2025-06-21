import { useState } from 'react';
import type { GithubUser } from '../types/github';
import { fetchUserDetails } from '../api/github';
import { useGithubStore } from '../store/githubStore';

const useGithubProfile = () => {
  const [userProfile, setUserProfile] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { addProfile } = useGithubStore();

  const handleSearch = async (username: string) => {
    if (!username.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserDetails(username);
      if (data) {
        setUserProfile(data);
        addProfile(data);
      }
    } catch (err) {
      console.log(err);
      setError('No user found');
      setUserProfile(null);
    } finally {
      setLoading(false);
    }
  };
  const clearCurrentUserProfile = () => {
    setUserProfile(null);
  };

  return { loading, error, userProfile, handleSearch, clearCurrentUserProfile };
};

export default useGithubProfile;
