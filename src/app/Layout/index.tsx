import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaBars, FaUserShield, FaWarehouse } from "react-icons/fa";
import {
  IoIosLogIn,
  IoIosPeople,
  IoMdCash,
  IoMdClose,
  IoMdHome,
} from "react-icons/io";
import { RiFileChartLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/context/login-store";
import { LogoutModal } from "./ModalLogout";

interface LayoutRootProps {
  children: React.ReactNode;
}

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: <IoMdHome className="h-6 w-6 shrink-0" />,
  },
  {
    name: "Inventory",
    href: "/inventory",
    icon: <FaWarehouse className="h-6 w-6 shrink-0" />,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: <RiFileChartLine className="h-6 w-6 shrink-0" />,
  },
  {
    name: "Clients",
    href: "/clients",
    icon: <IoIosPeople className="h-6 w-6 shrink-0" />,
  },
  {
    name: "Sales",
    href: "/sales",
    icon: <IoMdCash className="h-6 w-6 shrink-0" />,
  },
  {
    name: "User Management",
    href: "/user-management",
    icon: <FaUserShield className="h-6 w-6 shrink-0" />,
  },
];

const LayoutRoot: React.FC<LayoutRootProps> = ({ children }) => {
  const login = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalLogout, setModalLogout] = useState(false);

  const openModalLogout = () => {
    setSidebarOpen(false);
    setTimeout(() => {
      setModalLogout(true);
    }, 500);
  };

  useEffect(() => {
    if (!login) navigate("/login");
  }, [login, navigate]);

  return (
    <>
      {!login ? (
        <>{children}</>
      ) : (
        <div>
          <LogoutModal modal={setModalLogout} open={modalLogout} />
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-50 lg:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-900/80 " />
              </Transition.Child>

              <div className="fixed inset-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                        <button
                          type="button"
                          className="-m-2.5 p-2.5"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <IoMdClose
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                      <div className="flex h-16 shrink-0 items-center">
                        <p className="text-blue-100 font-extrabold text-2xl">
                          Panel Admin
                        </p>
                      </div>
                      <nav className="flex flex-1 flex-col ">
                        <ul
                          role="list"
                          className="flex flex-1 flex-col gap-y-7"
                        >
                          <li>
                            <ul role="list" className="-mx-2 space-y-1">
                              {navigation.map((item) => (
                                <li key={item.name}>
                                  <NavLink
                                    onClick={() => setSidebarOpen(false)}
                                    to={item.href}
                                    className={({ isActive }) =>
                                      `${
                                        isActive
                                          ? "bg-gray-800 text-white"
                                          : "text-gray-400 hover:text-white hover:bg-gray-800"
                                      }
                                      group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`
                                    }
                                  >
                                    {item.icon}
                                    {item.name}
                                  </NavLink>
                                </li>
                              ))}
                              <li>
                                <button
                                  className="  group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold item-center bg-red-500 w-full justify-center hover:bg-red-600 duration-300 text-white items-center mt-20 "
                                  onClick={openModalLogout}
                                >
                                  <IoIosLogIn className="" />
                                  Logout
                                </button>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div
            className={`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col`}
          >
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
              <div className="flex h-16 shrink-0 items-center">
                <p className="text-blue-100 font-extrabold text-2xl">
                  Panel Admin
                </p>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <NavLink
                            to={item.href}
                            className={({ isActive }) =>
                              `${
                                isActive
                                  ? "bg-gray-800 text-white"
                                  : "text-gray-400 hover:text-white hover:bg-gray-800"
                              }
                              group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`
                            }
                          >
                            {item.icon}
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                      <li>
                        <button
                          className="  group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold item-center bg-red-500 w-full justify-center hover:bg-red-600 duration-300 text-white items-center mt-20 "
                          onClick={openModalLogout}
                        >
                          <IoIosLogIn className="" />
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>

                  <li className="-mx-6 mt-auto">
                    <a
                      href="#"
                      className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                    >
                      <span className="sr-only">Your profile</span>
                      <span aria-hidden="true">
                        👋 Hello <strong> {user?.name} </strong> 🎉
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 text-sm font-semibold leading-6 text-white">
              Dashboard
            </div>
            <p className="text-white">OKU</p>
          </div>

          <main className="py-10 lg:pl-72">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      )}
    </>
  );
};

export default LayoutRoot;
