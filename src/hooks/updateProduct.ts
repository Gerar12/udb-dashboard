import { api } from "@/api";
import { ProductType } from "@/types";

const updateProduct = async (prodcut: ProductType, id: number) => {
  const newProduct = {
    name: prodcut.name,
    description: prodcut.description,
    price: prodcut.price,
    stock: prodcut.stock,
    category_id: prodcut.category_id,
    supplier_id: prodcut.supplier_id,
  };

  try {
    const { data } = await api.put(`/products/${id}`, newProduct);
    return data;
  } catch (error) {
    throw new Error("Failed to add products");
  }
};

export { updateProduct };
