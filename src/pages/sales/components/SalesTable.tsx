const SalesTable = () => {
    const salesData = [
      { id: 1, product: 'Product 1', quantity: 10, price: 100, customer: 'Customer 1' },
      { id: 2, product: 'Product 2', quantity: 5, price: 200, customer: 'Customer 2' },
      { id: 3, product: 'Product 3', quantity: 20, price: 550, customer: 'Customer 3' },
      { id: 4, product: 'Product 4', quantity: 13, price: 10, customer: 'Customer 4' },
      { id: 5, product: 'Product 5', quantity: 47, price: 2, customer: 'Customer 5' },
      { id: 6, product: 'Product 6', quantity: 1, price: 800, customer: 'Customer 6' },
      // MAS DATOS ACA
    ];
  
    return (
      <div className="w-full mt-4 overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase tracking-wider">Customer</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {salesData.map((sale) => (
              <tr key={sale.id}>
                <td className="px-6 py-4 whitespace-nowrap">{sale.product}</td>
                <td className="px-6 py-4 whitespace-nowrap">{sale.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">${sale.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{sale.customer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default SalesTable;
  