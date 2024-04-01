import React from "react";

export const Circle = ({ color }: { color: string }) => {
  return <div className="rounded-full w-[10px] h-[10px] " style={{ backgroundColor: color }} />;
};
