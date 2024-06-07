import { UserType } from "@/types";
import { create } from "zustand";

interface useAuthStoreType {
  user: UserType | null;
  token: string | null;
  status: boolean;
  logout: () => void;
  login: (user: UserType, token: string) => void;
}

// Función para obtener datos de localStorage
export const getLocalStorageData = (): {
  user: UserType | null;
  token: string | null;
} => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  return {
    user: user ? JSON.parse(user) : null,
    token: token ? token : null,
  };
};

export const useAuthStore = create<useAuthStoreType>((set) => {
  const { user, token } = getLocalStorageData();
  return {
    status: !!token,
    user: user,
    token: token,
    login: (user, token) => {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      set(() => ({
        user,
        token,
        status: true,
      }));
    },
    logout: () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      set(() => ({
        user: null,
        token: null,
        status: false,
      }));
    },
  };
});
