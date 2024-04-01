"use client";

import { Circle } from "@/components/circle";
import { VerticalLine } from "@/components/vertical-line";
import { issuesCount } from "@/issues";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Arrow from "./Arrow.svg";

export const IssueList = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  return (
    <div className="flex flex-col gap-2 mt-5">
      {issuesCount.map((issues) => (
        <Link href={`${issues.slug}?${params.toString()}`} key={issues.slug}>
          <div className="bg-[#191D23] rounded py-3 px-5 flex gap-2 issue-list">
            <div className="flex items-center justify-start ml-3 gap-3 grow  basis-2/6">
              <Circle color={issues.color} />
              <span className="text-3xl">{issues.count}</span>
            </div>
            <VerticalLine />
            <div className="grow basis-4/6 flex justify-between items-center gap-4">
              <span className="text-[#AAAAAA] text-sm">{issues.label}</span>

              <Arrow />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
