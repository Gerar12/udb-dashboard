import { UsersIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { GiReceiveMoney } from "react-icons/gi";
import { MdInventory } from "react-icons/md";

interface StatsProps {
  totalClients: number;
  totalInventory: number;
  totalSales: number;
}

export const Stats = ({
  totalClients,
  totalInventory,
  totalSales,
}: StatsProps) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Last 30 days
      </h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-gray-500 p-3">
              <UsersIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              Total clients
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
              {totalClients}
            </p>

            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <Link
                  to={"/clients"}
                  className="font-medium text-gray-600 hover:text-gray-500"
                >
                  View all<span className="sr-only">stats</span>
                </Link>
              </div>
            </div>
          </dd>
        </div>
        {/* Otro */}
        <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-gray-500 p-3">
              <MdInventory className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              Inventory
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
              {totalInventory}
            </p>

            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <Link
                  to={"/inventory"}
                  className="font-medium text-gray-600 hover:text-gray-500"
                >
                  View all<span className="sr-only">products</span>
                </Link>
              </div>
            </div>
          </dd>
        </div>
        {/* Otro */}
        <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-gray-500 p-3">
              <GiReceiveMoney
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              Sales
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
              {formatter.format(totalSales)}
            </p>

            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <Link
                  to={"/sales"}
                  className="font-medium text-gray-600 hover:text-gray-500"
                >
                  View all<span className="sr-only">Sales</span>
                </Link>
              </div>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Stats;
