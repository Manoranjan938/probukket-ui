import { type ReactElement, useState, useEffect } from "react";
import Chart from "react-apexcharts";

import "./style.css";

interface ChartType {
  options: any;
  series: any;
  plotOptions?: any;
}

const BarChart = (): ReactElement => {
  const [chartData, setChartData] = useState<ChartType>({
    options: {},
    series: [],
    plotOptions: {},
  });

  const defaultOptions = {
    chart: {
      toolbar: { show: false },
      animations: {
        speed: 750,
        dynamicAnimation: {
          enable: true,
          speed: 350,
        },
      },
    },
    dataLabels: {
      postion: "bottom",
    },
    legend: { show: false },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        opacityFrom: 0.9,
        opacityTo: 0.5,
        shadeIntensity: 0.1,
      },
    },
  };

  useEffect(() => {
    setChartData({
      options: {
        ...defaultOptions,
        colors: ["#6175fa", "#6ecb96", "#f57b34"],
        grid: {
          borderColor: "#d7ddff",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            distributed: true,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
      },
      series: [
        {
          name: "Total Hours",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 54, 12, 81, 55],
        },
      ],
    });
  }, []);
  return (
    <div className="chart_container">
      <div className="bar_chart">
        <Chart
          options={chartData.options}
          series={chartData?.series}
          type="bar"
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default BarChart;
