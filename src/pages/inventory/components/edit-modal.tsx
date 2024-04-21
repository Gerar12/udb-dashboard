import { useState } from 'react';


const EditModal = ({isOpen, onClose }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');

  if (!isOpen) return null;

const Edit = () => {s
    
return(
<>
<div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Editar Producto</h3>
            <form className="mt-5 space-y-6">
              <div className="mb-4">
                <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID del Producto</label>
                <input type="text" id="id" className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={id} onChange={(e) => setId(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre del Producto</label>
                <input type="text" id="name" className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción del Producto</label>
                <textarea id="description" rows="3" className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio</label>
                <input type="text" id="price" className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categoría</label>
                <input type="text" id="category" className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={category} onChange={(e) => setCategory(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="stock" className="block text-sm font-medium text-gray-700">En Existencia</label>
                <input type="text" id="stock" className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={stock} onChange={(e) => setStock(e.target.value)} />
              </div>
              <div className="mt-6">
                <button type="submit" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Guardar Cambios
                </button>
                <button type="button" className="inline-flex justify-center w-full px-4 py-2 mt-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={onClose}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

</>
)
}

export default EditModal;