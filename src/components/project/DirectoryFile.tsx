import React from "react";
import Image from "next/image";
import { Data } from "./directory";

export const DirectoryFile = ({
  isSelectedFile,
  folders,
  onFileClick,
}: {
  isSelectedFile: boolean;
  folders: Data;
  onFileClick: (id: string) => void;
}) => {
  return (
    <div
      className={`flex gap-2 mt-2  py-2 ${isSelectedFile ? "text-selectedTextColor bg-selectedTextColor/10" : "text-white"}`}
      onClick={() => onFileClick(folders.id)}
    >
      <Image src={isSelectedFile ? "/selected-file.svg" : "/unselected-file.svg"} alt="arrow" width={12} height={16} />

      {folders.name}
    </div>
  );
};
