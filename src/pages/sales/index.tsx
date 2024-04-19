import SalesStats from "./components/SalesStats";
import SalesTable from "./components/SalesTable";
import Layout from "./components/Layout";

const Sales = () => {
  return (
    <Layout>
      <SalesStats />
      <SalesTable />
    </Layout>
  );
};

export { Sales };