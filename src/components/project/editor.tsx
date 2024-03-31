"use client";

import React, { useEffect, useRef, useState } from "react";
import { Editor as MonacoEditor, EditorProps } from "@monaco-editor/react";
import { MultipleFiles } from "./multiple-files";
import { useFileContext } from "@/app/file-context";

export const Editor = ({ onFileClick }: { onFileClick: (id: string) => void }) => {
  const editorRef = useRef();

  const [value, setValue] = useState<string | undefined>("Hello");
  const { selectedFile } = useFileContext();

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
    <div className="max-w-[50%] rounded">
      <MultipleFiles onFileClick={onFileClick} />
      <MonacoEditor
        options={{
          minimap: {
            enabled: false,
          },
        }}
        height="75vh"
        theme="vs-dark"
        onMount={(editor) => onMount(editor)}
        value={value}
        onChange={(value) => setValue(value)}
        saveViewState
      />
    </div>
  );
};
