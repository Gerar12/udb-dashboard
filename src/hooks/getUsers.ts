import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import { Users } from "@/types";
const fetchUsers = async () => {
  try {
    const { data } = await api.get("/users");
    return data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

const useGetUsers = () => {
  return useQuery<Users>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};

export { useGetUsers };
