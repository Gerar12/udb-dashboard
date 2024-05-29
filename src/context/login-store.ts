import { create } from "zustand";

interface AuthState {
  status: boolean;
  user?: {
    name: string;
    email: string;
  };
}

export const useAuthStore = create<AuthState>((set) => ({
  status: false,
  user: undefined,
  token: undefined,
}));
