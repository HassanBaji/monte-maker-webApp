import { create } from 'zustand';

export const useProfileStore = create((set) => ({
  profile: [],
  updateProfile: (profile) => set(() => ({ profile: profile }))
}));
