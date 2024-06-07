import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFetchCategories } from "@/hooks/categories";
import { useSuppliers } from "@/hooks/getSuppliers";
import { Product } from "@/types";
import { toast } from "sonner";
import { updateProduct } from "@/hooks/updateProduct";

interface EditModalProps {
  open: boolean;
  setOpen: () => void;
  product: Product | undefined;
}

interface ProductType {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  category_id: number;
  supplier_id: number;
}

const EditModal = ({ open, setOpen, product }: EditModalProps) => {
  const { data: categories } = useFetchCategories();
  const { data: suppliers } = useSuppliers();

  const { register, handleSubmit, reset } = useForm<ProductType>({
    defaultValues: {
      name: product?.name,
      description: product?.description,
      price: product?.price,
      category_id: product?.id,
      supplier_id: product?.id,
      stock: product?.stock,
    },
  });

  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);

  if (!open) return null;

  const handleUpdate = async (data: ProductType) => {
    try {
      await updateProduct(data as any, product!.id);
      setOpen();
      toast.success("Producto actualizado");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Error al actualizar el producto");
    }
  };

  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Editar Producto
              </h3>
              <form
                className="mt-5 space-y-6"
                onSubmit={handleSubmit((data) => handleUpdate(data))}
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre del Producto
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: true })}
                    className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Descripción del Producto
                  </label>
                  <textarea
                    id="description"
                    {...register("description", { required: true })}
                    rows={3}
                    className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Precio
                  </label>
                  <input
                    type="text"
                    {...register("price", { required: true })}
                    id="price"
                    className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="block text-gray-700 text-sm  mb-2"
                  >
                    Categoría
                  </label>
                  <select
                    id="category"
                    {...register("category_id", { required: true })}
                    className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400"
                  >
                    {categories?.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="supplier"
                    className="block text-gray-700 text-sm mb-2"
                  >
                    Supplier
                  </label>
                  <select
                    id="supplier"
                    {...register("supplier_id", { required: true })}
                    className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400"
                  >
                    {suppliers?.map((supplier) => (
                      <option key={supplier.id} value={supplier.id}>
                        {supplier.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="stock"
                    className="block text-sm font-medium text-gray-700"
                  >
                    En Existencia
                  </label>
                  <input
                    type="text"
                    {...register("stock", { required: true })}
                    id="stock"
                    className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Guardar Cambios
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={setOpen}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { EditModal };
