import { useGithubStore } from '../store/githubStore';
import ProfileCard from './ProfileCard';

const ProfileList = () => {
  const { profiles } = useGithubStore();
  if (!profiles.length) return;
  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-xl font-semibold">Search History</h2>
      {profiles.map((user) => (
        <ProfileCard key={user.login} userProfile={user} />
      ))}
    </div>
  );
};

export default ProfileList;
