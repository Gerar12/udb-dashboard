import { useState } from "react";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import { useGetUsers } from "@/hooks/getUsers";
import { useAuthStore } from "@/context/login-store";
import { Toaster } from "sonner";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const UserManager = () => {
  const [userEmail, setUserEmail] = useState<string>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const { data, isLoading } = useGetUsers();

  const userAuth = useAuthStore((state) => state.user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalUpdate = (email: string) => {
    setIsModalUpdateOpen(true);
    setUserEmail(email);
  };

  const closeModalUpdate = () => {
    setIsModalUpdateOpen(false);
  };

  const openModalDelete = () => {
    setIsModalDeleteOpen(true);
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
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 " />
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 "
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
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
                        onClick={() => openModalUpdate(user.email)}
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
                          email={userEmail as string}
                        />
                      )}
                      <Toaster richColors />
                      {isModalDeleteOpen && (
                        <DeleteUser onClose={closeModalDelete} id={user.id} />
                      )}

                      {userAuth?.email === user.email ? (
                        <p className="w-full cursor-default">
                          You cannot delete yourself.
                        </p>
                      ) : (
                        <button
                          type="button"
                          onClick={() => openModalDelete()}
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
