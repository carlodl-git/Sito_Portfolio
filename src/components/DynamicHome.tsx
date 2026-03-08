"use client";

import dynamic from "next/dynamic";

const HomeClient = dynamic(
  () => import("@/components/HomeClient").then((mod) => ({ default: mod.HomeClient })),
  { ssr: false }
);

export default function DynamicHome() {
  return <HomeClient />;
}
