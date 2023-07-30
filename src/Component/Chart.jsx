import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { Stack } from "@mui/material";

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create the options for the chart
    const options = {
      chart: {
        type: "area",
        height: 371,
      },
      stroke: {
        curve: "smooth",
      },
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100, 45, 32, 34, 52, 41],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41, 45, 32, 34, 52, 41],
        },
      ],
      xaxis: {
        categories: [
          "JAN",
          "FEB",
          "MAR",
          "APRIL",
          "MAY",
          "JUNE",
          "JULY",
          "AUG",
          "SEP",
          "NOV",
          "DEC",
        ],
      },
    };

    // Create a new ApexCharts instance with the options
    const chart = new ApexCharts(chartRef.current, options);

    // Render the chart
    chart.render();

    // Clean up the chart when the component is unmounted
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <Stack
      sx={{ display: { md: "block", xs: "none", width: "100%" } }}
      id="chart"
      ref={chartRef}
    />
  );
};

export default ChartComponent;
