import { api } from "@/api";
import { updateUserProps } from "@/types";

const UseputUpdateUser = async (id: number, user: updateUserProps) => {
  const update = {
    name: user.name,
    email: user.email,
    password: user.password,
  };

  try {
    const { data } = await api.put(`/users/${id}`, update);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};

export { UseputUpdateUser };
