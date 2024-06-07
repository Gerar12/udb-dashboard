import { api } from "@/api";
import { ProductType } from "@/types";

const addProducts = async (prodcut: ProductType) => {
  const newProduct = {
    name: prodcut.name,
    description: prodcut.description,
    price: prodcut.price,
    stock: prodcut.stock,
    category_id: prodcut.category_id,
    supplier_id: prodcut.supplier_id,
  };

  try {
    const { data } = await api.post("/products", newProduct);
    return data;
  } catch (error) {
    throw new Error("Failed to add products");
  }
};

export { addProducts };
