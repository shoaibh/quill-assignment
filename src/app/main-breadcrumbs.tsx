"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { usePathname } from "next/navigation";
import React, { Suspense, useMemo } from "react";

export const MainBreadCrumbs = () => {
  const pathname = usePathname();

  const crumbs = useMemo(() => {
    return "ai-audit/my-project/code-editor"
      .split("/")
      .filter((crumb) => crumb !== "")
      .map((crumb) => {
        return {
          label: crumb
            .split("-")
            .map((c) => c[0]?.toUpperCase() + c.slice(1))
            .join(" "),
          link: "/",
        };
      });
  }, [pathname]);

  return (
    <Suspense>
      <Breadcrumbs crumbs={crumbs.slice(0, 3)} />
    </Suspense>
  );
};
