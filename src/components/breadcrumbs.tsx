"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const Breadcrumbs = ({
  crumbs,
}: {
  crumbs: {
    label: string;
    link: string;
  }[];
}) => {
  const searchParams = useSearchParams();

  const file = searchParams.get("file");

  return (
    <div>
      {crumbs.map((crumb) => (
        <span key={crumb.link}>
          / <Link href={`${crumb.link}?file=${file}`}>{crumb.label} </Link>
        </span>
      ))}
    </div>
  );
};
