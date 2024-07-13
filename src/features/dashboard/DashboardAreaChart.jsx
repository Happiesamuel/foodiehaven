import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import useAboutFood from "../about/useAboutFood";
import { useDarkmode } from "../../context/DarkmodeContext";

function DashboardAreaChart() {
  const StyledDashboardAreaChart = styled.div`
    height: 300px;
  `;

  const { aboutData: piecChartData, isLoadingAbout: IsLoadingPieChart } =
    useAboutFood();
  const { isDarkmode } = useDarkmode();
  if (IsLoadingPieChart) return <Spinner />;
  const c = piecChartData.map((x) => x.cuisine);
  console.log(piecChartData);

  const categories = [
    "Italian",
    "Pakistani",
    "Japanese",
    "Korean",
    "Moroccan",
    "Thai",
    "Greek",
    "Indian",
    "Turkish",
    "Smoothie",
    "Mexican",
    "Russian",
    "Lebanese",
    "Brazilian",
    "Spanish",
    "Vietnamese",
    "Mediterranean",
    "Cocktail",
    "Hawaiian",
    "American",
    "Asian",
  ];
  //   console.log(categories);
  const data = categories
    .map((category) => c.filter((data) => data === category))
    .map((data) => {
      return {
        name: data.at(0),
        uv: data.length * 1000,
        pv: Math.floor(data.length / 2) * 4,
        amt: Math.floor(data.length / 2),
      };
    });
  //   const data = categories
  //   .map((category) => piecChart.filter((data) => data === category))
  //   .map((data) => {
  //     return { name: data.at(0), value: data.length * 100 };
  //   });
  return (
    <StyledDashboardAreaChart>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke={isDarkmode ? "#8884d8" : "#ea580c"}
            fill={isDarkmode ? "#8884d8" : "#f59e0b"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledDashboardAreaChart>
  );
}

export default DashboardAreaChart;

// import React, { PureComponent } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/p/sandbox/area-chart-different-shapes-6lwnhy';

//   render() {
//     return (

//     );
//   }
// }
