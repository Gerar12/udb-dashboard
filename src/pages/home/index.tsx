import Recent from "./components/Recent";
import RecentClients from "./components/RecentClient";
import Layout from "./components/Layout";
import Stats from "./components/Stats";
import { useGetSales } from "@/hooks/getSales";
import { useFetchProduct } from "@/hooks/useProduct";
import { useEffect, useState } from "react";
import { useGetClients } from "@/hooks/getClients";
const Home = () => {
  const [countSales, setCountSales] = useState(0);
  const { data: products } = useFetchProduct();
  const { data: sales } = useGetSales();
  const { data: Clients } = useGetClients();

  useEffect(() => {
    if (sales) {
      const total = sales.reduce(
        (acc, sale) => acc + Number(sale.total_price),
        0
      );
      setCountSales(total);
    }
  }, [sales]);

  const LastFiveSales = sales?.slice(-5);
  const LastClients = sales?.slice(-3);

  return (
    <Layout>
      <Stats
        totalSales={countSales}
        totalClients={Clients?.length as number}
        totalInventory={products?.length as number}
      />
      <Recent lastSales={LastFiveSales} />
      <RecentClients lastClients={LastClients} />
    </Layout>
  );
};

export { Home };
