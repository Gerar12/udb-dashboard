import { UserType } from "@/types";
import { create } from "zustand";

interface useAuthStoreType {
  user: UserType | null;
  token: string | null;
  status: boolean;
  logout: () => void;
  login: (user: UserType, token: string) => void;
}

export const useAuthStore = create<useAuthStoreType>((set) => ({
  status: false,
  user: null,
  token: null,
  login: (user, token) =>
    set(() => ({
      user,
      token,
      status: true,
    })),
  logout: () =>
    set(() => ({
      user: null,
      token: null,
      status: false,
    })),
}));
