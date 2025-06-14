import type { GithubUser } from '../types/github';

type ProfileCardProps = {
  userProfile: GithubUser | null;
};
const ProfileCard = ({ userProfile }: ProfileCardProps) => {
  return (
    <div className="rounded-sm shadow-sm p-5 m-5 w-100 flex gap-5 items-end">
      <img
        src={userProfile?.avatar_url}
        alt={userProfile?.name}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h4>{userProfile?.name}</h4>
        <p>{userProfile?.bio}</p>
        <p>{userProfile?.location}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
