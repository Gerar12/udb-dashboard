import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { SalesTypes } from "@/types";

const statuses = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};

interface RecentClientsProps {
  lastClients: SalesTypes[] | undefined;
}

const RecentClients = ({ lastClients }: RecentClientsProps) => {
  return (
    <>
      <div className="mt-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Recent clients
            </h2>
            <Link
              to={"/clients"}
              className="text-sm font-semibold leading-6 text-gray-600 hover:text-gray-500"
            >
              View all<span className="sr-only">, clients</span>
            </Link>
          </div>
          <ul
            role="list"
            className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
          >
            {lastClients?.map((client) => (
              <li
                key={client.id}
                className="overflow-hidden rounded-xl border border-gray-200"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                  {/* <img
                    src={client.imageUrl}
                    alt={client.name}
                    className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                  /> */}
                  <div className="text-sm font-medium leading-6 text-gray-900">
                    {client.client.name}
                  </div>
                  <Menu as="div" className="relative ml-auto">
                    <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Open options</span>
                      <EllipsisHorizontalIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${active ? "bg-gray-50" : ""}
                                block px-3 py-1 text-sm leading-6 text-gray-900
                               `}
                            >
                              View
                              <span className="sr-only">
                                , {client.client.name}
                              </span>
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                  <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Last invoice</dt>
                    <dd className="text-gray-700">
                      <p>{client.date.toString().split(" ")[0]}</p>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Amount</dt>
                    <dd className="flex items-start gap-x-2">
                      <div className="font-medium text-gray-900">
                        {client.total_price}
                      </div>
                      <div
                        className={`${statuses.Paid},
                          "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"
                        `}
                      >
                        Paid
                      </div>
                    </dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecentClients;
