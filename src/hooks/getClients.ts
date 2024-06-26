import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import { Client } from "@/types";
const fetcClients = async () => {
  try {
    const { data } = await api.get("/clients");
    return data;
  } catch (error) {
    throw new Error("Failed to fetch clients");
  }
};

const useGetClients = () => {
  return useQuery<Client[]>({
    queryKey: ["clients"],
    queryFn: fetcClients,
  });
};

export { useGetClients };
