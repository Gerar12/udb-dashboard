interface SalesStatsProps {
  totalSales: number;
  totalRevenue: number;
  totalProducts: number;
  totalCustomers: number;
}
const SalesStats = ({
  totalCustomers,
  totalProducts,
  totalRevenue,
  totalSales,
}: SalesStatsProps) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded shadow sm:grid-cols-4">
      <div>
        <h2 className="text-lg font-bold">Total Sales</h2>
        <p>{totalSales}</p>
      </div>
      <div>
        <h2 className="text-lg font-bold">Total Revenue</h2>
        <p>{formatter.format(totalRevenue)}</p>
      </div>
      <div>
        <h2 className="text-lg font-bold">Total Products</h2>
        <p>{totalProducts}</p>
      </div>
      <div>
        <h2 className="text-lg font-bold">Total Customers</h2>
        <p>{totalCustomers}</p>
      </div>
    </div>
  );
};

export default SalesStats;
