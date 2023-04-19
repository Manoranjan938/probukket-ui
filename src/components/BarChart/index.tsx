import { type ReactElement, useState, useEffect } from "react";
import Chart from "react-apexcharts";

import "./style.css";

interface ChartType {
  options: any;
  series: any;
}

const BarChart = (): ReactElement => {
  const [chartData, setChartData] = useState<ChartType>({
    options: {},
    series: [],
  });
  useEffect(() => {
    setChartData({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    });
  }, []);
  return (
    <div className="chart_container">
      <Chart
        options={chartData.options}
        series={chartData?.series}
        type="bar"
        width={"1000px"}
      />
    </div>
  );
};

export default BarChart;
