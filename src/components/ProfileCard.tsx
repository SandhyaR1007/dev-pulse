import type { GithubUser } from '../types/github';

type ProfileCardProps = {
  userProfile: GithubUser | null;
};
const ProfileCard = ({ userProfile }: ProfileCardProps) => {
  return (
    <div>
      <div>Name: {userProfile?.name}</div>
    </div>
  );
};

export default ProfileCard;
