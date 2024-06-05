import SalesStats from "./components/SalesStats";
import SalesTable from "./components/SalesTable";
import Layout from "./components/Layout";
import { useGetSales } from "@/hooks/getSales";
import { useFetchProduct } from "@/hooks/useProduct";
import { useGetClients } from "@/hooks/getClients";
import { useEffect, useState } from "react";

const Sales = () => {
  const { data: sales } = useGetSales();
  const { data: products } = useFetchProduct();
  const { data: clients } = useGetClients();
  const [totalSales, setTotalSales] = useState(0);
  const [countTotalRemuve, setTotalRevenue] = useState(0);
  const [countInventory, setCountInventory] = useState(0);
  const [countClients, setCountClients] = useState(0);

  useEffect(() => {
    if (sales) {
      const totalRevenue = sales.reduce(
        (acc, sale) => acc + Number(sale.total_price),
        0
      );
      setTotalRevenue(totalRevenue);
      setTotalSales(sales.length);
    }

    if (products) {
      setCountInventory(products.length);
    }

    if (clients) {
      setCountClients(clients.length);
    }
  }, [sales, products, clients]);

  return (
    <Layout>
      <SalesStats
        totalCustomers={countClients}
        totalProducts={countInventory}
        totalRevenue={countTotalRemuve}
        totalSales={totalSales}
      />
      <SalesTable data={sales} />
    </Layout>
  );
};

export default Sales;
