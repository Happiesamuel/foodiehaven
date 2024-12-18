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
import Discount from "../features/dashboard/discount/Discount";
import { useEffect } from "react";

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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 30px 0;
    @media ${device.tablet} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    /* display: flex;
    justify-content: space-evenly;
    gap: 5px;
    
  
    @media ${device.laptop} {
      gap: 50px;
    } */
  `;
  useEffect(function () {
    document.title = "Dashboard";
    return () => (document.title = "Foodie Haven");
  }, []);
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
      <Discount />

      <DashboardTrendingRecipe />
    </StyledDashboard>
  );
}

export default Dashboard;
