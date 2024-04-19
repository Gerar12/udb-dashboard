const SalesStats = () => {
    const stats = {
      totalSales: 100,
      totalRevenue: 2000,
    };
  
    return (
      <div className="flex justify-between p-4 bg-white rounded shadow">
        <div>
          <h2 className="text-lg font-bold">Total Sales</h2>
          <p>{stats.totalSales}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Total Revenue</h2>
          <p>${stats.totalRevenue}</p>
        </div>
      </div>
    );
  };
  
  export default SalesStats;