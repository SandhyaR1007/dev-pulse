import type { GithubUser } from '../types/github';

type ProfileCardProps = {
  userProfile: GithubUser | null;
};
const ProfileCard = ({ userProfile }: ProfileCardProps) => {
  return (
    <div>
      <div>
        Name:{' '}
        <span className="font-bold text-purple-800">{userProfile?.name}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
