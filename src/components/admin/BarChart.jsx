"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { handleDate } from "@/redux/slices/variables";
import { useDispatch, useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const axiosAuth = useAxiosAuth();
  const dispatch = useDispatch();
  const { defaultDate } = useSelector((state) => state.variables);

  //  const { data: project, isLoading,  } = useQuery({
  //    queryKey: ["projects", order, pageNumber, take],
  //    queryFn: () =>
  //      axiosAuth.get(
  //        `/projects/general?order=desc&pageNumber=${pageNumber}&take=${take}`
  //      ),
  //  });
  //  const projectData = data?.data?.data?.projects?.data;


  const { data: chartData, error } = useQuery({
    queryKey: ["chartData"],
    queryFn: () => axiosAuth.get(`/projects/admin/contributors-all`),
  });

  const chart = chartData?.data?.data;

  // console.log(defaultDate);
  function getLatestDate(data) {
    if (!data || data.length === 0) return null; // Return null if data is empty

    let latestDate = new Date(data[0].createdDate); // Initialize with the first date

    data.forEach((item) => {
      const currentDate = new Date(item.createdDate);
      if (currentDate > latestDate) {
        latestDate = currentDate; // Update latestDate if currentDate is later
      }
    });

    // Format the latest date as "YYYY-MM-DD"
    const year = latestDate.getFullYear();
    const month = String(latestDate.getMonth() + 1).padStart(2, "0");
    const day = String(latestDate.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  }

  const latestDate = getLatestDate(chart);

  useEffect(() => {
    dispatch(handleDate(latestDate));
  }, [latestDate, dispatch]);

  // console.log(chart);
  // console.log(latestDate);

  // const data = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [
  //     {
  //       label: "Contribution",
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //       backgroundColor: "#688CEC",
  //       // borderColor: "rgba(75, 192, 192, 1)",
  //       borderWidth: 0,
  //     },
  //   ],
  // };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      const options = {
        month: "short",
      };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    } else {
      return "";
    }
  };

  function aggregateContributions(data) {
    const aggregatedData = {};

    // Initialize aggregatedData with 0 values for all months
    const months = [
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
    ];
    months.forEach((month) => (aggregatedData[month] = 0));

    // Aggregate contributions for existing months
    data?.forEach((item) => {
      const month = formatDate(item.createdDate);
      const amount = parseFloat(item.amount);

      if (aggregatedData[month]) {
        aggregatedData[month] += amount;
      } else {
        aggregatedData[month] = amount;
      }
    });

    return aggregatedData;
  }

  const aggregatedData = aggregateContributions(chart);

  // Prepare chart data
  const labels = Object.keys(aggregatedData);
  const dataPoints = Object.values(aggregatedData);

  const data = {
    labels,
    datasets: [
      {
        label: "Contribution",
        data: dataPoints,
        backgroundColor: "#688CEC",
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
