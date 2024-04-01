import React from "react";
import ProjectIcon from "./project-icon.svg";
import { Circle } from "../circle";

export const ProjectHeader = () => {
  return (
    <div className="flex justify-between">
      <h2 className="flex gap-2 items-center text-2xl">
        <ProjectIcon /> Sample Project
      </h2>
      <div className="flex gap-2">
        <button className="bg-[#007AFF] py-2 px-8 rounded text-center grow text-sm text-white">Audit Now</button>
        <button className="bg-[#007AFF] bg-opacity-15 text-[#007AFF] py-2 px-8 rounded text-center grow text-sm relative hover:bg-opacity-45">
          {" "}
          <span className="absolute right-0 top-0">
            <Circle color="#FF6F50" />
          </span>{" "}
          Options
        </button>
      </div>
    </div>
  );
};
