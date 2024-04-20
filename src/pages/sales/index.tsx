import SalesDashboard from "./components/SalesDashboard";
import SalesStats from "./components/SalesStats";
import SalesTable from "./components/SalesTable";
import Layout from "./components/Layout";

const Sales = () => {
  return (
    <Layout>
      <SalesStats />
      <SalesTable />
      <SalesDashboard/>
    </Layout>
  );
};

export default Sales ;