"use client";

import dynamic from "next/dynamic";

const FluidCursor = dynamic(() => import("@/components/sections/FluidCursor"), { ssr: false });

export default function FluidCursorLoader() {
  return <FluidCursor />;
}
