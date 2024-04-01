"use client";

import data from "@/data";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type FileData = { name: string; path: string; isOpened: boolean };

export type Data = typeof data;

export interface FileContextData {
  readonly openedFiles: Data[];
  readonly selectedFile: Data;
  setOpenedFiles?: any;
  setSelectedFile?: (selectedFile: Data) => void;
  leftCollapsed: boolean;
  rightCollapsed: boolean;
  setLeftCollapsed?: (leftCollapsed: boolean) => void;
  setRightCollapsed?: (rightCollapsed: boolean) => void;
  editorWidth: string;
}

const FileContext = createContext<FileContextData>({
  openedFiles: [
    {
      id: "634",
      name: "public_nested_dfile",
      isFolder: false,
      path: "/root/publadfic/public_nested_file",
      fileContentPath: "/file.txt",
      items: [],
      depth: 3,
    },
    {
      id: "33545",
      name: "exampdfssde 2",
      path: "/root/publadfic/public ne34sted 1/hello.html",
      isFolder: false,
      fileContentPath: "/exampleFile2.js",
      items: [],
      depth: 4,
    },
    {
      id: "4345",
      name: "example asdf1",
      isFolder: false,
      items: [],
      path: "/root/publadfic/public ne34sted 1/index.html",
      fileContentPath: "/exampleFile1.js",
      depth: 4,
    },
    {
      id: "8",
      name: "App.js",
      isFolder: false,
      path: "/root/src/App.js",
      fileContentPath: "/file.txt",
      items: [],
      depth: 3,
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      path: "/root/package.json",
      fileContentPath: "/file.txt",
      items: [],
      depth: 2,
    },
    {
      id: "5",
      name: "example 2",
      path: "/root/public/public nested 1/hello.html",
      isFolder: false,
      fileContentPath: "/exampleFile2.js",
      items: [],
      depth: 4,
    },
    {
      id: "4",
      name: "example 1",
      isFolder: false,
      items: [],
      path: "/root/public/public nested 1/index.html",
      fileContentPath: "/exampleFile1.js",
      depth: 4,
    },
    {
      id: "6",
      name: "public_nested_file",
      isFolder: false,
      path: "/root/public/public_nested_file",
      fileContentPath: "/file.txt",
      items: [],
      depth: 3,
    },
  ],
  selectedFile: {} as Data,
  leftCollapsed: false,
  rightCollapsed: false,
  editorWidth: "48.6%",
});

export const useFileContext = () => {
  return useContext(FileContext);
};

export const FileContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [openedFiles, setOpenedFiles] = useState([]);

  const [selectedFile, setSelectedFile] = useState({} as Data);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  const editorWidth = useMemo(() => {
    if (leftCollapsed && rightCollapsed) return "98.6%";

    if (leftCollapsed || rightCollapsed) return "73.6%";

    return "48.6%";
  }, [leftCollapsed, rightCollapsed]);

  return (
    <FileContext.Provider
      value={{
        openedFiles,
        setOpenedFiles,
        selectedFile,
        setSelectedFile,
        leftCollapsed,
        rightCollapsed,
        setLeftCollapsed,
        setRightCollapsed,
        editorWidth,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};
