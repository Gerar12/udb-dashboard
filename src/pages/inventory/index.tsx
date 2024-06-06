import { useState } from "react";
import { Modal } from "./components/modal";
import { EditModal } from "./components/edit-modal";
import { useFetchCategories } from "@/hooks/categories";
import { useFetchProduct } from "@/hooks/useProduct";
import { Product } from "@/types";

const stats = [
  { name: "Total de productos", stat: "50" },
  { name: "Nuevos productos ingresados", stat: "5" },
  { name: "Avg. Click Rate", stat: "24.57%" },
];

const Inventory = () => {
  const { data: products, isLoading: isLoadingProducts } = useFetchProduct();
  console.log(products, isLoadingProducts);
  const [open, setOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data, isLoading } = useFetchCategories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="p-6">
      <Modal open={open} setOpen={setOpen} />
      <EditModal open={editModal} setOpen={setEditModal} />
      <div className="flex flex-col md:flex-row items-start justify-between mb-8">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">INVENTARIO</h1>
          <br></br>
          <div>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.name}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-5"
                >
                  <dt className="truncate text-sm font-medium text-gray-500">
                    {item.name}
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                    {products?.length}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <br></br>
          <br></br>

          <div className="flex space-x-4">
            {data.map((category, index) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md focus:outline-none ${
                  index === 0 ? "bg-green-500 text-white" : 
                  index === 1 ? "bg-blue-500 text-white" :
                  index === 2 ? "bg-blue-300 text-white" : 
                  "bg-gray-200 text-gray-700"
                } hover:bg-opacity-80`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="md:w-1/3 flex items-center justify-end mt-4 md:mt-0">
          <div className="relative mr-4">
            <input
              type="text"
              placeholder="Buscar..."
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM17 19l4-4m0 0l-4-4m4 4H7"
              />
            </svg>
          </div>

          {/* Menú desplegable  */}
          <div className="relative">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              Opciones de Inventario
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-300">
                <button
                  className="block w-full text-left px-4 py-2 text-green-500 hover:bg-green-100"
                  onClick={() => {
                    setOpen(true);
                    setMenuOpen(false);
                  }}
                >
                  Agregar Nuevo Producto
                </button>
                <button className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-blue-100">
                  Agregar Nueva Categoria
                </button>
                <button className="block w-full text-left px-4 py-2 text-blue-300 hover:bg-blue-100"
                onClick={() => {
                  setEditModal(!editModal);
                }}>
                  Editar/Eliminar Categoria
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numero</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID del producto</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre del producto</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción del producto</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numero en existencias</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {products?.map((item, index) => (
        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
          <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.category_name}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className={`inline-block px-2 py-1 rounded-md ${item.stock > 0 ? 'bg-green-500' : 'bg-red-500'} text-white`}>
              {item.stock}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap flex space-x-2 items-center">
            <button className="text-red-500 hover:text-red-700 focus:outline-none">
              Eliminar
            </button>
            <button
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
              onClick={() => {
                setEditModal(!editModal);
              }}
            >
              Editar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Inventory;
