import styled from "styled-components";
import DashboardOverall from "../features/dashboard/DashboardOverall";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiVanDuotone } from "react-icons/pi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import DashboardPieChart from "../features/dashboard/DashboardPieChart";
import DashboardAreaChart from "../features/dashboard/DashboardAreaChart";
import { device } from "../mediaSizes";
import DashboardTrendingRecipe from "../features/dashboard/trendrecipies/DashboardTrendingRecipe";

import DashboardSlide from "../features/dashboard/DashboardSlide";

function Dashboard() {
  const StyledDashboard = styled.div``;
  const Header = styled.header`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    padding: 0 0px 0 0;
    gap: 20px;
    width: 100%;
    /* & div {
      width: 10%;
    } */
    @media ${device.laptop} {
      flex-direction: row;
      justify-content: space-evenly;
    }
  `;
  const Overall = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 5px;
    margin: 30px 0;
    @media ${device.tablet} {
      gap: 40px;
    }
    @media ${device.laptop} {
      gap: 50px;
    }
  `;

  return (
    <StyledDashboard>
      <Header>
        <DashboardSlide />
        <DashboardPieChart />
      </Header>
      <Overall>
        <DashboardOverall
          title="TOTAL REVENUE"
          svg={<RiMoneyDollarCircleLine />}
          value="12k"
        />
        <DashboardOverall
          title="TOTAL DELIVERY"
          svg={<PiVanDuotone />}
          value="875"
        />
        <DashboardOverall
          title="TOTAL CLIENTS"
          svg={<FaUsers />}
          value="1.2k"
        />
        <DashboardOverall
          title="TOTAL ORDERS"
          svg={<LuFileSpreadsheet />}
          value="936"
        />
      </Overall>
      <DashboardAreaChart />
      <DashboardTrendingRecipe />
    </StyledDashboard>
  );
}

export default Dashboard;
