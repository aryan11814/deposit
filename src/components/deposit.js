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
    <div className="deposit-container flex h-screen">
      <Side>
        <h2 
          onClick={handleDepositClick} 
          className="flex items-center justify-center gap-2 cursor-pointer p-1 rounded-lg text-black hover:bg-gray-400 hover:shadow-lg transition duration-300 ease-in-out"
        >
          <CurrencyExchangeIcon className="text-2xl" />
          <span className="font-semibold text-lg">Deposit</span>
        </h2>
      </Side>

      <div className="flex-1 flex flex-col ml-64">
        <header className="bg-gray-200 text-gray-800 p-4 flex gap-4 justify-around">
          <button
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              activeTab === "inProgress"
                ? "bg-gray-400 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => setActiveTab("inProgress")}
          >
            <RefreshIcon />
            <span>In Progress</span>
          </button>
          <button
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              activeTab === "completed"
                ? "bg-gray-400 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => setActiveTab("completed")}
          >
            <AddTaskIcon />
            <span>Completed</span>
          </button>
          <button
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              activeTab === "dropped"
                ? "bg-gray-400 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => setActiveTab("dropped")}
          >
            <DeleteOutlineIcon />
            <span>Dropped</span>
          </button>
          <button
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              activeTab === "all"
                ? "bg-gray-400 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => setActiveTab("all")}
          >
            <LanguageIcon />
            <span>All</span>
          </button>
        </header>

        <main className="flex-1 p-6 bg-gray-100">
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
