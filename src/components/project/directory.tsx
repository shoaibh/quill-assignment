import data from "@/data";
import { Folders } from "./folders";
import { HorizontalLine } from "../horizontal-line";

export type Data = typeof data;

export const Directory = ({ onFileClick, selectedFile }: { onFileClick: (id: string) => void; selectedFile: string | null }) => {
  return (
    <div className="grow w-[25%] bg-[#13161A] px-4 py-3 rounded">
      <h3 className=" text-secondaryTextColor mb-2">Folders & Files</h3>
      <HorizontalLine />
      <Folders folders={data} onFileClick={onFileClick} selectedFile={selectedFile} />
    </div>
  );
};
