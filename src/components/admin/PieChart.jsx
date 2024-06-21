"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "@/hooks/useAxiosAuth";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const axiosAuth = useAxiosAuth();
  const { data: pieChartData, error } = useQuery({
    queryKey: ["pieChartData"],
    queryFn: () => axiosAuth.get(`/projects/admin/contributors-all`),
  });

  const chart = pieChartData?.data?.data;

  // console.log(chart);
  // console.log(error);

  const data = {
    labels: ["Volume Contributed", "Volume Left"],
    datasets: [
      {
        label: "Project Analysis",
        data: [12, 1],
        backgroundColor: ["#688CEC", "#E6FAFE"],
        // borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
