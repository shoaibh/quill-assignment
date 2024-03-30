"use client";

import { useFileContext } from "@/app/file-context";
import { Data, Directory } from "@/components/project/directory";
import { Editor } from "@/components/project/editor";
import data from "@/data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const findFile = (data: Data, id: string): Data | null => {
  if (data.id === id && !data.isFolder) {
    return data;
  }
  if (data.isFolder && data.items.length > 0) {
    for (const item of data.items) {
      const foundFile = findFile(item, id);
      if (foundFile) {
        return foundFile;
      }
    }
  }
  return null;
};

export const IDE = () => {
  const searchParams = useSearchParams();

  const file = searchParams.get("file");

  const router = useRouter();

  const pathname = usePathname();

  const onFileClick = (id: string) => {
    router.push(`${pathname}?file=${encodeURIComponent(id)}`);
  };

  const { setSelectedFile, selectedFile, setOpenedFiles } = useFileContext();

  useEffect(() => {
    if (file) {
      const fileData = findFile(data, file);
      if (fileData) {
        setSelectedFile?.(fileData);
        setOpenedFiles?.((openedFiles: any) => {
          if (openedFiles?.every((openedFile: any) => openedFile.id !== fileData.id)) {
            return [fileData, ...openedFiles.filter((openedFile: any) => openedFile.id !== fileData.id)];
          }
          return openedFiles;
        });
      }
    }
  }, [file]);

  return (
    <>
      <Directory onFileClick={onFileClick} selectedFile={selectedFile.path} />
      <Editor onFileClick={onFileClick} />
    </>
  );
};
