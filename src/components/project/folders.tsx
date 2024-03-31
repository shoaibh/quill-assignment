"use client";

import { useEffect, useState } from "react";
import { Data } from "./directory";
import Image from "next/image";
import { DirectoryFile } from "./DirectoryFile";
import { DirectoryFolder } from "./directory-folder";

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
        <DirectoryFolder onClick={() => setExpand(!expand)} expand={expand} name={folders.name} />

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
