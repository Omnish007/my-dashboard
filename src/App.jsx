import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

import "./index.css";

const App = () => {
  return (
    <div className="flex bg-[#151419]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
