"use client";

import { Circle } from "@/components/circle";
import { HorizontalLine } from "@/components/horizontal-line";
import { VerticalLine } from "@/components/vertical-line";
import { issuesCount } from "@/issues";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import Arrow from "../Arrow.svg";

export default function HigherIssues({ params }: { params: { slug: string } }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const newParams = new URLSearchParams(searchParams);

  const foundIssue = issuesCount.find((issue) => issue.slug === params.slug);

  return (
    <div>
      <div className="bg-[#191D23] rounded py-3 px-5 flex gap-2 issue-list">
        <div className="flex items-center justify-start ml-3 gap-3 grow  basis-3/6">
          <Circle color={foundIssue?.color || "white"} />
          <span className="text-3xl">{foundIssue?.count}</span>
        </div>
        <VerticalLine />
        <div className="grow basis-3/6 flex justify-center items-center gap-4">
          <span className="text-[#AAAAAA] text-sm">{foundIssue?.label || "issue"}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-[25px]">
        <span className="text-sm text-[#EEEEEE]">List of Issues</span>
        <HorizontalLine marginBottom={0} />
        <div className="flex flex-col gap-2">
          {foundIssue?.items.map((issue) => (
            <Link href={`${pathname}/${issue.slug}?${newParams.toString()}`}>
              <div key={issue.slug} className="bg-[#191D23] rounded py-3 px-5 flex gap-2 issue-list">
                <div className="flex items-center justify-start grow gap-3 ">
                  <span className="text-sm text-secondaryTextColor">
                    #{issue.label}. {issue.description.substring(0, 30)}
                  </span>
                </div>
                <VerticalLine />

                <div className="flex items-center ml-[10px] ">
                  <Arrow />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
