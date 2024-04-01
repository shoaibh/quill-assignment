import { useFileContext } from "@/app/file-context";
import React from "react";
import CrossIcon from "./Cross.svg";

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
    <div className="flex text-sm bg-[#1E232B] overflow-scroll ">
      {openedFiles.map((file) => {
        const isSelected = file.id === selectedFile.id;
        return (
          <div
            className={`flex justify-between items-center pl-5 pr-4 py-2 bg-slate-900 text-slate-600 cursor-pointer ${
              isSelected ? "bg-[#007AFF] rounded-tl rounded-tr text-white" : "text-[#5D677D]"
            } hover:text-white  border-r border-solid border-white/5 whitespace-nowrap`}
            onClick={() => onFileClick(file.id)}
            key={file.id}
          >
            {file.name}

            <span onClick={(e) => onRemove(e, file.id)} className="ml-5 p-1 cross-icon">
              <CrossIcon />
            </span>
          </div>
        );
      })}
    </div>
  );
};
