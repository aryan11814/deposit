import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

const MainComponent = ({ activeTab }) => {
    const data = [
        { id: 1, status: "inProgress", name: "Task 1", description: "In Progress Task" },
        { id: 2, status: "completed", name: "Task 2", description: "Completed Task" },
        { id: 3, status: "dropped", name: "Task 3", description: "Dropped Task" },
        { id: 4, status: "inProgress", name: "Task 4", description: "Another In Progress Task" },
        { id: 5, status: "completed", name: "Task 5", description: "Another Completed Task" },
        { id: 6, status: "dropped", name: "Task 6", description: "Another Dropped Task" },
        { id: 7, status: "inProgress", name: "Task 7", description: "Yet Another In Progress Task" },
        { id: 8, status: "completed", name: "Task 8", description: "Yet Another Completed Task" },
        { id: 9, status: "dropped", name: "Task 9", description: "Yet Another Dropped Task" },
        { id: 10, status: "inProgress", name: "Task 10", description: "New In Progress Task" },
        { id: 11, status: "completed", name: "Task 11", description: "New Completed Task" },
        { id: 12, status: "dropped", name: "Task 12", description: "New Dropped Task" },
        { id: 13, status: "inProgress", name: "Task 13", description: "Another Task In Progress" },
        { id: 14, status: "completed", name: "Task 14", description: "Another Task Completed" },
        { id: 15, status: "dropped", name: "Task 15", description: "Another Task Dropped" },
        { id: 16, status: "inProgress", name: "Task 16", description: "Yet Another In Progress Task" },
        { id: 17, status: "completed", name: "Task 17", description: "Yet Another Completed Task" },
        { id: 18, status: "dropped", name: "Task 18", description: "Yet Another Dropped Task" },
        { id: 19, status: "inProgress", name: "Task 19", description: "Fresh In Progress Task" },
        { id: 20, status: "completed", name: "Task 20", description: "Fresh Completed Task" },
        { id: 21, status: "dropped", name: "Task 21", description: "Fresh Dropped Task" },
        { id: 22, status: "inProgress", name: "Task 22", description: "Ongoing In Progress Task" },
        { id: 23, status: "completed", name: "Task 23", description: "Ongoing Completed Task" },
        { id: 24, status: "dropped", name: "Task 24", description: "Ongoing Dropped Task" },
        { id: 25, status: "inProgress", name: "Task 25", description: "Newly In Progress Task" },
        { id: 26, status: "completed", name: "Task 26", description: "Newly Completed Task" },
        { id: 27, status: "dropped", name: "Task 27", description: "Newly Dropped Task" },
        { id: 28, status: "inProgress", name: "Task 28", description: "Another In Progress Task" },
        { id: 29, status: "completed", name: "Task 29", description: "Another Completed Task" },
        { id: 30, status: "dropped", name: "Task 30", description: "Another Dropped Task" },
      ];
  const filteredData = data.filter(
    (item) => activeTab === "all" || item.status === activeTab
  );

  const statusIcons = {
    completed: <CheckCircleIcon className="text-green-600" />,
    dropped: <HighlightOffIcon className="text-red-600" />,
    inProgress: <HourglassEmptyIcon className="text-blue-600" />,
  };

  return (
    <div className="main-component bg-white p-6">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-400 text-white">
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                } hover:bg-gray-200`}
              >
                <td className="border border-gray-300 px-4 py-2 text-left">
                  {item.id}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-left">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-left">
                  {item.description}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-left flex items-center gap-2">
                  {statusIcons[item.status]}
                  <span className="capitalize">{item.status}</span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="border border-gray-300 px-4 py-2 text-left"
                colSpan="4"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MainComponent;
