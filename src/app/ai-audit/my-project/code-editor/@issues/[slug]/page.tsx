"use client";

import { issuesCount } from "@/issues";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function HigherIssues({ params }: { params: { slug: string } }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const newParams = new URLSearchParams(searchParams);

  const foundIssue = issuesCount.find((issue) => issue.slug === params.slug);

  return (
    <div>
      <div className="p-3 flex justify-between">
        <div>{foundIssue?.count}</div>
        <div>{foundIssue?.label}</div>
      </div>
      <div>
        {foundIssue?.items.map((issue) => (
          <Link href={`${pathname}/${issue.slug}?${newParams.toString()}`}>
            <div key={issue.slug}>
              {issue.label}. {issue.description.substring(0, 100)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
