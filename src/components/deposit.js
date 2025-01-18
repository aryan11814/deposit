import React, { useState, useEffect } from "react";
import MainComponent from "./table";
import Side from "./side";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LanguageIcon from "@mui/icons-material/Language";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const Deposit = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const handleDepositClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen">
 <Side className="w-1/5 px-4 py-2 rounded-l-full rounded-r-full flex items-center gap-2 bg-gradient-to-b from-gray-800 to-blue-600 text-white p-6 shadow-md flex flex-col justify-between fixed h-full">
  <h2 
    onClick={handleDepositClick} 
    className="flex items-center justify-center gap-2 cursor-pointer p-1 rounded-lg text-black hover:bg-gray-400 hover:shadow-lg transition duration-300 ease-in-out"
  >
    <CurrencyExchangeIcon className="text-2xl" />
    <span className="font-semibold text-lg">Deposit</span>
  </h2>
</Side>

<div className="flex-1 p-7 ml-64 bg-gray-100 ">
<header
  className="bg-gray-300 text-gray-800 p-0 m-0 flex rounded-l-full rounded-r-full"
  style={{ boxShadow: 'inset 5px -10px 10px -5px rgba(0, 0, 0, 0.2)' }}
>
    <div className="w-3/5 flex gap-4 justify-around">
      <button
        className={`w-1/4 py-2 px-3 rounded-l-full rounded-r-full flex items-center gap-2 ${
          activeTab === "inProgress"
            ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
            : "bg-transparent text-gray-800"
        }`}
        onClick={() => setActiveTab("inProgress")}
      >
        <RefreshIcon />
        <span>In Progress</span>
      </button>

      <button
        className={`w-1/4 px-4 py-2 rounded-l-full rounded-r-full flex items-center gap-2 ${
          activeTab === "completed"
            ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
            : "bg-transparent text-gray-800"
        }`}
        onClick={() => setActiveTab("completed")}
      >
        <AddTaskIcon />
        <span>Completed</span>
      </button>

      <button
        className={`w-1/4 px-4 py-2 rounded-l-full rounded-r-full flex items-center gap-2 ${
          activeTab === "dropped"
            ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
            : "bg-transparent text-gray-800"
        }`}
        onClick={() => setActiveTab("dropped")}
      >
        <DeleteOutlineIcon />
        <span>Dropped</span>
      </button>

      <button
        className={`w-1/4 px-4 py-2 rounded-l-full rounded-r-full flex items-center gap-2 ${
          activeTab === "all"
            ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
            : "bg-transparent text-gray-800"
        }`}
        onClick={() => setActiveTab("all")}
      >
        <LanguageIcon />
        <span>All</span>
      </button>
    </div>
  </header>

  <main className="flex-1 p-6">
    {isLoading ? (
      <div className="flex justify-center items-center h-full">
        <div className="border-t-4 border-blue-500 border-solid w-12 h-12 rounded-full animate-spin"></div>
      </div>
    ) : (
      <MainComponent activeTab={activeTab} />
    )}
  </main>
</div>

    </div>
  );
};

export default Deposit;
