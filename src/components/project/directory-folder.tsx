import Image from "next/image";
import UnSelectedArrow from "./unselected-arrow.svg";
import UnSelectedFolder from "./unselected-folder.svg";

export const DirectoryFolder = ({ onClick, expand, name }: { onClick: () => void; expand: boolean; name: string }) => {
  return (
    <div
      onClick={onClick}
      className={`flex folder gap-2 cursor-pointer items-center text-sm ${expand ? "text-selectedTextColor selected" : "text-white"}`}
    >
      <UnSelectedArrow className={`${expand ? "selected" : ""}`} />

      {expand && <Image src={"/selected-folder.svg"} alt="arrow" width={16} height={14} />}

      {!expand && <UnSelectedFolder />}

      {name}
    </div>
  );
};
