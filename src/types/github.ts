export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string | null;
  location?: string | null;
  bio?: string | null;
  public_repos?: number;
  followers?: number;
  following?: number;
}
