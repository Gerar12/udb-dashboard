import { useState } from "react";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import { useGetUsers } from "@/hooks/getUsers";
import { useAuthStore } from "@/context/login-store";
import { Toaster } from "sonner";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const UserManager = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const { data, isLoading } = useGetUsers();
  const userAuth = useAuthStore((state) => state.user);
  const [name, setName] = useState("");
  const [id, setId] = useState(0);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalUpdate = (email: string, name: string, id: number) => {
    setIsModalUpdateOpen(true);
    setUserEmail(email);
    setName(name);
    setId(id);
  };

  const closeModalUpdate = () => {
    setIsModalUpdateOpen(false);
  };

  const openModalDelete = (name: string) => {
    setIsModalDeleteOpen(true);
    setName(name);
  };

  const closeModalDelete = () => {
    setIsModalDeleteOpen(false);
  };

  return (
    <>
      <div className="">
        <h1 className="mx-auto text-center text-white text-2xl my-1">
          User Management
        </h1>
        <div className="bg-white  relative  overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl">Users All</h2>
            </div>
            {isModalOpen && <CreateUser onClose={closeModal} />}
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <Toaster richColors />
              <button
                type="button"
                onClick={openModal}
                data-modal-target="createUserModal"
                data-modal-toggle="createUserModal"
                className="flex items-center justify-center text-primary-700 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 border border-gray-300"
              >
                <PlusIcon className="w-5 h-5 text-gray-500 " />
                Add User
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((user) => (
                  <tr className="border-b dark:border-gray-700" key={user.id}>
                    <td className="px-4 py-3">{user?.name}</td>
                    <td className="px-4 py-3">{user?.email}</td>
                    <td className="px-4 py-3 flex items-center justify-end">
                      <Toaster richColors />
                      <button
                        type="button"
                        onClick={() =>
                          openModalUpdate(user.email, user.name, user.id)
                        }
                        data-modal-target="updateUserModal"
                        data-modal-toggle="updateUserModal"
                        className="flex w-full items-center py-2 px-4 hover:bg-gray-100 "
                      >
                        <PencilSquareIcon className="w-5 h-5" />
                        Edit
                      </button>
                      {isModalUpdateOpen && (
                        <UpdateUser
                          onClose={closeModalUpdate}
                          email={userEmail}
                          id={id}
                          name={name}
                        />
                      )}
                      <Toaster richColors />
                      {isModalDeleteOpen && (
                        <DeleteUser
                          onClose={closeModalDelete}
                          id={user.id}
                          name={`${name}`}
                        />
                      )}

                      {userAuth?.email === user.email ? (
                        <p className="w-full cursor-default">
                          You cannot delete yourself.
                        </p>
                      ) : (
                        <button
                          type="button"
                          onClick={() => openModalDelete(user.name)}
                          data-modal-target="deleteModal"
                          data-modal-toggle="deleteModal"
                          className="flex w-full items-center py-2 px-4 hover:bg-gray-100  text-red-500 dark:hover:text-red-400"
                        >
                          <TrashIcon className="w-5 h-5" />
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManager;
