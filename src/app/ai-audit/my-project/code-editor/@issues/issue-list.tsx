"use client";

import React from "react";
import { issuesCount } from "@/issues";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export const IssueList = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  return (
    <div>
      {issuesCount.map((issues) => (
        <Link href={`${pathname}/${issues.slug}?${params.toString()}`} key={issues.slug}>
          <div>
            <span>{issues.count}</span>
            <span>{issues.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
