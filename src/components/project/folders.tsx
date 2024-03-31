"use client";

import { useEffect, useState } from "react";
import { Data } from "./directory";
import Image from "next/image";
import { DirectoryFile } from "./DirectoryFile";

type Props = {
  folders: Data;
  onFileClick: (id: string) => void;
  selectedFile: string | null;
};

export const Folders = ({ folders, onFileClick, selectedFile }: Props) => {
  const [expand, setExpand] = useState(false);

  const inSelectedPath = selectedFile?.includes(folders.path);

  useEffect(() => {
    setExpand((expand) => (!!inSelectedPath ? true : expand));
  }, [inSelectedPath]);

  const isSelectedFile = selectedFile === folders.path;

  if (folders.isFolder) {
    return (
      <div className="mt-4 ml-[-16px] pl-4">
        <div onClick={() => setExpand(!expand)} className="flex cursor-pointer">
          <div className={`flex gap-2 items-center text-sm ${expand ? "text-selectedTextColor" : "text-white"}`}>
            <Image
              src={expand ? "/selected-arrow.svg" : "/unselected-arrow.svg"}
              alt="arrow"
              width={expand ? 10 : 6}
              height={expand ? 6 : 10}
            />
            <Image src={expand ? "/selected-folder.svg" : "/unselected-folder.svg"} alt="arrow" width={16} height={14} />

            {folders.name}
          </div>
        </div>

        <div style={{ display: expand ? "flex" : "none", paddingLeft: 36, marginLeft: -16 }} className="flex-col cursor-pointer">
          {folders.items.map((exp) => {
            return <Folders key={exp.id} folders={exp} onFileClick={onFileClick} selectedFile={selectedFile} />;
          })}
        </div>
      </div>
    );
  } else {
    return <DirectoryFile onFileClick={onFileClick} folders={folders} isSelectedFile={isSelectedFile} />;
  }
};
