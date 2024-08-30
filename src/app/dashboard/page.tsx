// pages/index.js
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import SummarySection from "../components/SummarySection";

const Dashboard = () => {
  return (
    <>
      <DashboardCard
        title="Sale"
        amount="Rs 2,000.00"
        description="Total Sale (Aug)"
        growth={0}
        icon={undefined}
      />
      <DashboardCard
        title="Expenses"
        amount="Rs 50.00"
        description="This Month"
        icon={undefined}
        growth={undefined}
      />
      <DashboardCard
        title="You'll Receive"
        amount="Rs 00.00"
        description="Pending Receivables"
        icon={undefined}
        growth={undefined}
      />
      <DashboardCard
        title="You'll Pay"
        amount="Rs 10.00"
        description="Ali Seth"
        growth={-10}
        icon={undefined}
      />
      <DashboardCard
        title="Purchase"
        amount="Rs 1,010.00"
        description="Seraya, Loha"
        growth={1000}
        icon={undefined}
      />
      <SummarySection />
    </>
  );
};

export default Dashboard;
