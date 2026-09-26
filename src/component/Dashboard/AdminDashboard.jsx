import { useState } from "react";
import Sidebar from "./sidebar.jsx";

const AdminDashboard = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={`grid min-h-screen transition-all duration-300 ${
        sidebarOpen
          ? "grid-cols-[240px_minmax(0,1fr)]"
          : "grid-cols-[72px_minmax(0,1fr)]"
      }`}
    >

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />


      <main className="min-w-0 p-6 bg-[#f5f3eb]">

        <h1 className="text-2xl font-bold">
          Good evening, Talha
        </h1>

        <p className="text-gray-500 mt-1">
          Here is the control-room picture for today.
        </p>

      </main>

    </div>
  );
};

export default AdminDashboard;