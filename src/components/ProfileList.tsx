import { useMemo } from 'react';
import { useGithubStore } from '../store/githubStore';
import ProfileCard from './ProfileCard';

const ProfileList = () => {
  const { profiles, page, loadMore } = useGithubStore();
  const visibleProfiles = useMemo(
    () => profiles.slice(0, 2 * page),
    [profiles, page],
  );
  if (!profiles.length) return;

  return (
    <div className="mt-6 space-y-4 flex flex-col">
      <h2 className="text-xl font-semibold">Search History</h2>
      {visibleProfiles.map((user) => (
        <ProfileCard key={user.login} userProfile={user} />
      ))}
      {visibleProfiles.length < profiles.length && (
        <button
          className="bg-purple-500 py-2 px-4 text-white rounded-sm self-center cursor-pointer"
          onClick={loadMore}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default ProfileList;
