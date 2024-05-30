import { api } from "@/api";
import { loginType, UserType } from "@/types";

interface LoginResponse {
  user: UserType;
  token: string;
}

const fetchLogin = async (user: loginType) => {
  const userLogin = {
    email: user.email,
    password: user.password,
  };

  try {
    const { data } = await api.post<LoginResponse>("/login", userLogin);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};

export { fetchLogin };
