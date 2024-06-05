import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";

import { Product } from "@/types";
const fetchCProduct = async () => {
  try {
    const { data } = await api.get<Product[]>("/products");
    return data;
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};

const useFetchProduct = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: fetchCProduct,
  });
};

export { useFetchProduct };
