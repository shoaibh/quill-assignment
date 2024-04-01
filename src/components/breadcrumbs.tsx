"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const Breadcrumbs = ({
  crumbs,
  cn = "",
}: {
  crumbs: {
    label: string;
    link: string;
  }[];
  cn?: string;
}) => {
  const searchParams = useSearchParams();

  const file = searchParams.get("file");

  return (
    <div className={`text-xs text-[#7B8191] flex items-center gap-2 ${cn}`}>
      {crumbs.map((crumb, index) => (
        <span key={crumb.link} className={`${index === crumbs.length - 1 ? "text-[#EEEEEE]" : ""}  hover:text-[#EEEEEE]`}>
          {index !== 0 && <>/</>}{" "}
          <Link href={`${crumb.link}?file=${file}`} className="ml-1">
            {crumb.label}{" "}
          </Link>
        </span>
      ))}
    </div>
  );
};
