import { useState } from 'react';
import ProfileCard from './ProfileCard';
import useGithubProfile from '../hooks/useGithubProfile';

const SearchInput: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const { loading, error, userProfile, handleSearch } = useGithubProfile();

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
          onClick={() => handleSearch(username)}
        >
          Search
        </button>
      </div>
      {loading && <h3>Loading...</h3>}
      {error && <h3 className="text-red-600">{error}</h3>}
      {userProfile && <ProfileCard userProfile={userProfile} />}
    </div>
  );
};

export default SearchInput;
