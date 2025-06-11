import type { GithubUser } from '../types/github';

type ProfileCardProps = {
  userProfile: GithubUser | null;
};
const ProfileCard = ({ userProfile }: ProfileCardProps) => {
  return (
    <div>
      {userProfile ? (
        <div>Name: {userProfile.name}</div>
      ) : (
        <h3>No User Found</h3>
      )}
    </div>
  );
};

export default ProfileCard;
