import { Circle } from "@/components/circle";
import { issuesCount } from "@/issues";
import React from "react";
import FlagButton from "./flag-button.svg";
import InfoIcon from "./info-icon.svg";

export default function IssueId({ params }: { params: { issueId: string; slug: string } }) {
  const foundIssueType = issuesCount.find((issue) => issue.slug === params.slug);
  const foundIssue = foundIssueType?.items.find((item) => item.slug === params.issueId);

  return (
    <div>
      <div className="bg-[#191D23] rounded py-3 px-5 flex mb-3 gap-2 ">
        <div className="flex items-center justify-start gap-3 ">
          <Circle color={foundIssueType?.color || "white"} />
        </div>
        <div className="flex justify-center items-center gap-4">
          <span className="text-[#AAAAAA] text-sm">
            #{foundIssue?.label}. {foundIssue?.description.substring(0, 30)}
          </span>
        </div>
      </div>

      <section className="p-3 bg-[#191D23] rounded ">
        <div className="flex flex-col gap-4 text-sm border-b border-solid border-white/10 max-h-[49vh] overflow-scroll">
          <div className="mb-2">
            <span className="text-[#007AFF]">Description:</span>

            <p className="text-[#CCCCCC]">{foundIssue?.description}</p>
          </div>

          <div className="mb-2">
            <span className="text-[#007AFF]">Remediation:</span>

            <p className="text-[#CCCCCC]">{foundIssue?.remediation}</p>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-3">
          <button className="bg-[#007AFF] py-2 px-6 rounded text-center text-white">Auto Fix Code</button>
          <button>
            <FlagButton />
          </button>
        </div>
      </section>

      <div className="flex text-xs gap-1 items-center mt-2">
        <InfoIcon />
        Changes done in the code can be undone.
      </div>
    </div>
  );
}
