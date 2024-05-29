import React, { useState } from "react";

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const Clients: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Clientes</h2>

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
        {/* {clients.map((client) => (
          <React.Fragment key={client.id}>
            <div className="border py-2">{client.name}</div>
            <div className="border py-2">{client.email}</div>
            <div className="border py-2">{client.phone}</div>
            <div className="border py-2">{client.address}</div>
            <div className="border py-2 flex justify-around">
              <button
                onClick={() => handleEdit(client.id)}
                className="text-blue-500"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(client.id)}
                className="text-red-500"
              >
                Eliminar
              </button>
            </div>
          </React.Fragment>
        ))} */}
      </div>
    </div>
  );
};

export default Clients;
