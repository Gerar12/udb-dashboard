import { useGetSales } from "@/hooks/getSales";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDF } from "./components/PDF";
import { ChartSales } from "./components/SalesBarChart";
import { useAuthStore } from "@/context/login-store";
const ReportsPage = () => {
  const user = useAuthStore((state) => state.user);
  const { data } = useGetSales();

  return (
    <div className="reports-page bg-gray-100 min-h-screen py-8 px-4 sm:px-6 ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Informes</h2>
      <div className="flex justify-between items-center mb-6">
        {/* Botones de acciones */}
        <div className="flex space-x-4">
          <PDFDownloadLink
            document={<PDF data={data} user={user} />}
            fileName={`Report ${new Date()}`}
          >
            {({ loading }) =>
              loading ? (
                "Cargando documento..."
              ) : (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Generar Reporte
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
      {/* Tarjeta de ejemplo para mostrar un reporte */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Reporte de Ventas
        </h3>
        <p className="text-sm text-gray-600 mb-4">date: "Abril 2024"</p>
        <p className="text-gray-700">
          Este es un reporte de ejemplo que muestra las ventas del mes de abril
          de 2024. Incluye información sobre los productos vendidos, precios,
          clientes, etc.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 mt-4">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Cliente
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Producto
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Cantidad
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Precio Total
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Fecha
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data?.map((sale) => (
                <tr key={sale.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {sale.client.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sale.product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sale.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sale.total_price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(sale.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h1 className="text-center my-10 text-3xl ">Top productos vendidos</h1>
        <ChartSales data={data} />
      </div>
    </div>
  );
};

export default ReportsPage;
