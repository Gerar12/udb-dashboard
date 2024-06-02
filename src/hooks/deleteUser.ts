import { api } from "@/api";

const deleteUserByID = async (id: number) => {
  try {
    const { data } = await api.delete(`/users/${id}`);
    return data;
  } catch (error) {
    throw new Error("Failed to delete user");
  }
};

export { deleteUserByID };
