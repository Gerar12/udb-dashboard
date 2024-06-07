import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import { SuppliersType } from "@/types";
const fetcSuppliers = async () => {
  try {
    const { data } = await api.get("/suppliers");
    return data;
  } catch (error) {
    throw new Error("Failed to fetch clients");
  }
};

const useSuppliers = () => {
  return useQuery<SuppliersType[]>({
    queryKey: ["suppliers"],
    queryFn: fetcSuppliers,
    refetchInterval: 10000,
  });
};

export { useSuppliers };
