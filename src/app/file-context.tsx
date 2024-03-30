"use client";

import data from "@/data";
import { createContext, useContext, useEffect, useState } from "react";

type FileData = { name: string; path: string; isOpened: boolean };

export type Data = typeof data;

export interface FileContextData {
  readonly openedFiles: Data[];
  readonly selectedFile: Data;
  setOpenedFiles?: any;
  setSelectedFile?: (selectedFile: Data) => void;
}

const FileContext = createContext<FileContextData>({ openedFiles: [], selectedFile: {} as Data });

export const useFileContext = () => {
  return useContext(FileContext);
};

export const FileContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [openedFiles, setOpenedFiles] = useState([]);

  const [selectedFile, setSelectedFile] = useState({} as Data);

  return <FileContext.Provider value={{ openedFiles, setOpenedFiles, selectedFile, setSelectedFile }}>{children}</FileContext.Provider>;
};
