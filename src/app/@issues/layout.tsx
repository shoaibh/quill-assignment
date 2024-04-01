import React, { ReactNode } from "react";
import { IssueBreadCrumbs } from "./issue-breadcrumb";
import { HorizontalLine } from "@/components/horizontal-line";

export default function IssuesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-[25%] min-w-[25%] bg-[#13161A] px-4 py-3 rounded">
      <IssueBreadCrumbs />
      <HorizontalLine />
      {children}
    </div>
  );
}
