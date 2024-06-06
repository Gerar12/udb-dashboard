import { Bar } from "react-chartjs-2";

import { Chart, registerables } from "chart.js";
import { SalesTypes } from "@//types";
import { borderColors, colors } from "./utils/color";

Chart.register(...registerables);

interface ChartProps {
  data: SalesTypes[] | undefined;
}

const ChartSales = ({ data }: ChartProps) => {
  const products = data?.map((sale) => sale.product.name);
  const quantities = data?.map((sale) => sale.quantity);

  const config = {
    labels: products,
    datasets: [
      {
        label: "Cantidad Vendida",
        data: quantities,
        backgroundColor: colors.slice(0, products?.length),
        borderColor: borderColors.slice(0, products?.length),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={config} options={options} />;
};

export { ChartSales };
