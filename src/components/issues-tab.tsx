import React from "react";

export const IssuesTab = () => {
  return (
    <div className="flex bg-[#1E232B] rounded p-1 w-full">
      <button className="bg-[#007AFF] py-2 rounded text-center grow text-white">Current File</button>
      <button className="py-2 grow text-[#5D677D]  hover:text-white ">Full Project</button>
    </div>
  );
};
