import data from "@/data";
import { Folders } from "./folders";

export type Data = typeof data;

export const Directory = ({ onFileClick, selectedFile }: { onFileClick: (id: string) => void; selectedFile: string | null }) => {
  return (
    <div className="grow w-[25%]">
      <Folders folders={data} onFileClick={onFileClick} selectedFile={selectedFile} />
    </div>
  );
};
