import Recent from "./components/Recent";
import RecentClients from "./components/RecentClient";
import Layout from "./components/Layout";
import Stats from "./components/Stats";
const Home = () => {
  return (
    <Layout>
      <Stats />
      <Recent />
      <RecentClients />
    </Layout>
  );
};

export { Home };
