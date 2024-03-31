import React, { ReactNode } from "react";
import { IssueBreadCrumbs } from "./issue-breadcrumb";

export default function IssuesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grow w-[25%]">
      <IssueBreadCrumbs />

      {children}
    </div>
  );
}
