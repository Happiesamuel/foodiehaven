import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styled from "styled-components";
import useAboutFood from "../about/useAboutFood";
import Spinner from "../../ui/Spinner";
import { device } from "../../mediaSizes";

function DashboardPieChart() {
  const StyledDashboardPieChart = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 200px;
    @media ${device.laptop} {
      width: 30%;
      justify-content: flex-end;
      height: 250px;
      align-items: center;
    }
  `;

  const Colors = [
    "#a21caf",
    "#0088FE",
    "#00C49F",
    "#be123c",
    "#FFBB28",
    "#1e3a8a",
    "#FF8042",
  ];

  const renderColorfulLegendText = (value, entry) => {
    const { color } = entry;

    return <span style={{ color, fontSize: "12px" }}>{value}</span>;
  };
  const { aboutData: piecChartData, isLoadingAbout: IsLoadingPieChart } =
    useAboutFood();
  if (IsLoadingPieChart) return <Spinner />;
  const piecChart = piecChartData.map((data) => data.mealType).flat();

  const categories = [
    "Beverage",
    "Appetizer",
    "Side Dish",
    "Snack",
    "Lunch",
    "Dinner",
    "Breakfast",
  ];

  const data = categories
    .map((category) => piecChart.filter((data) => data === category))
    .map((data) => {
      return { name: data.at(0), value: data.length * 100 };
    });
  return (
    <StyledDashboardPieChart>
      <ResponsiveContainer width="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={85}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={Colors[index % Colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="right"
            formatter={renderColorfulLegendText}
            iconSize={6}
            iconType="square"
            layout="vertical"
          />
        </PieChart>
      </ResponsiveContainer>
    </StyledDashboardPieChart>
  );
}

export default DashboardPieChart;
