import React, { useState } from "react";
import Main from "./components/main/Main";

import Sidebar from "./components/sidebar/Sidebar";
const Dashboard = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <>
      <div className="container">
        {/*  <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> */}
        <Main />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
    </>
  );
};

export default Dashboard;
