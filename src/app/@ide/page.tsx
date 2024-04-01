import { Suspense } from "react";
import { IdeCommon } from "./ideDefault";

export default function IDE() {
  return (
    <Suspense>
      <IdeCommon />
    </Suspense>
  );
}
