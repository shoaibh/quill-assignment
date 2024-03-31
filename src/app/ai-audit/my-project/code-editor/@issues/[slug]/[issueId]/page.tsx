import { issuesCount } from "@/issues";
import React from "react";

export default function IssueId({ params }: { params: { issueId: string; slug: string } }) {
  const foundIssue = issuesCount.find((issue) => issue.slug === params.slug)?.items.find((item) => item.slug === params.issueId);

  return (
    <div>
      <div className="p-3 mb-4">
        {foundIssue?.label}. {foundIssue?.description.substring(0, 100)}
      </div>

      <div className="mb-4">
        <h3>Description</h3>
        <div>{foundIssue?.description}</div>
      </div>
      <div className="mb-4">
        <h3>Remediation</h3>
        <div>{foundIssue?.remediation}</div>
      </div>
    </div>
  );
}
