import { SalesTypes } from "@/types";
import { AiOutlineStock } from "react-icons/ai";
import { Fragment } from "react/jsx-runtime";

const statuses = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};

interface RecentProps {
  lastSales: SalesTypes[] | undefined;
}

const Recent = ({ lastSales }: RecentProps) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <div>
        <div className="mt-10">
          <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
            Recent activity
          </h2>
        </div>
        <div className="mt-6 overflow-hidden border-t border-gray-100 ">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <table className="w-full text-left">
              <thead className="sr-only">
                <tr>
                  <th>Amount</th>
                  <th className="hidden sm:table-cell">Client</th>
                  <th>More details</th>
                </tr>
              </thead>
              <tbody>
                <Fragment>
                  <tr className="text-sm leading-6 text-gray-900">
                    <th
                      scope="colgroup"
                      colSpan={3}
                      className="relative isolate py-2 font-semibold"
                    >
                      <p>Last 5 sales</p>
                      <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                      <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                    </th>
                  </tr>
                  {lastSales?.map((sale) => (
                    <tr key={sale.id}>
                      <td className="relative py-5 pr-6">
                        <div className="flex gap-x-6">
                          <AiOutlineStock
                            className="h-6 w-6 text-green-500"
                            aria-hidden="true"
                          />
                          <div className="flex-auto">
                            <div className="flex items-start gap-x-3">
                              <div className="text-sm font-medium leading-6 text-gray-900">
                                {formatter.format(Number(sale.total_price))}
                              </div>
                              <div
                                className={`
                                    ${statuses.Paid}
                                    "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset`}
                              >
                                Paid
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                        <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                      </td>

                      <td className="hidden py-5 pr-6 sm:table-cell">
                        <div className="text-sm leading-6 text-gray-900">
                          <p>{sale.client.name}</p>
                        </div>
                        <div className="mt-1 text-xs leading-5 text-gray-500">
                          <p>{sale.product.name}</p>
                        </div>
                      </td>
                      <td className="py-5 text-right">
                        <div className="flex justify-end">
                          <a
                            href={"#"}
                            className="text-sm font-medium leading-6 text-gray-600 hover:text-gray-500"
                          >
                            View
                            <span className="hidden sm:inline">
                              {" "}
                              transaction
                            </span>
                            <span className="sr-only">
                              , invoice #{sale.id},
                            </span>
                          </a>
                        </div>
                        <div className="mt-1 text-xs leading-5 text-gray-500">
                          Invoice{" "}
                          <span className="text-gray-900">#{sale.id}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </Fragment>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recent;
