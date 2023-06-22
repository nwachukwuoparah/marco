import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { Stack } from "@mui/material";

const Pie_chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create the options for the chart
    const options = {
      series: [70, 30],
      chart: {
        width: "100%",
        type: "pie",
      },
      labels: ["outcome", "Income"],
      theme: {
        monochrome: {
          enabled: true,
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -5,
          },
        },
      },
      title: {
        // text: "Transactions ",
      },
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return [name, val.toFixed(1) + "%"];
        },
      },
      legend: {
        show: false,
      },
    };

    // var chart = new ApexCharts(document.querySelector("#chart"), options);
    // chart.render();

    // Create a new ApexCharts instance with the options
    const chart = new ApexCharts(chartRef.current, options);

    // Render the chart
    chart.render();

    // Clean up the chart when the component is unmounted
    return () => {
      chart.destroy();
    };
  }, []);

  return <Stack id="chart" ref={chartRef} />;
};

export default Pie_chart;
