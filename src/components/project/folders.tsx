"use client";

import { useEffect, useState } from "react";
import { Data } from "./directory";

type Props = {
  folders: Data;
  onFileClick: (id: string) => void;
  selectedFile: string | null;
};

export const Folders = ({ folders, onFileClick, selectedFile }: Props) => {
  const [expand, setExpand] = useState(false);

  const inSelectedPath = selectedFile?.includes(folders.path);

  console.log("==", { selectedFile, f: folders.path, inSelectedPath });
  useEffect(() => {
    setExpand((expand) => (!!inSelectedPath ? true : expand));
  }, [inSelectedPath]);

  const isSelectedFile = selectedFile === folders.path;

  if (folders.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div onClick={() => setExpand(!expand)} className="flex cursor-pointer" style={{ border: inSelectedPath ? "1px solid white" : "" }}>
          <span>📁 {folders.name}</span>
        </div>

        <div style={{ display: expand ? "flex" : "none", paddingLeft: 25 }} className="flex-col cursor-pointer">
          {folders.items.map((exp) => {
            return <Folders key={exp.id} folders={exp} onFileClick={onFileClick} selectedFile={selectedFile} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span className="file" style={{ border: isSelectedFile ? "1px solid white" : "" }} onClick={() => onFileClick(folders.id)}>
        📄 {folders.name}
      </span>
    );
  }
};
