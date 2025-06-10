import type { GithubUser } from '../types/github';

export const fetchUserDetails = async (
  username: string,
): Promise<GithubUser> => {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) throw new Error('User not found');
  return res.json();
};
