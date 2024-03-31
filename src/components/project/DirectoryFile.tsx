import React, { useState } from "react";
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
  const depthMargin = 16 + (folders.depth - 1) * 20;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex gap-2 mt-2 mr-[-16px] text-sm py-2 hover:text-selectedTextColor ${
        isSelectedFile ? `text-selectedTextColor bg-selectedTextColor/10` : "text-white"
      } `}
      onClick={() => onFileClick(folders.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ marginLeft: `-${depthMargin}px`, paddingLeft: `${depthMargin}px` }}
    >
      <Image src={isSelectedFile || isHovered ? "/selected-file.svg" : "/unselected-file.svg"} alt="arrow" width={12} height={16} />

      {folders.name}
    </div>
  );
};
