const SalesTable = () => {
    const salesData = [
      { id: 1, product: 'Product 1', quantity: 10, price: 100 },
      { id: 2, product: 'Product 2', quantity: 5, price: 200 },
      // SE AHGREGAN MAS PRODUCTOS ACA
    ];
  
    return (
      <table className="w-full mt-4 bg-white rounded shadow overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Product</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale) => (
            <tr key={sale.id}>
              <td className="p-2">{sale.product}</td>
              <td className="p-2">{sale.quantity}</td>
              <td className="p-2">${sale.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default SalesTable;