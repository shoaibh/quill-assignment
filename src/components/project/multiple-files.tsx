import { useFileContext } from "@/app/file-context";
import React from "react";

export const MultipleFiles = ({ onFileClick }: { onFileClick: (id: string) => void }) => {
  const { openedFiles, selectedFile, setOpenedFiles, setSelectedFile } = useFileContext();

  const onRemove = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: string) => {
    e.stopPropagation();
    setOpenedFiles((openedFiles: any) => {
      const newFiles = [...openedFiles.filter((openedFile: any) => openedFile.id !== id)];
      if (id === selectedFile.id) {
        setSelectedFile?.(newFiles[0]);
      }
      return newFiles;
    });
  };

  return (
    <div className="flex gap-2">
      {openedFiles.map((file) => (
        <div
          className="px-5 py-2 bg-slate-900 text-slate-600 cursor-pointer"
          style={{ backgroundColor: file.id === selectedFile.id ? "#007AFF" : "", color: "white" }}
          onClick={() => onFileClick(file.id)}
          key={file.id}
        >
          {file.name}

          <span onClick={(e) => onRemove(e, file.id)} className="ml-4">
            X
          </span>
        </div>
      ))}
    </div>
  );
};
