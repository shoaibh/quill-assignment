import React from "react";

export const HorizontalLine = ({ marginBottom = 24, marginTop = 0 }: { marginBottom?: number; marginTop?: number }) => {
  return <div className="border-b border-solid  border-white/10 " style={{ marginBottom, marginTop }} />;
};
