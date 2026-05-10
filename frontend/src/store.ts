import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface AppStore {
  user: User | null;
  token: string | null;
  theme: 'light' | 'dark';
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  toggleTheme: () => void;
  logout: () => void;
}

export const useStore = create<AppStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      theme: 'light',
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      toggleTheme: () =>
        set((s) => {
          const next = s.theme === 'light' ? 'dark' : 'light';
          document.documentElement.setAttribute('data-theme', next);
          return { theme: next };
        }),
      logout: () => {
        set({ user: null, token: null });
        window.location.href = '/login';
      },
    }),
    { name: 'desivagabond-store' }
  )
);
