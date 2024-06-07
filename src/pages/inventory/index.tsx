import { Fragment, useState } from "react";
import { Modal } from "./components/modal";
import { EditModal } from "./components/edit-modal";
import { useFetchCategories } from "@/hooks/categories";
import { useFetchProduct } from "@/hooks/useProduct";
import { Product } from "@/types";

const Inventory = () => {
  const { data: products } = useFetchProduct();
  const [open, setOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [product, setProduct] = useState<Product | undefined>();
  const { data, isLoading } = useFetchCategories();

  const editOpen = () => {
    setEditModal(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="p-6">
      <Modal open={open} setOpen={setOpen} />
      <EditModal open={editModal} setOpen={editOpen} product={product} />
      <div className="flex flex-col md:flex-row items-start justify-between mb-8">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">INVENTARIO</h1>

          <div>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-5">
                <dt className="truncate text-sm font-medium text-gray-500">
                  Productos en existencia
                </dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                  {products?.length}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="md:w-1/3 flex items-center justify-end mt-4 md:mt-0">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Agregar Nuevo producto
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID del producto
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Nombre del producto
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Descripcion del producto
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Precio
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Categoria
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Numero en existencias
              </th>
            </tr>
          </thead>

          {products?.map((item) => (
            <Fragment key={item.id}>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">#{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatter.format(Number(item.price))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.category_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex space-x-2 items-center">
                    <span
                      className={`inline-block text-white px-2 py-1 rounded-md ${
                        item.stock >= 30
                          ? "bg-green-500"
                          : item.stock >= 15
                          ? "bg-yellow-400"
                          : "bg-red-400"
                      }`}
                    >
                      {item.stock}
                    </span>

                    <button
                      className="text-blue-500 hover:text-blue-700 focus:outline-none"
                      onClick={() => {
                        setEditModal(!editModal);
                        setProduct(item as unknown as Product);
                      }}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              </tbody>
            </Fragment>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Inventory;
