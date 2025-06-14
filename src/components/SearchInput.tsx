import { useState } from 'react';
import ProfileCard from './ProfileCard';
import useGithubProfile from '../hooks/useGithubProfile';

const SearchInput: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const { loading, error, userProfile, handleSearch } = useGithubProfile();

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-5 p-3 flex-col">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          className="p-2 w-100 shadow-sm rounded-md outline-0"
          placeholder="Search a username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          className="bg-purple-600 text-white text-md px-5 py-1 rounded-sm w-fit self-center"
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
