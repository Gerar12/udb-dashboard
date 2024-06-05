import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import { SalesTypes } from "@/types";
const fetcSales = async () => {
  try {
    const { data } = await api.get("/sales");
    return data;
  } catch (error) {
    throw new Error("Failed to fetch clients");
  }
};

const useGetSales = () => {
  return useQuery<SalesTypes[]>({
    queryKey: ["sales"],
    queryFn: fetcSales,
    refetchInterval: 10000,
  });
};

export { useGetSales };
