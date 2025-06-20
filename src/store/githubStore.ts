import { create } from 'zustand';
import type { GithubUser } from '../types/github';

interface GithubState {
  profiles: GithubUser[];
  addProfile: (profile: GithubUser) => void;
  clearProfile: () => void;
}

export const useGithubStore = create<GithubState>((set) => ({
  profiles: [],
  addProfile: (user) =>
    set((state) => {
      const exists = state.profiles.some((u) => u.login === user.login);
      return exists ? state : { profiles: [...state.profiles, user] };
    }),
  clearProfile: () => set({ profiles: [] }),
}));
