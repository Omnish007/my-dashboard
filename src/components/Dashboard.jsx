import React from "react";
import ActivityChart from "./ActivityChart";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";
import InfoCards from "./InfoCards";
import NetProfit from "./NetProfit";
import QuickLinks from "./QuickLinks";

const Dashboard = () => {
  return (
    <div className="px-5 py-2">
      <div className="grid gap-4 grid-cols-12">
        <div className="col-span-12 mb-4">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <InfoCards />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <NetProfit />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <ActivityChart />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <QuickLinks />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <RecentOrders />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
