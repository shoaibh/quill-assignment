"use client";

import { Suspense } from "react";
import { IdeCommon } from "./ideDefault";

export default function IDEDefault() {
  return (
    <Suspense>
      <IdeCommon />
    </Suspense>
  );
}
