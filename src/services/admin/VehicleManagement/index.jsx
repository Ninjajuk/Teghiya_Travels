import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import VehicleManagement from "./VehicleManagement";
import VehicleManagement1 from "./VehicleManagement1";

const VehicleManagementDashboard = () => {
  return (
    <DefaultLayout>
      <VehicleManagement />
      {/* <VehicleManagement1 /> */}
    </DefaultLayout>
  );
};

export default VehicleManagementDashboard;