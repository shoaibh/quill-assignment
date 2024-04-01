"use client";

import React, { useEffect, useRef, useState } from "react";
import { Editor as MonacoEditor, EditorProps } from "@monaco-editor/react";
import { MultipleFiles } from "./multiple-files";
import { useFileContext } from "@/app/file-context";
import CollapseLeft from "@/app/collapse-left.svg";
import CollapseRight from "@/app/collapse-right.svg";

export const Editor = ({ onFileClick }: { onFileClick: (id: string) => void }) => {
  const editorRef = useRef();

  const [value, setValue] = useState<string | undefined>("Hello");
  const { selectedFile, leftCollapsed, rightCollapsed, setLeftCollapsed, setRightCollapsed, editorWidth } = useFileContext();

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  useEffect(() => {
    const fetchTextFile = async () => {
      try {
        const response = await fetch(selectedFile.fileContentPath);

        if (!response.ok) {
          throw new Error("Failed to fetch the file");
        }

        const text = await response.text();

        setValue(text);
      } catch (error) {
        console.error("Error fetching text file:", error);
      }
    };
    if (selectedFile && Object.keys(selectedFile).length > 0) {
      fetchTextFile();
    }
  }, [selectedFile]);

  return (
    <div
      className={`rounded relative ${editorWidth === "98.6%" ? "flex-1 gap-0" : ""}`}
      style={{ maxWidth: editorWidth === "98.6%" ? "100%" : editorWidth, width: editorWidth === "98.6%" ? "100%" : editorWidth }}
    >
      <MultipleFiles onFileClick={onFileClick} />
      <MonacoEditor
        options={{
          minimap: {
            enabled: false,
          },
        }}
        height={"93%"}
        theme="vs-dark"
        onMount={(editor) => onMount(editor)}
        value={value}
        onChange={(value) => setValue(value)}
        saveViewState
        className="max-h-[73vh]"
      />

      <div className="absolute left-[-10px] bottom-[100px] cursor-pointer" onClick={() => setLeftCollapsed?.(!leftCollapsed)}>
        {leftCollapsed ? <CollapseRight /> : <CollapseLeft />}
      </div>

      <div className="absolute right-[-10px] bottom-[100px] cursor-pointer" onClick={() => setRightCollapsed?.(!rightCollapsed)}>
        {rightCollapsed ? <CollapseLeft /> : <CollapseRight />}
      </div>
    </div>
  );
};
