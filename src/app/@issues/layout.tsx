"use client";

import React, { ReactNode } from "react";
import { IssueBreadCrumbs } from "./issue-breadcrumb";
import { HorizontalLine } from "@/components/horizontal-line";
import { useFileContext } from "../file-context";

export default function IssuesLayout({ children }: { children: ReactNode }) {
  const { rightCollapsed } = useFileContext();
  return (
    <div
      className={`w-[25%] min-w-[25%] bg-[#13161A] px-4 py-3 rounded transition-transform duration-500 ease-in-out transform ${
        rightCollapsed ? "overflow-hidden min-w-0 w-0 px-0 py-0 h-0  translate-x-full" : ""
      } `}
    >
      <IssueBreadCrumbs />
      <HorizontalLine />
      {children}
    </div>
  );
}
