import React from "react";

const Side = ({ children }) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b p-4 shadow-lg">
      {children}
    </aside>
  );
};

export default Side;
