import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { SalesTypes, UserType } from "@/types";
import { useEffect, useState } from "react";
import ChartJsImage from "chartjs-to-image";
import { borderColors, colors } from "./utils/color";
import { styles } from "./utils/styles";

// Estilos para el PDF

interface PDFProps {
  data: SalesTypes[] | undefined;
  user: UserType | null;
}

// Componente PDF
const PDF = ({ data, user }: PDFProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const creationDate = new Date().toLocaleDateString();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  // const products = data?.map((sale) => sale.product.name);
  // const quantities = data?.map((sale) => sale.quantity);

  // useEffect(() => {
  //   const myChart = new ChartJsImage();
  //   myChart.setConfig({
  //     type: "bar",
  //     data: {
  //       labels: products,
  //       datasets: [
  //         {
  //           label: "Cantidad Vendida",
  //           data: quantities,
  //           backgroundColor: colors.slice(0, products?.length),
  //           borderColor: borderColors.slice(0, products?.length),
  //           borderWidth: 1,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //     },
  //   });
  //   myChart.toDataUrl().then((data) => setImageSrc(data));
  // }, [products, quantities]);

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.header}>Reporte Generado</Text>
        <Text style={styles.user}>Reporte de {user?.name}</Text>
        <Text style={styles.subHeader}>Fecha de Creación: {creationDate}</Text>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Cliente</Text>
            </Text>
            <Text style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Producto</Text>
            </Text>
            <Text style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Cantidad</Text>
            </Text>
            <Text style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Precio Total</Text>
            </Text>
            <Text style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Fecha</Text>
            </Text>
          </View>
          {data?.map((sale) => (
            <View style={styles.tableRow} key={sale.id}>
              <Text style={styles.tableCol}>
                <Text style={styles.tableCell}>{sale.client.name}</Text>
              </Text>
              <Text style={styles.tableCol}>
                <Text style={styles.tableCell}>{sale.product.name}</Text>
              </Text>
              <Text style={styles.tableCol}>
                <Text style={styles.tableCell}>{sale.quantity}</Text>
              </Text>
              <Text style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatter.format(Number(sale.total_price))}
                </Text>
              </Text>
              <Text style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {new Date(sale.date).toLocaleDateString()}
                </Text>
              </Text>
            </View>
          ))}
        </View>
        <Text style={styles.footer}>{crypto.randomUUID()}</Text>
      </Page>
    </Document>
  );
};

export { PDF };
