import { create } from 'zustand';
import type { GithubUser } from '../types/github';
// import { mockProfiles } from '../utils/constants';

interface GithubState {
  profiles: GithubUser[];
  addProfile: (profile: GithubUser) => void;
  clearProfile: () => void;
  page: number;
  loadMore: () => void;
}

export const useGithubStore = create<GithubState>((set) => ({
  profiles: [],
  addProfile: (user) =>
    set((state) => {
      const exists = state.profiles.some((u) => u.login === user.login);
      return exists ? state : { profiles: [user, ...state.profiles] };
    }),
  clearProfile: () => set({ profiles: [] }),
  page: 1,
  loadMore: () => set((state) => ({ page: state.page + 1 })),
}));
