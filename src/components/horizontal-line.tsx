import React from "react";

export const HorizontalLine = ({ marginBottom = 24 }: { marginBottom?: number }) => {
  return <div className="border-b border-solid  border-white/10 " style={{ marginBottom }} />;
};
