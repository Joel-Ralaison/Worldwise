"use client";

import { ScaleLoader } from "react-spinners";

export default function MapLoading() {
  return (
    <section className="z-10 flex h-svh w-svw items-center justify-center bg-zinc-950">
      <ScaleLoader width={10} height={35} color="#fef3c7" />
    </section>
  );
}
