import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { Fragment, useRef, useState } from "react";
import { useFetchCategories } from "@/hooks/categories";
import { addProducts } from "@/hooks/addProduct";
import { ProductType } from "@/types";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useSuppliers } from "@/hooks/getSuppliers";

interface modalprops {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const Modal: React.FC<modalprops> = ({ open, setOpen }) => {
  const { data: provedores } = useSuppliers();

  const { register, handleSubmit, reset } = useForm<ProductType>();
  const [loading, setLoading] = useState(false);
  const { data } = useFetchCategories();

  const cancelButtonRef = useRef(null);

  if (!data) {
    return <div>Loading....</div>;
  }

  const handleNewProduct = async (data: ProductType) => {
    setLoading(true);
    try {
      await addProducts(data);
      toast.success("Producto agregado correctamente");
      setOpen(false);
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Ocurrió un error al agregar el producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative  transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Estas ingresando un nuevo producto
                      </Dialog.Title>
                      <div className="p-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                          Agregar Nuevo Producto
                        </h1>
                        <form
                          className="max-w-lg mx-auto"
                          onSubmit={handleSubmit((data) =>
                            handleNewProduct(data)
                          )}
                        >
                          <div className="mb-4">
                            <label
                              htmlFor="name"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Nombre del Producto
                            </label>
                            <input
                              type="text"
                              {...register("name", { required: true })}
                              id="name"
                              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="description"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Descripción del Producto
                            </label>
                            <textarea
                              id="description"
                              {...register("description", { required: true })}
                              rows={4}
                              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400"
                            ></textarea>
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="price"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Precio
                            </label>
                            <input
                              type="text"
                              {...register("price")}
                              id="price"
                              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="category"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Categoría
                            </label>
                            <select
                              id="category"
                              {...register("category_id", { required: true })}
                              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400"
                            >
                              {data.map((category) => (
                                <option key={category.id} value={category.id}>
                                  {category.name}
                                </option>
                              ))}
                              {/* Agrega más opciones de categorías aquí */}
                            </select>
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="suppliers"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              Puppliers
                            </label>
                            <select
                              id="suppliers"
                              {...register("supplier_id", { required: true })}
                              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-400"
                            >
                              {provedores?.map((provedor) => (
                                <option key={provedor.id} value={provedor.id}>
                                  {provedor.name}
                                </option>
                              ))}
                              {/* Agrega más opciones de categorías aquí */}
                            </select>
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="stock"
                              className="block text-gray-700 text-sm font-bold mb-2"
                            >
                              En Existencia
                            </label>
                            <div className="flex">
                              <button
                                type="button"
                                className="bg-blue-500 text-white px-4 py-2 rounded-l-md hover:bg-blue-600 focus:outline-none"
                              >
                                -
                              </button>
                              <input
                                type="text"
                                {...register("stock", { required: true })}
                                id="stock"
                                className="px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring focus:ring-blue-400 w-full"
                              />
                              <button
                                type="button"
                                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                          >
                            Agregar Producto
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:ml-10 sm:mt-4 sm:flex sm:pl-4">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export { Modal };
