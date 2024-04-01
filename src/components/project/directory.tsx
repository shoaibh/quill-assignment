import data from "@/data";
import { Folders } from "./folders";
import { HorizontalLine } from "../horizontal-line";
import { useFileContext } from "@/app/file-context";

export type Data = typeof data;

export const Directory = ({ onFileClick, selectedFile }: { onFileClick: (id: string) => void; selectedFile: string | null }) => {
  const { leftCollapsed } = useFileContext();

  return (
    <div
      className={`w-[25%] min-w-[25%] bg-[#13161A] px-4 py-3 rounded transition-transform duration-500 ease-in-out transform ${
        leftCollapsed ? "overflow-hidden min-w-0 w-0 px-0 py-0 h-0 -translate-x-full" : ""
      } `}
      style={{ width: leftCollapsed ? 0 : "25%", minWidth: leftCollapsed ? 0 : "25%", padding: leftCollapsed ? 0 : "" }}
    >
      <h3 className=" text-secondaryTextColor mb-2">Folders & Files</h3>
      <HorizontalLine />
      <Folders folders={data} onFileClick={onFileClick} selectedFile={selectedFile} />
    </div>
  );
};
