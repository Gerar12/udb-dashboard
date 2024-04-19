import React, { useState } from 'react';

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const Clients: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [newClient, setNewClient] = useState<Client>({
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewClient(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newClient.id === 0) {
      // Agregar nuevo cliente
      setClients(prevState => [...prevState, { ...newClient, id: Date.now() }]);
    } else {
      // Actualizar cliente existente
      setClients(prevState =>
        prevState.map(client => (client.id === newClient.id ? newClient : client))
      );
    }
    setNewClient({
      id: 0,
      name: '',
      email: '',
      phone: '',
      address: ''
    });
  };

  const handleEdit = (id: number) => {
    const clientToEdit = clients.find(client => client.id === id);
    if (clientToEdit) {
      setNewClient(clientToEdit);
    }
  };

  const handleDelete = (id: number) => {
    setClients(prevState => prevState.filter(client => client.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Clientes</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <input type="hidden" name="id" value={newClient.id} />
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nombre:</label>
          <input type="text" id="name" name="name" value={newClient.name} onChange={handleChange} placeholder="Nombre del cliente" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo Electrónico:</label>
          <input type="email" id="email" name="email" value={newClient.email} onChange={handleChange} placeholder="Correo electrónico del cliente" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Teléfono:</label>
          <input type="text" id="phone" name="phone" value={newClient.phone} onChange={handleChange} placeholder="Teléfono del cliente" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Dirección:</label>
          <textarea id="address" name="address" value={newClient.address} onChange={handleChange} placeholder="Dirección del cliente" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Guardar Cliente</button>
      </form>
      <div className="grid grid-cols-5 gap-4">
  <div className="border-b py-2">
    <p className="text-lg font-semibold">Nombre</p>
  </div>
  <div className="border-b py-2">
    <p className="text-lg font-semibold">Correo Electrónico</p>
  </div>
  <div className="border-b py-2">
    <p className="text-lg font-semibold">Teléfono</p>
  </div>
  <div className="border-b py-2">
    <p className="text-lg font-semibold">Dirección</p>
  </div>
  <div className="border-b py-2">
    <p className="text-lg font-semibold">Acciones</p>
  </div>
  {clients.map(client => (
    <React.Fragment key={client.id}>
      <div className="border py-2">{client.name}</div>
      <div className="border py-2">{client.email}</div>
      <div className="border py-2">{client.phone}</div>
      <div className="border py-2">{client.address}</div>
      <div className="border py-2 flex justify-around">
        <button onClick={() => handleEdit(client.id)} className="text-blue-500">Editar</button>
        <button onClick={() => handleDelete(client.id)} className="text-red-500">Eliminar</button>
      </div>
    </React.Fragment>
  ))}
</div>




    </div>
  );
};

export default Clients;
