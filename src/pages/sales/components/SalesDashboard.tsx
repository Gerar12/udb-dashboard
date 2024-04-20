import Layout from "./Layout";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid";

const salesData = {
    totalQuantity: 110000,
    totalCost: 523200,
    totalRevenue: 753098,
    totalProfit: 331886,
    revenueChange: 1.61,
    profitChange: 5.32,
    costChange: 12.00,
    quantityChange: 2.00,
};

const SalesDashboard = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Quantity */}
          <div className="flex items-center justify-between p-4 bg-white rounded shadow">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Quantity</p>
              <p className="text-lg font-semibold">{salesData.totalQuantity}</p>
            </div>
            <ArrowUpIcon className="w-5 h-5 text-green-500" />
            <p className="text-sm text-green-500">{salesData.quantityChange}%</p>
          </div>
          {/* Total Cost */}
          <div className="flex items-center justify-between p-4 bg-white rounded shadow">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Cost</p>
              <p className="text-lg font-semibold">${salesData.totalCost}</p>
            </div>
            <ArrowUpIcon className="w-5 h-5 text-red-500" />
            <p className="text-sm text-red-500">{salesData.costChange}%</p>
          </div>
          {/* Total Revenue */}
          <div className="flex items-center justify-between p-4 bg-white rounded shadow">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="text-lg font-semibold">${salesData.totalRevenue}</p>
            </div>
            <ArrowUpIcon className="w-5 h-5 text-green-500" />
            <p className="text-sm text-green-500">{salesData.revenueChange}%</p>
          </div>
          {/* Total Profit */}
          <div className="flex items-center justify-between p-4 bg-white rounded shadow">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Profit</p>
              <p className="text-lg font-semibold">${salesData.totalProfit}</p>
            </div>
            <ArrowUpIcon className="w-5 h-5 text-green-500" />
            <p className="text-sm text-green-500">{salesData.profitChange}%</p>
          </div>
        </div>
        {/* ACA VAMOS AGREGAR LO QUE PODRIAMOS USAR COMO GRAFICOS O IMAGENES*/}
      </div>
    </Layout>
  );
};

export default SalesDashboard;
