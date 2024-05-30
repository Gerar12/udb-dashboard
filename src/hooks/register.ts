import { api } from "@/api";
import { registerType } from "@/types";

const fetchRegister = async (user: registerType) => {
  const userRegister = {
    name: user.name,
    email: user.email,
    password: user.password,
  };

  try {
    const { data } = await api.post("/register", userRegister);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};

export { fetchRegister };
