import Link from "next/link";
import React, { Suspense } from "react";
import { IssueBreadCrumbs } from "./issue-breadcrumb";
import { IssuesTab } from "@/components/issues-tab";
import { IssueList } from "./issue-list";

export default function Issues() {
  return (
    <Suspense>
      <div>
        <IssuesTab />
        <IssueList />
      </div>
    </Suspense>
  );
}
