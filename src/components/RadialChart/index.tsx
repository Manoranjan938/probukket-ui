import { type ReactElement, useState, useEffect } from "react";
import Chart from "react-apexcharts";

import "./style.css";

interface RadialChartType {
  options: any;
  series: any;
}

const RadialChart = (): ReactElement => {
  const [chartData, setChartData] = useState<RadialChartType>({
    options: {},
    series: [],
  });

  useEffect(() => {
    setChartData({
      options: {
        colors: ["#6175fa", "#6ecb96", "#f57b34"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: "60%",
            },

            dataLabels: {
              showOn: "always",
              name: {
                offsetY: -10,
                show: true,
                color: "#888",
                fontSize: "13px",
              },
              value: {
                color: "#111",
                fontSize: "30px",
                show: true,
              },
            },
          },
        },

        stroke: {
          lineCap: "round",
        },
        labels: ["Progress"],
      },
      series: [67, 75],
    });
  }, []);
  return (
    <div className="chart_container">
      <div className="radial_chart">
        <Chart
          options={chartData.options}
          series={chartData?.series}
          type="radialBar"
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default RadialChart;
