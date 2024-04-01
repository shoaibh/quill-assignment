import { ProjectHeader } from "@/components/project/project-header";
import React, { ReactNode, Suspense } from "react";

export default function ProjectLayout({ children, ide, issues }: { children: ReactNode; ide: ReactNode; issues: ReactNode }) {
  return (
    <Suspense>
      <div className=" flex flex-col flex-1 bg-[#191D23] px-4 py-3 rounded max-h-[max-content] overflow-scroll">
        <ProjectHeader />
        {children}
        <div className="flex mt-3 gap-3 max-w-full flex-1">
          {ide}
          {issues}
        </div>
      </div>
    </Suspense>
  );
}
