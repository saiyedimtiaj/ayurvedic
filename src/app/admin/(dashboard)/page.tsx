import DashboardStatistics from "@/components/DashboardStatistics";
import OrdersPage from "@/components/Order";
import React from "react";

const page = () => {
  return (
    <div>
      <DashboardStatistics />
      <OrdersPage />
    </div>
  );
};

export default page;
