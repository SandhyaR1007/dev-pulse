import { useState } from 'react';
import type { GithubUser } from '../types/github';
import { fetchUserDetails } from '../api/github';
import ProfileCard from './ProfileCard';

const SearchInput: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [userProfile, setUserProfile] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!username.length) return;
    setLoading(true);
    try {
      const response = await fetchUserDetails(username);
      if (response) {
        setUserProfile(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="flex gap-5 p-3">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          className="p-1 w-100 border-2 border-slate-300 rounded-xl outline-0"
          placeholder="Search a username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          className="bg-purple-600 text-white text-md px-5 py-1 rounded-sm"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <ProfileCard userProfile={userProfile} />
      )}
    </div>
  );
};

export default SearchInput;
