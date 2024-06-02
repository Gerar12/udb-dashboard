import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import { user } from "@/types";

const fetchUserByID = async (email: string): Promise<user[]> => {
  try {
    const { data } = await api.get(`/users/${email}`);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};

const useGetUserByID = (email: string) => {
  return useQuery<user[]>({
    queryKey: ["user", email],
    queryFn: () => fetchUserByID(email),
  });
};

export { useGetUserByID };
