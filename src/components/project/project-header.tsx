import React from "react";

export const ProjectHeader = () => {
  return (
    <div className="flex justify-between p-4">
      <h2>Sample Project</h2>
      <div className="flex">
        <button>Audit Now</button>
        <button>Options</button>
      </div>
    </div>
  );
};
