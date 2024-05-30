import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import { CategorieType } from "@/types";
const fetchCategories = async () => {
  try {
    const { data } = await api.get("/categories");
    return data;
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};

const useFetchCategories = () => {
  return useQuery<CategorieType[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};

export { useFetchCategories };
