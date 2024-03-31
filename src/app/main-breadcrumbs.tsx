"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

export const MainBreadCrumbs = () => {
  const pathname = usePathname();

  const crumbs = useMemo(() => {
    let currentLink = "";
    return pathname
      .split("/")
      .filter((crumb) => crumb !== "")
      .map((crumb) => {
        currentLink += `/${crumb}`;
        return {
          label: crumb
            .split("-")
            .map((c) => c[0]?.toUpperCase() + c.slice(1))
            .join(" "),
          link: currentLink,
        };
      });
  }, [pathname]);

  return <Breadcrumbs crumbs={crumbs.slice(0, 3)} />;
};
