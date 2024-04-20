const SalesStats = () => {
    const stats = {
      totalSales: 100,
      totalRevenue: 2000,
      totalProducts: 50,
      totalCustomers: 20,
    };
  
    return (
      <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded shadow sm:grid-cols-4">
        <div>
          <h2 className="text-lg font-bold">Total Sales</h2>
          <p>{stats.totalSales}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Total Revenue</h2>
          <p>${stats.totalRevenue}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Total Products</h2>
          <p>{stats.totalProducts}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Total Customers</h2>
          <p>{stats.totalCustomers}</p>
        </div>
      </div>
    );
  };
  
  export default SalesStats;