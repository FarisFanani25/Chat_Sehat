import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content" style={{ marginLeft: "250px", padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
